/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import videoBg from '../../../src/assets/banner.mp4'
import './Home.css'
import { t } from 'i18next'
export default function Home() {
  return (
    <div className='Home'>
        <video src={videoBg} autoPlay loop muted ></video>
        <div className="container container_">
      <div className="row">
        <div className="col-lg-5 header">
          <span>{t("Home.head1")} <div>{t("Home.head2")}</div></span>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 para">
          <p>{t("Home.p")}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 d-flex flex-row">
          <Link to="/projects" className='btn1 btn'>{t("Navbar.Projects")}</Link>
          <Link to="/contacts" className='btn2 btn'>{t("Navbar.Contacts")}</Link>
        </div>
      </div>
        </div>
    </div>
  )
}
