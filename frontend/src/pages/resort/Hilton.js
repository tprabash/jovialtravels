import React from 'react'
import { motion} from "framer-motion";
import patinabanner from '../../assats/img/hilton_banner_midle.jpg'
import patinaform from '../../assats/img/weeding_form.jpg'

import { Parallax } from 'react-parallax';
import styles from '../resort/resort.module.css';
import MediaQuery from 'react-responsive'


import img3 from '../../assats/img/Jw-Over_water_pool_side.jpg'
import romantic from '../../assats/img/hilton_willa.jpg'
import patinabannermiddl from '../../assats/img/hilton_banner.jpg'

import beachvilla from '../../assats/img/hilton_willa_pool.jpg'
import beachvillaside from '../../assats/img/patina_banner_beach_villa.jpg'

import Form from '../../components/form'

export default function Hiltan() {

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
        className='min-90'
    >
        
        <Parallax bgImage={patinabanner} bgImageAlt="the cat" strength={100}>
                <section className='h-100vh container d-flex align-items-end '>
                <div className='row '>
            <div className='col-12 '>
              <div className='mb-5'>
              <motion.h1 className='mb-4 text-white'>Hilton Aminigiri </motion.h1>
               
              </div>
            </div>
        </div>
                </section>
            </Parallax>
            <section className='container mt-5'>
          <div className='row'>
          <h4  >Celebrate life’s precious moments and the rare posckets of happiness we come across when you stay at the world’s most classical and friendly name.  </h4>
          </div>
        </section>
           

    <MediaQuery minDeviceWidth={760} >
    <section className='container custom_space_resort'>
          <div className='row '>
         
            
              <div className={` col-3  ...`}>
              <motion.div
               className={styles.img_box}>
              <img
                src={img3}
                alt="Picture of the author"
                
              />
              </motion.div>
              
              </div>
              <div className='col-1'>
              </div>
              <div className='col-7 mt-5' >
            <div  className={styles.img_container}>
            <motion.div
               className={styles.img_box}>
              <img
                src={romantic}
                alt="Picture of the author"
               
              />
              </motion.div>
            
            </div>
                <motion.h4 className='mb-3 mt-4'>One Bedroom Beach Pool Villa  </motion.h4>
                <p >These beautiful villas provide a sense of island living, with direct access to the beach. Take in uninterrupted views of the pool and azure waters. Listen to the songs of the Indian Ocean. </p>

                   
              </div>
          </div>
    </section>

    </MediaQuery>
    <MediaQuery maxDeviceWidth={760} >
    <section className='container mrgin_mobile'>
          <div className='row '>
         
           
              <div className={`${styles.mobile_pdn}  col-12 ...`} >
            <div  className={styles.img_container}>
            <motion.div
               className={styles.img_box}>
              <img
                src={romantic}
                alt="Picture of the author"
                
              />
              </motion.div>
            
            </div>
            <motion.h4 className='mb-3 mt-4'>One Bedroom Beach Pool Villa  </motion.h4>
                <p >These beautiful villas provide a sense of island living, with direct access to the beach. Take in uninterrupted views of the pool and azure waters. Listen to the songs of the Indian Ocean. </p>

                    
              </div>
          </div>
    </section>
    </MediaQuery>

    <Parallax bgImage={patinabannermiddl} bgImageAlt="the cat" strength={100}>
                <section className='h-100vh container d-flex align-items-end '>
                <div className='row '>
            <div className='col-12 '>
             
            </div>
        </div>
                </section>
            </Parallax>

            <MediaQuery minDeviceWidth={760} >
   <section className='container custom_space_resort '>
          <div className='row '>
         
          

          <div className='col-7 mt-5' >
            <motion.div
               className={styles.img_box}>
                <img
                src={beachvilla}
               
                alt="Picture of the author"
               
              />
              </motion.div>
           
                <motion.h4 className='mb-3 mt-4'>One Bedroom Overwater Villa with Pool </motion.h4>
                <p >Sat upon stilts and over-looking the turquoise lagoon waters. These villas are the embodiment of private holidaying. Because really, how much more private is a villa out at sea?  </p>

              </div>
              <div className='col-1'>

          </div>

              <div className={`col-3  ...`}>
              <motion.div
               className={styles.img_box}>
              <img
              src={beachvillaside}
              alt="Picture of the author"
          
            />
              </motion.div>
             
              </div>
              
           
          </div>
    </section>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={760} >
    <section className='container mbotom_mobile'>
          <div className='row '>
         
           
              <div className={`${styles.mobile_pdn} ${styles.mrgin_top_80}  col-12 ...`} >
            <div  className={styles.img_container}>
            <motion.div
               className={styles.img_box}>
              <img
                src={beachvilla}
               
                alt="Picture of the author"
                
              />
              </motion.div>
            
            </div>
            <motion.h4 className='mb-3 mt-4'>One Bedroom Overwater Villa with Pool </motion.h4>
                <p >Sat upon stilts and over-looking the turquoise lagoon waters. These villas are the embodiment of private holidaying. Because really, how much more private is a villa out at sea?  </p>
           
              </div>
          </div>
    </section>
    </MediaQuery>

    <section className='container-fluid bg_gray_background resort_boxes'>
                <div className='row mb-4'>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>King Size Bed</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Complimentary Wifi</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Coffee / Tea Facilities</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>A 55-Inch HDTV</h5>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-3'>
                        <div className='icon_box'>
                            <h5 className=''>Laptop Safe</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Air Conditioning</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Mini Bar</h5>
                        </div>
                    </div>
                 
                 
                </div>
               
            </section>

            
        <Parallax bgImage={patinaform} bgImageAlt="the cat" strength={200}>
            <section className='container'>
             <div className='row'>
                <div className='col-9 form_bg'>
                <motion.h2 className='mb-5 '>Enquire Now</motion.h2>
                <Form/>
                </div>
            </div>
            </section>
        </Parallax>
     
        </motion.div>
  )
}
