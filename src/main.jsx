/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About_main from './Pages/About/About_main.jsx'
import Contact from './Components/ContactsPage/Contact.jsx'
import Navbar from '../src/Components/Navbar/Navbar.jsx'
import Footer from '../src/Components/Footer/Footer.jsx'
import Projects_main from './Pages/Projects/Projects_main.jsx'
import News_main from './Pages/News/News_main.jsx'
import './Responsive.css'
import { ToastContainer } from 'react-toastify'
import Contact_main from './Pages/Contacts/Contact_main.jsx'
import './i18next.jsx'
import { useTranslation } from 'react-i18next'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    {/*   <Navbar/> */}
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path='/about' element={<About_main/>}/>
        <Route path='/projects' element={<Projects_main/>}/>
        <Route path='/career' element="https://hr.di.uz/"/>
        <Route path='/news' element={<News_main/>}/>
        <Route path='/contacts' element={<Contact_main/>}/>
        <Route path='/facebook' element="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push"/>
        <Route path='/instagram' element="https://www.instagram.com/discover_invest?igshid=ZDdkNTZiNTM%3D"/>
        <Route path='/telegram' element="https://www.instagram.com/discover_invest?igshid=ZDdkNTZiNTM%3D"/>
      </Routes>
      <ToastContainer />
      <Contact/>
      <Footer/>
    </Router>
  </React.StrictMode>,
)
