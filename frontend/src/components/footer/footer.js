import React from 'react'
import { motion} from "framer-motion";
import logoFooter from '../../assats/img/Logo_color.svg'

import fb from '../../assats/img/facebook-svgrepo-com.svg'
import ig from '../../assats/img/instagram-svgrepo-com.svg'
import tw from '../../assats/img/twitter-svgrepo-com.svg'
import Ln from '../../assats/img/linkedin-rounded-svgrepo-com.svg'

import { Link } from "react-router-dom";

import footerlogo1 from '../../assats/img/utravel_logo.png'
import footerlogo2 from '../../assats/img/poor_Life_logo.png'
import footerlogo3 from '../../assats/img/ita_logo.png'


import styles from '../footer/footer.module.css'

export default function footer() {

  
    const variants = {
        hidden: { opacity: 0,  },
        enter: { opacity: 1,  },
        exit: { opacity: 0,   },
      }



  return (
    <motion.div
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit"
    transition={{ delay: 0.3 }}
    >
        <div className={`${styles.costom_space_footer} container ...`}>
            <div className='row'>
                <div className='col-12 text-center'>
                <img
                            src={logoFooter}
                            alt="Picture of the author"
                            width={100} 
                            height={100}
                            img
                            />
                            <div className='mt-5'>
                                <h2 className='mb-3'>Let us take you on an exotic adventure</h2>
                                <h5> Fuelled with only the best names in hospitality.
                                Our promise? <br className={styles.hide}/>To give you the world on a literal silver platter.</h5>
                            </div>
                            <div className='img_row'>
                                <div className='Ineer_img_row'>
                                    <div>
                                    <img
                                        src={footerlogo1}
                                        alt="Picture of the author"
                                        width={120} 
                                        
                                        img
                                        />
                                    </div>
                                    <div>
                                    <img
                                        src={footerlogo2}
                                        alt="Picture of the author"
                                        width={120} 
                                       
                                        img
                                        />
                                    </div>
                                    <div>
                                    <img
                                        src={footerlogo3}
                                        alt="Picture of the author"
                                        width={150} 
                                        img
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footer_menu}>
                            <Link to="/about"><p>About</p></Link>
                               <Link to="/privacy-policy"><p>Privacy Policy</p></Link> 
                               <Link to="/terms-&-conditions"> <p>Terms & Conditions</p></Link> 
                               <Link to="/contact-us"><p>Contact Us</p></Link>
                                <Link to="/blogs"><p>Blogs</p></Link>
                            </div>
                            <div className={styles.footer_shiol}>
                                <a href='https://www.facebook.com/jovial.travels.luxury' target="_blank">
                                <img
                            src={fb}
                            alt="Picture of the author"
                            width={25} 
                            height={25}
                            />
                                </a>
                          
                                <a href="https://www.instagram.com/jovial.travels/" target="_blank">
                                        <img
                            src={ig}
                            alt="Picture of the author"
                            width={25} 
                            height={25}
                            />
                                        </a>

                                        <a href='https://www.linkedin.com/company/jovial-travels/' target="_blank">
                                <img
                            src={Ln}
                            alt="Picture of the author"
                            width={25} 
                            height={25}
                            />
                                </a>
                           
                         


                            </div>
                            <div className={styles.copy_right}>
                                    <p>Copyright © Jovial Travels 2023 All Rights Reserved</p>
                            </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}
