import { t } from "i18next";
import "./Contact_main.css";
import Navbar from "../../Components/Navbar/Navbar";
export default function Contact_main() {
  return (
    <div className="Contacts_main">
      <Navbar />
      <div className="containerBackG">
        <div className=" container container_">
          <div className="row">
            <div className="col-lg-5 header">
              <span>{t("Contacts.head")}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 para">
              <p>{t("Contacts.info")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 button_1">
              <a href="#info">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 21 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.1 13L7.6125 18.6875L9.1875 20.5833L8.925 16.25L8.925 -5.27815e-07L12.075 -3.90124e-07L12.075 16.25L11.8125 20.5833L13.3875 18.6875L18.9 13L21 15.1667L10.5 26L-6.62956e-07 15.1667L2.1 13Z"
                    fill="#FAB448"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container2 container">
        <div className="row">
          <div className="col-lg-7" id="info">
            <span>{t("Contacts.p1")}</span>
            <div className="mx-5">{t("Contacts.p2")}</div>
            <p>{t("Contacts.info")}</p>
            <div className="row mt-5">
              <div className="col-md-4 d-sm-flex flex-sm-column align-items-sm-center">
                <div className="d-flex flex-md-wrap text-sm-center">
                  <i
                    className="fa-solid fa-location-dot me-1"
                    style={{ color: "#FAB448", fontSize: "30px" }}
                  ></i>
                  <h4>{t("Contact.h1")}</h4>
                </div>
                <div>
                  <p className="text-muted">{t("Contact.p1")}</p>
                </div>
              </div>
              <div className="col-md-4 d-sm-flex flex-sm-column align-items-sm-center">
                <div className="d-flex flex-wrap">
                  <i
                    className="fa-solid fa-phone-volume me-2"
                    style={{ color: "#FAB448", fontSize: "25px" }}
                  ></i>
                  <h4>{t("Contact.h2")}</h4>
                </div>
                <div>
                  <p className="text-muted">+998910714027</p>
                </div>
              </div>
              <div className="col-md-4 d-sm-flex flex-sm-column align-items-sm-center">
                <div className="d-flex flex-wrap">
                  <i
                    className="fa-solid fa-clock me-2"
                    style={{ color: "#FAB448", fontSize: "25px" }}
                  ></i>
                  <h4>{t("Contact.h3")}</h4>
                </div>
                <div>
                  <p className="text-muted">{t("Contacts.p3")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <form>
                  <div className="form-text">{t("Contact.for2")}</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What is your name"
                    required
                  />
                  <div className="form-text">{t("Contact.for1")}</div>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+998"
                    required
                  />
                  <div className="form-text">{t("Navbar.select.op1")}</div>
                  <select
                    name="selected"
                    className="select form-select"
                    style={{ height: "50px" }}
                    id="your_selected"
                    required
                  >
                    <option value="Department">{t("Navbar.select.op1")}</option>
                    <option value="Sales Department">
                      {t("Navbar.select.op2")}
                    </option>
                    <option value="Human Resources Department">
                      {t("Navbar.select.op3")}
                    </option>
                    <option value="Financial Department">
                      {t("Navbar.select.op4")}
                    </option>
                    <option value="Accounting">{t("Navbar.select.op5")}</option>
                    <option value="Purchasing Department">
                      {t("Navbar.select.op6")}
                    </option>
                    <option value="Office">{t("Navbar.select.op7")}</option>
                  </select>
                  <div className="form-text">{t("Contacts.p3")}</div>
                  <textarea
                    className=" form-control"
                    cols={30}
                    rows={10}
                    placeholder="Leave your question.."
                  ></textarea>
                  <div className="btn btn_">
                    <button>{t("Contacts.btn")}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container___">
        <div className="row">
          <div className="col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11983.182925001685!2d69.2758336!3d41.335055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1717763375237!5m2!1sru!2s"
              style={{
                border: "0",
                width: "100%",
                height: "70vh",
                marginBottom: "100px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Contact_main />
    </div>
  );
}
