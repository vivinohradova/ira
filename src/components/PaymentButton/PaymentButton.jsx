import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./PaymentButton.module.scss";
import { useTranslation } from "react-i18next";

const stripePromise = loadStripe(
  "pk_test_51RoNsYE0lOutOPcCerxC4fjef64TlLYAIhPXGpNm74DOCfgQmgZOYSF2vO2tZOydFsnYoThNHl457Dl9r4yS1F4C00h5wQv9aW"
); // твой публичный ключ

const PaymentButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  // минимальные суммы для валют
  const MIN_AMOUNT = {
    usd: 0.5,
    eur: 0.5,
    jpy: 50,
  };

  const handleClick = async () => {
    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) return alert(t("amount"));

    // проверка на минималку
    if (numericAmount < MIN_AMOUNT[currency]) {
      return alert(
        `${t("min")}: ${MIN_AMOUNT[currency]} ${currency.toUpperCase()}`
      );
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: numericAmount, currency }),
        }
      );

      const data = await res.json();
      if (!data.id) {
        setLoading(false);
        return alert(t("failed"));
      }

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error("Ошибка:", error);
      alert(t("wrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Кнопка открытия модалки */}
      <button className={styles.button} onClick={() => setIsOpen(true)}>
        {t("pay")}
      </button>

      {/* Модальное окно */}
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>{t("enter")}</h2>
            <div>
              <input
                className={styles.input}
                type="number"
                step={currency === "jpy" ? "1" : "0.01"}
                min={MIN_AMOUNT[currency]}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={
                  currency === "jpy"
                    ? `${t("example")}: 1000`
                    : `${t("example")}: 25.99`
                }
              />
              <select
                className={styles.select}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option className={styles.currency} value="usd">
                  USD
                </option>
                <option className={styles.currency} value="eur">
                  EUR
                </option>
                <option className={styles.currency} value="jpy">
                  JPY
                </option>
              </select>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.pay}
                onClick={handleClick}
                disabled={loading}
              >
                {loading ? `${t("loading")}` : `${t("pay")}`}
              </button>
              <button
                className={styles.cancel}
                onClick={() => setIsOpen(false)}
              >
                {t("cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentButton;
