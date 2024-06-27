/* eslint-disable no-unused-vars */
import axios from "axios";
import "./Contact.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { t } from "i18next";
export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendYourMessage = (event) => {
    event.preventDefault();
    const token = "7230993801:AAFeElsynFsL_6QIuc9P5-d0t9zM1Lw2DpE";
    const chatID = -1002216421384;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const phone = document.getElementById("phone_num").value;
    const name = document.getElementById("name").value;
    const time = new Date();
    const messageContent = `Ismi: ${name} \nTel. raqami: ${phone} \nTime: ${time}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatID,
        text: messageContent,
      },
    })
      .then((res) => {
        toast.success("Muvaffaqiyatli yuborildi");
        document.getElementById("myForm").reset();
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  };

  /*  const SendMessage = (event) => {
    event.preventDefault();
    const token = "7401968982:AAH8EyV7PZ9sRzJRZA20-jaibAPvF4PU-dw";
    const chatID = -1002175260846;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name");
    const phone_number = document.getElementById("phone_num");
    const message = `User : ${name}   Phone Number : ${phone_number}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id : chatID,
        text : message
      }
    }).then((resp) => {
      alert("Muvaffaqiyatli Yuborildi");
    }).catch(err => console.error(err));
  
  } */

  return (
    <div className="Contact">
      <div className="container container_">
        <div className="row d-flex">
          <div className="col-lg-5">
            <span>{t("Contact.head")}</span>
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
                  <p className="text-muted">{t("Contact.p3")}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 d-flex d-sm-flex justify-content-sm-center">
                <i
                  className="bi bi-facebook"
                  style={{ fontSize: "25px", marginInline: "10px" }}
                ></i>
                <i
                  className="bi bi-instagram"
                  style={{ fontSize: "25px", marginInline: "10px" }}
                ></i>
                <i
                  className="bi bi-telegram"
                  style={{ fontSize: "25px", marginInline: "10px" }}
                ></i>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form>
                  <div className="row contact_main">
                    <div className="col-lg-4">
                      <p className="form-text" style={{ fontSize: "13px" }}>
                        {t("Contact.for1")}
                      </p>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone_num"
                        placeholder="+998"
                      />
                    </div>
                    <div className="col-lg-4 ">
                      <p className="form-text" style={{ fontSize: "13px" }}>
                        {t("Contact.for2")}
                      </p>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="col-lg-4 feedback_btn mt-3 d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-sm"
                        type="submit"
                        onClick={sendYourMessage}
                        loading={loading}
                      >
                        {loading ? "Sending" : t("Contacts.btn")}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-3 map_ mt-sm-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11983.182925001685!2d69.2758336!3d41.335055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1717414791197!5m2!1sru!2s"
              style={{ border: "0", width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
