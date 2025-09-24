import style from "../src/assets/scss/App.module.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import { LanguageProvider } from "./components/LanguageContext";
import Footer from "./components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BusinessSupport from "./components/Pages/BusinessSupport/BusinessSupport";
import GroupJapanese from "./components/Pages/GroupJapanese/GroupJapanese";
import IndividualJapanese from "./components/Pages/IndividualJapanese/IndividualJapanese";
import Translation from "./components/Pages/Translation/Translation";
import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet-async";
import Success from "./components/Success/Success";
import Cancel from "./components/Cancel/Cancel";

function App() {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return <div>Loading...</div>;

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{t("pageTitle")}</title>
        <meta name="description" content={t("metaDescription")} />
        <meta property="og:title" content={t("pageTitle")} />
        <meta property="og:description" content={t("metaDescription")} />
      </Helmet>

      <LanguageProvider>
        <div className={style.app}>
          <div className={style.container}>
            <Header />
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Main />
                    <Services />
                    <AboutMe />
                    <Reviews />
                    <Contacts />
                  </>
                }
              />
              <Route path="/BusinessSupport" element={<BusinessSupport />} />
              <Route path="/GroupJapanese" element={<GroupJapanese />} />
              <Route
                path="/IndividualJapanese"
                element={<IndividualJapanese />}
              />
              <Route path="/Translation" element={<Translation />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
