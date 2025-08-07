import ButtonMore from "../../ButtonMore/ButtonMore";
import styles from "./Translation.module.scss";
import { TbBuildingCommunity } from "react-icons/tb";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { FaClinicMedical } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaVideo } from "react-icons/fa";
import ease from "../../../assets/images/ease.jpg";
import { Trans, useTranslation } from "react-i18next";

const Translation = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="main" className={styles.page}>
        <section className={styles.interpretation}>
          <div className={styles.container}>
           <ButtonMore link={"/"} text={t("homeButton")} />
            <h2 className={styles.title}>{t("translationMain")}</h2>
            <p className={styles.text}>{t("translationText")}</p>
            <ul>
              <li>
                <TbBuildingCommunity className={styles.icon} />
                <div>
                  <h3>
                    {" "}
                    <Trans i18nKey="translationInterpretation.item1" />
                  </h3>
                  <p>
                    <Trans i18nKey="translationInterpretation.item2" />
                  </p>
                </div>
              </li>

              <li>
                <MdBusinessCenter className={styles.icon} />
                <div>
                  <h3>
                    <Trans i18nKey="translationInterpretation.item3" />
                  </h3>
                  <p>
                    <Trans i18nKey="translationInterpretation.item4" />
                  </p>
                </div>
              </li>

              <li>
                <IoMdBusiness className={styles.icon} />
                <div>
                  <h3>
                    <Trans i18nKey="translationInterpretation.item5" />
                  </h3>
                  <p>
                    <Trans i18nKey="translationInterpretation.item6" />
                  </p>
                </div>
              </li>

              <li>
                <FaClinicMedical className={styles.icon} />
                <div>
                  <h3>
                    <Trans i18nKey="translationInterpretation.item7" />
                  </h3>
                  <p>
                    <Trans i18nKey="translationInterpretation.item8" />
                  </p>
                </div>
              </li>
            </ul>
            <p className={styles.text}>{t("translationText1")}</p>
          </div>
        </section>

        <section className={styles.translation}>
          <div className={styles.container}>
            <h2>{t("translationText2")}</h2>
            <p className={styles.text}>{t("translationText3")}</p>
            <ul>
              <li>
                <MdDocumentScanner className={styles.icon} />
                <Trans i18nKey="translationText4.item1" />
              </li>
              <li>
                <FaClinicMedical className={styles.icon} />
                <Trans i18nKey="translationText4.item2" />
              </li>
              <li>
                <MdMarkEmailRead className={styles.icon} />
                <Trans i18nKey="translationText4.item3" />
              </li>
              <li>
                <MdCastForEducation className={styles.icon} />
                <Trans i18nKey="translationText4.item4" />
              </li>
              <li>
                <CgWebsite className={styles.icon} />
                <Trans i18nKey="translationText4.item5" />
              </li>
              <li>
                <FaVideo className={styles.icon} />
                <Trans i18nKey="translationText4.item6" />
              </li>
            </ul>
            <p className={styles.text}>{t("translationText5")}</p>
          </div>
        </section>

        <section className={styles.communicating}>
          <div className={styles.container}>
            <h2 className={styles.title}>{t("translationText6")}</h2>
            <div>
              <p>{t("translationText7")}</p>
              <img src={ease} alt="girl learns from books" />
            </div>
          </div>
        </section>
        <section className={styles.call}>
          <div className={styles.container}>
            <h2>{t("translationText8")}</h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Translation;
