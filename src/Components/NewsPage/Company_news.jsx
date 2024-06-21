import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Company_news.css';

//Company News Images Import
import news1 from '../../../public/News/1.webp'
import news2 from '../../../public/News/2.webp'
import news3 from '../../../public/News/3.webp'
import news4 from '../../../public/News/4.webp'
import { Link } from "react-router-dom";
import { t } from "i18next";


//Company News Images Import


export default function Company_news() {
    var settings = {
        dots: false,
        infinite: true,
        loop: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
          }},
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="Company_news" style={{width:"100%", height:"100%", marginBottom:"50px", marginTop:"50px"}}>
      <div className="container">
        {/* <div className="row" style={{marginBlock:"50px"}}>
        <div className="col-lg-6 ms-5 d-flex flex-column header" data-aos="fade-right" style={{fontSize:"50px", fontWeight:"600"}}>
            <span>Company</span>
            <span className="mx-5">News</span>
        </div>
      </div> */}
      <div className="row">
        <div className="col-lg-12">
    <div className="slider-container">
      <Slider {...settings} className="slider">
        <div style={{marginRight:"30px"}}>
          <span>2023-01-27</span>
            <img  src={news1} style={{width:"100%", height:"400px"}} />
            <p>{t("News.p1")}</p>
        </div>
        <div style={{marginRight:"30px"}}>
          <span>2022-12-31</span>
          <img src={news2} style={{width:"100%", height:"400px"}}/>
          <p>{t("News.p2")}</p>
        </div>
        <div style={{marginRight:"30px"}}>
          <span>2022-10-02</span>
            <img src={news3} style={{width:"100%", height:"400px"}}/>
            <p>{t("News.p3")}</p>
        </div>
        <div style={{marginRight:"30px"}}>
          <span>2022-12-19</span>
          <img src={news4} style={{width:"100%", height:"400px"}}/>
          <p>{t("News.p4")}</p>
        </div>
      </Slider>
    </div>
    </div>
    </div>
    <div className="row mt-5">
        <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <Link to="/news" className="btn"><button className="company_news">{t("News.btn")}</button></Link>
        </div>
    </div>
    </div>
    </div>
  )
}
