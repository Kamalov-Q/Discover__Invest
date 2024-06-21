/* eslint-disable no-unused-vars */
import Slider from "react-slick";
import "./Team.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider Images Import
import slider1 from "../../../public/our_teams/1.webp";
import slider2 from "../../../public/our_teams/2.webp";
import slider3 from "../../../public/our_teams/3.webp";
import slider4 from "../../../public/our_teams/4.webp";
import slider5 from "../../../public/our_teams/5.webp";
import { t } from "i18next";

export default function Team() {
  // Slider settings
  var settings = {
    loop: true,
    dots: false,
    infinite: true, // Ensures looping
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Team">
      <div className="container_">
        <div className="row">
          <div
            className="col-lg-6 ms-lg-5 ms-sm-0 d-flex flex-column header"
            data-aos="fade-right"
          >
            <span>{t("Team.head1")}</span>
            <span className="mx-5">{t("Team.head2")}</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="slider-container">
              <Slider {...settings} className="slider">
                <div>
                  <img
                    src={slider1}
                    className="card-img"
                    alt="Kuziyev Jahongir Bahodirovich"
                  />
                  <h5>{t("Team.t1")}</h5>
                  <p>{t("Team.p1")}</p>
                </div>
                <div>
                  <img
                    src={slider2}
                    className="card-img"
                    alt="Norbekov Shavkat Bo`riboy o`g`li"
                  />
                  <h5>{t("Team.t2")}</h5>
                  <p>{t("Team.p2")}</p>
                </div>
                <div>
                  <img
                    src={slider3}
                    className="card-img"
                    alt="Artiqbayev Saxobiddin Doniyor o`g`li"
                  />
                  <h5>{t("Team.t3")}</h5>
                  <p>{t("Team.p3")}</p>
                </div>
                <div>
                  <img
                    src={slider4}
                    className="card-img"
                    alt="Boltayev Obidjon Uchqin o`g`li"
                  />
                  <h5>{t("Team.t4")}</h5>
                  <p>{t("Team.p4")}</p>
                </div>
                <div>
                  <img
                    src={slider5}
                    className="card-img"
                    alt="Xusanov Akromjon Turaxon o`g`li"
                  />
                  <h5>{t("Team.t5")}</h5>
                  <p>{t("Team.p5")}</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
