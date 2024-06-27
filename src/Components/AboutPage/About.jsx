import { t } from "i18next";
import "./About.css";
export default function About() {
  return (
    <div className="About">
      <div className="container container__">
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
        <div className="row">
          <div
            className="col-lg-5 ms-lg-5 ms-sm-0 d-flex flex-column header"
            data-aos="fade-right"
          >
            <span className="header_">
              <span className="mx-lg-5 m-sm-0">{t("About.head1")}</span>
            </span>
            <p>{t("About.info")}</p>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div
                className="col-lg-4 col4"
                style={{ border: "1px solid black", visibility: "hidden" }}
              ></div>
              <div
                className="col-lg-4 col4"
                style={{ border: "1px solid black" }}
              >
                <h1>4000+</h1>
                <span>{t("About.col-1")}</span>
              </div>
              <div
                className="col-lg-4 col4"
                style={{ border: "1px solid black" }}
              >
                <h1>150+</h1>
                <span>{t("About.col-2")}</span>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col4"
                style={{ border: "1px solid black" }}
              >
                <h1>16</h1>
                <span>{t("About.col-3")}</span>
              </div>
              <div
                className="col-lg-4 col4"
                style={{ border: "1px solid black" }}
              >
                <h1>14</h1>
                <span>{t("About.col-4")}</span>
              </div>
              <div
                className="col-lg-4 col4"
                style={{ border: "1px solid black" }}
              >
                <h1>250+</h1>
                <span>{t("About.col-5")}</span>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col4_"
                style={{ border: "1px solid black" }}
              >
                <h1>
                  <a
                    href="/about"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {t("About.col-6")}
                  </a>
                </h1>
              </div>
              <div
                className="col-lg-4 col4"
                style={{ border: "1px solid black" }}
              >
                <h1>9+</h1>
                <span>{t("About.col-7")}</span>
              </div>
              <div
                className="col-lg-4 col4"
                style={{ border: "1px solid black", visibility: "hidden" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
