import logo from "../../assets/images/logo.png";
import { useLanguage } from "../LanguageContext";
import scrollToElement from "../ScrollUtils/ScrollUtils";
import styles from "./Header.module.scss";
import i18n from "i18next";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const Header = () => {
  const { language, changeLanguage } = useLanguage();

  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || "en"
  );

  useEffect(() => {
    setSelectedLanguage(language);
  }, [language]);

  const languages = ["en", "ja", "ua", "ru"];

  const handleClick = (e, targetId) => {
    e.preventDefault();
    scrollToElement(targetId);
  };

  return (
    <>
      <header>
        <div className={styles.container}>
          <a
            href="#main"
            className={styles.logoWrapp}
            onClick={(e) => handleClick(e, "main")}
          >
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
          <div>
            {languages.map((lang, index) => (
              <button
                className={`${styles.buttonLang} ${
                  selectedLanguage === lang ? styles.selected : ""
                }`}
                key={lang}
                onClick={() => {
                  changeLanguage(lang);
                  setSelectedLanguage(lang);
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <div className={styles.social_media}>
            <a
              href="https://www.facebook.com/profile.php/?id=100002520567489"
              target="blank"
            >
              <FaFacebook className={styles.media} />
            </a>
            <a
              href="https://www.instagram.com/iryna_derhachova?igsh=ZDE0aGMzYmZ6dXg4"
              target="blank"
            >
              <FaInstagramSquare className={styles.media} />
            </a>
            <a href="https://t.me/dreamiren777" target="blank">
              <BsTelegram className={styles.media} />
            </a>
            <a
              href="https://youtube.com/@japanesewithiryna?si=TV6f8OoN6ILOLXG-"
              target="blank"
            >
              <IoLogoYoutube className={styles.media} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
