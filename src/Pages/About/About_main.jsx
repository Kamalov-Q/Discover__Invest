/* eslint-disable no-unused-vars */
import Navbar from "../../Components/Navbar/Navbar";
import about1 from "../../../public/about.jpg";
import Contact from "../../Components/ContactsPage/Contact";
import "./About_main.css";
import { useState } from "react";

//About Section Images
import ab1 from "../../../public/About/1.jpg";
import ab2 from "../../../public/About/2.jpg";
import ab3 from "../../../public/About/3.jpg";
import { t } from "i18next";

export default function About_main() {
  return (
    <div className="About_main">
      <Navbar />
      <div>
        <div className="containerBg">
          <div className=" container container_">
            <div className="row">
              <div className="col-lg-5 header">
                <span>
                  {t("About_main.head1")} <div>{t("About_main.head2")}</div>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 para">
                <p>{t("About_main.in1")}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 d-flex flex-row">
                <button className="btn1">
                  {t("About_main.btn1")}
                  <i className="fa-solid fa-download ms-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container2" style={{ marginTop: "150px" }}>
        <div className="row" style={{ marginBlock: "50px" }}>
          <div
            className="col-lg-6 ms-lg-5 ms-sm-0 d-flex flex-column header"
            data-aos="fade-right"
            style={{ fontSize: "50px", fontWeight: "600" }}
          >
            <span>{t("About_main.p1")}</span>
            <span className="mx-5">{t("About_main.p2")}</span>
            <svg
              className="rectangle"
              width="631"
              height="490"
              viewBox="0 0 531 690"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1">
                <path
                  d="M209.43 70.0665V0H530.972V477.544H437.473L437.525 432.833H488.44V44.7113H251.963V70.0409H412.99V690H0V70.0409H209.405L209.43 70.0665ZM80.4752 641.905H363.766V477.57H244.682L80.4752 641.905ZM209.43 447.549V150.208H254.911V429.885H363.766V118.188H49.2491V607.858L209.43 447.549Z"
                  fill="#8F8F8F"
                ></path>
              </g>
            </svg>
          </div>
          <div className="col-lg-5">
            <img src={about1} />
            <p className="mt-3">{t("About_main.inf1")}</p>
            <button className="btn">{t("About_main.btn2")}</button>
          </div>
        </div>
      </div>
      <div className="container3 container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3>{t("About_main.h1")}</h3>
            <p>{t("About_main.pa1")}</p>
          </div>
          <div className="col-lg-5" data-aos="fade-down-right">
            <img src={ab1} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3>{t("About_main.h2")}</h3>
            <p>{t("About_main.pa2")}</p>
          </div>
          <div className="col-lg-5" data-aos="fade-down-right">
            <img src={ab2} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3>{t("About_main.h3")}</h3>
            <p>{t("About_main.pa3")}</p>
          </div>
          <div className="col-lg-5" data-aos="fade-down-right">
            <img src={ab3} alt="" />
          </div>
        </div>
      </div>
      <div className="container container4">
        <div className="row">
          <div className="col-lg-3 cards">
            <h2>14</h2>
            <span>{t("About.col-4")}</span>
          </div>
          <div className="col-lg-3 cards">
            <h2>4000+</h2>
            <span>{t("About.col-1")}</span>
          </div>
          <div className="col-lg-3 cards">
            <h2>150+</h2>
            <span>{t("About.col-2")}</span>
          </div>
          <div className="col-lg-3 cards">
            <h2>16</h2>
            <span>{t("About.col-3")}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 cards">
            <h2>250+</h2>
            <span>{t("About.col-5")}</span>
          </div>
          <div className="col-lg-3 cards">
            <h2>9+</h2>
            <span>{t("About.col-7")}</span>
          </div>
        </div>
      </div>
      {/* <Contact/> */}
    </div>
  );
}
