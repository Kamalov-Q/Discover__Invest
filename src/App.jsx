/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import About from "./Components/AboutPage/About";
import About_main from "./Pages/About/About_main";
import Advantages from "./Components/Advantages/Advantages";
import Company_news from "./Components/NewsPage/Company_news";
import Contact from "./Components/ContactsPage/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/ProjectsPage/Projects";
import Team from "./Components/TeamPage/Team";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
//Updated 28.06.2024 00:25
//Main//
{
  /* <div>
<Navbar/>
<Home/>
<Advantages/>
<Team/>
<Projects/>
<Company_news/>
<Contact/>
<Footer/>
</div> */
}
//Main//
<About_main />;
function App() {
  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem("i18nextLng");
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <>
      <Navbar languages={languages} handleChange={handleChange} />
      <Home />
      <About />
      <Advantages />
      <Team />
      <div className="container Projects__">
        <div className="row">
          <div
            className="col-lg-6 ms-lg-5 ms-lg-0 d-flex flex-column header"
            data-aos="fade-right"
          >
            <span>{t("Projects.head1")}</span>
            <span className="mx-5">{t("Projects.head2")}</span>
          </div>
        </div>
      </div>
      <Projects />
      <div className="container Company_news__">
        <div className="row">
          <div
            className="col-lg-6 ms-lg-5 ms-sm-0 d-flex flex-column header"
            data-aos="fade-right"
          >
            <span>{t("News.head1")}</span>
            <span className="mx-5">{t("News.head2")}</span>
          </div>
        </div>
      </div>
      <Company_news />
      {/*   <Contact/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
