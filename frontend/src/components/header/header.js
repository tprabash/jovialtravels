import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion} from "framer-motion";
import logo from '../../assats/img/logo_white.svg';
import styles from '../header/header.module.css';

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import fb from '../../assats/img/facebook-svgrepo-com.svg'
import ig from '../../assats/img/instagram-svgrepo-com.svg'
import tw from '../../assats/img/twitter-svgrepo-com.svg'
import Ln from '../../assats/img/linkedin-rounded-svgrepo-com.svg'
import close from '../../assats/img/close-svgrepo-com.svg'
import Form from '../form'

import Menu from '../../assats/img/menu-hamburger-svgrepo-com.svg'
import Email from '../../assats/img/email-svgrepo-com.svg'
import Call from '../../assats/img/call-svgrepo-com.svg'




export default function Header() {

    useEffect(() => {
       
      });
      
      const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpen2: false,
        
      });
  


    const variants = {
        hidden: { opacity: 0, x: 0, y: -50 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -50 },
      }

      function closeMenu() {
        setState({ isPaneOpen: false });
        
      }

  return (
    <>
  
        <motion.section 
         key="header_new"
        variants={variants} // Pass the variant object into Framer Motion 
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'linear', duration: 1, delay: 1, }}
    
        className='container z-index-reletive'>
                <div className='row pt-3'>
                    <div className={`${styles.flex_start_new} justify-content-start d-flex align-items-center col-4 ...`}>
                    <div>
                        <img onClick={() => setState({ isPaneOpen: true })} className="only_Mobile" src={Menu} width="32px" />
                        <div className="only_dextop flex-header-dextop">
                        <p onClick={() => setState({ isPaneOpen: true })} className={styles.menu_text}>Menu</p>
                        <h5 onClick={closeMenu} className=""><Link exact to="/exclusive-offers">Special Offers</Link></h5>
                        </div>
                        

                        <SlidingPane
                        className="some-custom-class menu_slidein"
                        overlayClassName="some-custom-overlay-class"
                        isOpen={state.isPaneOpen}
                        closeIcon={<div><img src={close} width="40px"/></div>}
                        from="left"
                        width="35%"
                        onRequestClose={() => {
                        // triggered on "<" on left top click or on outside click
                        setState({ isPaneOpen: false });
                        }}
                    >
                      <div>
                       
                        {/* <h3 onClick={closeMenu} className="mb-3"><Link exact to="/our-partners">VIP Services</Link></h3> */}
                        <h5 onClick={closeMenu} className=""><Link exact to="/our-partners">Our Partners</Link></h5>
                        <h5 onClick={closeMenu} className=""><Link exact to="/exclusive-offers">Special Offers</Link></h5>
                        

                        <h5  onClick={closeMenu} className="menu_item"><Link exact to="/weddings-and-anniversaries">Weddings and Anniversaries
</Link></h5>
                        <h5 onClick={closeMenu} className="menu_item"><Link exact to="/honeymoon-and-romantic-stays">Honeymoon and Romantic Stays</Link></h5>
                        <h5 onClick={closeMenu} className="menu_item"><Link exact to="/spa-and-wellness-retreats">Spa and Wellness Retreats</Link></h5>
                        <h5 onClick={closeMenu} className="menu_item"><Link exact to="/family-getaways">
                    Family Getaways</Link></h5>
              <h5 onClick={closeMenu} className=""><Link exact to="/about">About Us</Link></h5>
            <h5 onClick={closeMenu} className=""><Link exact to="/contact-us">Contact Us</Link></h5>

                        <p  onClick={closeMenu} className="menu_item mt-5"><Link exact to="/privacy-policy">Privacy Policy</Link></p>
                        <p  onClick={closeMenu} className="menu_item"><Link exact to="/terms-&-conditions">Terms & Conditions</Link></p>
                        <p  onClick={closeMenu} className="menu_item"><Link exact to="/blogs">Blogs</Link></p>


                        <div className="header-shosl">
                        <a href='https://www.facebook.com/jovial.travels.luxury' target="_blank">
                                <img
                            src={fb}
                            alt="Picture of the author"
                            width={17} 
                            height={17}
                            />
                                </a>
                          
              <a href="https://www.instagram.com/jovial.travels/" target="_blank">
                    <img
                            src={ig}
                            alt="Picture of the author"
                            width={17} 
                            height={17}
                            />
</a>

<a href="https://www.linkedin.com/company/jovial-travels/" target="_blank">
                    <img
                            src={Ln}
                            alt="Picture of the author"
                            width={17} 
                            height={17}
                            />
</a>
                           


                            </div>

                            <p className="copy_footer mt-5">Copyright © Jovial Travels 2023 All Rights Reserved</p>
                      </div>
                    </SlidingPane>
                        </div>
                    </div>
                    <div className='col-4 text-center mobile_logo_view'>
                      <Link to="/">
                    <img
                            src={logo}
                            alt="Picture of the author"
                            width={70} 
                            height={70}
                           
                            />
                      </Link>
                    </div>
                    <div className={`${styles.flex_end_new} d-flex justify-content-end align-items-center col-4 ...`}>
                    <div  className={styles.call_to_action}>
                      <div className="header_call_btn">
                        <a href="tel:+971566895477"><img src={Call} width="25px" /></a>
                        
                      </div>
                      <div className="only_dextop">
                      <a onClick={() => setState({ isPaneOpen2: true })} className={styles.call_to_action_btn} >Enquire Now</a>
                      </div>
                      
                      <img onClick={() => setState({ isPaneOpen2: true })} className="only_Mobile email_icon" src={Email} width="32px" />   

                            <SlidingPane
                        className="some-custom-class form-mobile"
                        overlayClassName="some-custom-overlay-class"
                        isOpen={state.isPaneOpen2}
                        closeIcon={<div><img src={close} width="40px"/></div>}
                        from="right"
                        width="80%"
                        onRequestClose={() => {
                        // triggered on "<" on left top click or on outside click
                        setState({ isPaneOpen2: false });
                        }}
                    >
                      <div className="pl-5 pr-5">
                        <h2 className="mb-5">Enquire Now</h2>
                       <Form/>
                      </div>
                    </SlidingPane>
                        </div>
                    </div>
                </div>
        </motion.section>
        
    </>
  )
}
