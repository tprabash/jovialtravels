import React from 'react'
import { motion} from "framer-motion";
import patinabanner from '../../assats/img/ozan_banner.jpg'
import patinaform from '../../assats/img/weeding_form.jpg'

import { Parallax } from 'react-parallax';
import styles from '../resort/resort.module.css';
import MediaQuery from 'react-responsive'


import img3 from '../../assats/img/ozan_villa_side.jpg'
import romantic from '../../assats/img/Ozon_villa.jpg'

import patinabannermiddl from '../../assats/img/ozan_banner_midl.jpg'

import beachvilla from '../../assats/img/ozan_pool_villa.jpg'
import beachvillaside from '../../assats/img/ozan_pool_villa_side.jpg'

import Form from '../../components/form'

export default function Ozan() {

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
              <motion.h1 className='mb-4 text-white'>Ozen Reserve Bolifushi</motion.h1>
              
              </div>
            </div>
        </div>
                </section>
            </Parallax>

            <section className='container mt-5'>
          <div className='row'>
          <h4  >Stop with the Pinterest hoardings of all the Maldives dreams you’ve been having, Ozen Reserve Bolifushi is the embodiment of the luxury you’ve always craved.  </h4>
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
                <motion.h4 className='mb-3 mt-4'>Earth Pool Pavilion   </motion.h4>
                <p >Designed for those who crave intimate time with their loved ones. The Pavilion offers patrons a glimpse into a sense of other worldly luxury. Rejuvenate in your serene corner of the island while being within easy reach of facilities such as the restaurants, kids’ club, main pool, and the water sports centre. </p>

                   
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
            <motion.h4 className='mb-3 mt-4'>Earth Pool Pavilion   </motion.h4>
                <p >Designed for those who crave intimate time with their loved ones. The Pavilion offers patrons a glimpse into a sense of other worldly luxury. Rejuvenate in your serene corner of the island while being within easy reach of facilities such as the restaurants, kids’ club, main pool, and the water sports centre. </p>

                    
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
           
                <motion.h4 className='mb-3 mt-4'>Ocean Pool Reserve Sunset With Slide </motion.h4>
                <p >This enticing private villa brings out the child in you! With luxe décor, opulent comfort and the best amenities on the ocean — slip and slide in your personal playground in the Maldives.</p>

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
            <motion.h4 className='mb-3 mt-4'>Ocean Pool Reserve Sunset With Slide </motion.h4>
                <p >This enticing private villa brings out the child in you! With luxe décor, opulent comfort and the best amenities on the ocean — slip and slide in your personal playground in the Maldives.</p>
           
              </div>
          </div>
    </section>
    </MediaQuery>

    <section className='container-fluid bg_gray_background resort_boxes'>
                <div className='row mb-4'>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>7 Reserve acommodations </h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Private infinity pool</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>A 23-metre water slide</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Complimentary wi-fi</h5>
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
