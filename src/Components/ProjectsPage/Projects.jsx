/* eslint-disable no-unused-vars */
//Our Projects Images Import 
import { Link } from 'react-router-dom'
import project1 from '../../../public/our_projects/1.webp'
import project2 from '../../../public/our_projects/2.webp'
import project3 from '../../../public/our_projects/1.webp'
import project4 from '../../../public/our_projects/4.webp'
import project5 from '../../../public/our_projects/5.webp'
import project6 from '../../../public/our_projects/6.webp'

import './Projects.css'
import { t } from 'i18next'

export default function Projects() {
  return (
    <div className='Projects'>
    {/* <div className="container">
        <div className="row" style={{marginBlock:"50px"}}>
        <div className="col-lg-6 ms-5 d-flex flex-column header" data-aos="fade-right" style={{fontSize:"50px", fontWeight:"600"}}>
            <span>Our</span>
            <span className="mx-5">Projects</span>
        </div>
      </div>
    </div> */}
        <div className="container img-container">
<div className="row">
<div className="col-lg-6 col_" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
    <img src={project1} style={{width:"95%", height:"350px"}} alt="" />
    <div className="row">
        <div className="col-lg-8 col2">
        <h4>{t("Projects.p1")}</h4>
    <p>{t("Projects.in1")}</p>
        </div>
    </div>
</div>
<div className="col-lg-6 col_" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
    <img src={project2} style={{width:"95%", height:"350px"}} alt="" />
    <div className="row">
        <div className="col-lg-8 col2">
            <h4>{t("Projects.p2")}</h4>
            <p>{t("Projects.in2")}</p>
        </div>
    </div>
</div>
</div>
<div className="row" style={{marginTop:"30px"}}>
<div className="col-lg-6 col_" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
    <img src={project3} style={{width:"95%", height:"350px"}} alt="" />
    <div className="row">
        <div className="col-lg-8 col2">
            <h4>{t("Projects.p3")}</h4>
            <p>{t("Projects.in3")}</p>
        </div>
    </div>
</div>
<div className="col-lg-6 col_" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
    <img src={project4} style={{width:"95%", height:"350px"}} alt="" />
    <div className="row">
        <div className="col-lg-8 col2">
            <h4>{t("Projects.p4")}</h4>
            <p>{t("Projects.in4")}</p>
        </div>
    </div>
</div>
</div>
<div className="row" style={{marginTop:"30px"}}>
<div className="col-lg-6 col_" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
    <img src={project5} style={{width:"95%", height:"350px"}} alt="" />
    <div className="row">
        <div className="col-lg-8 col2">
            <h4>{t("Projects.p5")}</h4>
            <p>{t("Projects.in5")}</p>
        </div>
    </div>
</div>
<div className="col-lg-6 col_" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
    <img src={project6} style={{width:"95%", height:"350px"}} alt="" />
    <div className="row">
        <div className="col-lg-8 col2">
            <h4>{t("Projects.p6")}</h4>
            <p>{t("Projects.in6")}</p>
        </div>
    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12 d-flex align-items-center justify-content-center">
                   <Link to="/projects" className='btn'> <button className='projects_btn'>{t("Projects.btn")}</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
