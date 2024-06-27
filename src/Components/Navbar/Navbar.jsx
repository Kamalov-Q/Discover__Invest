/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Button, Modal, Typography } from "antd";
import axios from "axios";
import brand from "../../../public/Vector.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export default function Navbar({ handleChange, languages }) {
  /*   const {t, i18n} = useTranslation();
  const languages = localStorage.getItem('i18nextLng');
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  } */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const sendYourMessage = (event) => {
    event.preventDefault();
    const token = "7230993801:AAFeElsynFsL_6QIuc9P5-d0t9zM1Lw2DpE";
    const chatID = -1002216421384;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("your_name").value;
    const phone = document.getElementById("your_number").value;
    const department = document.getElementById("your_selected").value;
    const time = new Date();
    const messageContent = `Ismi: ${name} \nTel. raqami: ${phone} \nDepartment : ${department} \nTime: ${time}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatID,
        text: messageContent,
      },
    })
      .then((res) => {
        setIsModalOpen(false);
        toast.success("Muvaffaqiyatli yuborildi");
        document.getElementById("myForm").reset();
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const x = useLocation().pathname;
  /* console.log(x?.includes("projects")) */
  /*  console.log(x?.includes("news")); */
  return (
    <div className="Navbar">
      <div
        className={
          x?.includes("projects") || x?.includes("news") || color
            ? "projects" || "navbar_ navbar_Bg"
            : "navbar_"
        }
      >
        <nav className="navbar navbar-expand-lg text-light">
          <div className="container-lg">
            <Link className="navbar-brand" to="/">
              <div className="d-flex align-items-center">
                <img src={brand} alt="" />
                <span
                  className="ms-2 text-light"
                  style={{ fontSize: "17px", lineHeight: "15px" }}
                >
                  {t("Home.head1")} <div>{t("Home.head2")}</div>
                </span>
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
                <i className="bi bi-list"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-dark">
                <li className="nav-item">
                  <Link aria-current="page" to="/about" className="a1">
                    {t("Navbar.About")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="a1">
                    {t("Navbar.Projects")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="https://hr.di.uz/" className="a1">
                    {t("Navbar.Career")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/news" className="a1">
                    {t("Navbar.News")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="a1">
                    {t("Navbar.Contacts")}
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push"
                    className="a2"
                  >
                    <i className="bi bi-facebook"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="https://www.instagram.com/discover_invest?igshid=ZDdkNTZiNTM%3D"
                    className="a2"
                  >
                    <i className="bi bi-instagram"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="https://t.me/discovery_invest" className="a2">
                    <i className="bi bi-telegram"></i>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <select
                  name="Lng"
                  id="language_select lng"
                  onChange={handleChange}
                  value={languages}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    outline: "none",
                  }}
                  /* className={color ? "selected select" : "selected"} */
                >
                  <option value="en">EN</option>
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                </select>
              </ul>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item d-flex align-items-center p-1">
                  <a href="#" className="a3">
                    +998910714027
                  </a>
                </li>
                <li className="nav-item" style={{ background: "#FAB448" }}>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      paddingInline: "13px",
                      paddingBlock: "10px",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i className="bi bi-telephone-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </nav>
      </div>
      <li className="icon_phone list-unstyled">
        <a
          href="#"
          style={{
            color: "white",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="primary"
            className="phone_icon_"
            style={{ background: "#FAB448" }}
            onClick={showModal}
          >
            <i className="bi bi-telephone-fill"></i>
          </Button>
          <Modal
            title="WE WILL CALL YOU BACK"
            okText="Close"
            footer={null}
            open={isModalOpen}
            onOk={handleCancel}
            onCancel={handleCancel}
          >
            <Typography>
              <p className="my-4">{t("Navbar.p")}</p>
            </Typography>
            <form className="form" onSubmit={sendYourMessage}>
              <input
                type="text"
                id="your_name"
                className="form-control mb-3"
                style={{ height: "50px" }}
                placeholder="Your Name"
                required
              />
              <input
                type="tel"
                style={{ height: "50px" }}
                className="form-control mb-3"
                placeholder="+998"
                id="your_number"
                required
              />
              <select
                name="selected"
                className="select form-select my-4"
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
              <button
                className="btn w-100 mb-4"
                style={{ background: "#FAB448", color: "white" }}
                type="submit"
                loading={loading}
              >
                {loading ? "Sending" : "Send"}
              </button>
              <p className="form-text w-100 text-center">{t("Navbar.info")}</p>
            </form>
          </Modal>
        </a>
      </li>
    </div>
  );
}
