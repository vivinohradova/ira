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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessSupport from "./components/Pages/BusinessSupport/BusinessSupport";
import GroupJapanese from "./components/Pages/GroupJapanese/GroupJapanese";
import IndividualJapanese from "./components/Pages/IndividualJapanese/IndividualJapanese";
import Translation from "./components/Pages/Translation/Translation";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { t } = useTranslation();
  return (
    <>
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
            </Routes>
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
