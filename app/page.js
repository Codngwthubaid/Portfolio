import React from 'react'
import Home from './PortHome/home'
import About from './About/about'
import Portfolio from './Portfolio/portfolio'
import Contact from './Contact/contact'
import ImageSetting from './ImageSetting/imageSetting'
import ServicesProvider from './ServicesProvider/servicesProvider'
import Experience from './Experience/Experience'

const page = () => {

  return (
    <>
      <main>
        {/* Home-Section */}
        <section><Home/></section>

        {/* ImageSetting-Section */}
        <section><ImageSetting /></section>

        {/* About-Section */}
        <section><About /></section>

        {/* Portfolio-Section */}
        <section><Portfolio /></section>

        {/* Experience-Section */}
        <section><Experience/></section>

        {/* ServicesProvider-Section */}
        <section><ServicesProvider/></section>

        {/* Contact-Section */}
        <section><Contact/></section>
      </main>
    </>
  )
}

export default page