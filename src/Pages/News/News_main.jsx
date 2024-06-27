import { t } from "i18next";
import Company_news from "../../Components/NewsPage/Company_news";
import "./News_main.css";
import Navbar from "../../Components/Navbar/Navbar";

export default function News_main() {
  return (
    <div className="News_main">
      <Navbar />
      <div className="_main d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>{t("Navbar.News")}</h1>
            </div>
            <div className="col-lg-6">
              <p>{t("News_main.info")}</p>
            </div>
          </div>
        </div>
      </div>
      <Company_news />
      {/*         <Contact/> */}
    </div>
  );
}
