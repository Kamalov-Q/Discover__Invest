 import { t } from 'i18next'
import Projects from '../../Components/ProjectsPage/Projects'
import './Projects_main.css'
import Navbar from '../../Components/Navbar/Navbar'
export default function Projects_main() {
  return (
    <div className="Projects_main" id="Projects">
        <Navbar/>
        <div className="_main d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>{t("Navbar.Projects")}</h1>
                    </div>
                    <div className="col-lg-6">
                        <p>{t("Projects_main.info")}</p>
                    </div>
                </div>
            </div>
        </div>
        <Projects/>
  {/*       <Contact/> */}
    </div>
  )
}
