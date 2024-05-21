import React from 'react'
import Logo1 from "../../../Assests/img/logo1.webp";
import Logo2 from "../../../Assests/img/logo2.webp";
import Logo3 from "../../../Assests/img/logo3.webp";
import Logo4 from "../../../Assests/img/logo4.webp";
import "./LogoGroup.css";
const LogoGroup = () => {
    return (
        <>
            <div className='logo-group'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6 col-xs-6 col-lg-3 sm-text-center'><a href='https://calendly.com/lifeup-health' target='_blank'><img src={Logo1} alt='Logo1'></img></a></div>
                        <div className='col-md-3 col-sm-6 col-xs-6 col-lg-3 sm-text-center'><a href='https://www.integrativehealthpractitioner.org/' target='_blank'><img src={Logo2} alt='Logo2'></img></a></div>
                        <div className='col-md-3 col-sm-6 col-xs-6 col-lg-3 sm-text-center'><a href='https://www.nsca.com/certification/cscs/' target='_blank'><img src={Logo3} alt='Logo3'></img></a></div>
                        <div className='col-md-3 col-sm-6 col-xs-6 col-lg-3 sm-text-center'><a href='https://www.precisionnutrition.com/' target='_blank'><img src={Logo4} alt='Logo4'></img></a></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LogoGroup


