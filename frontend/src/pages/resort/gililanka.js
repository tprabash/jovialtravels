import React from 'react'
import { motion} from "framer-motion";
import patinabanner from '../../assats/img/patina_banner.jpg'
import patinaform from '../../assats/img/weeding_form.jpg'

import { Parallax } from 'react-parallax';
import styles from '../resort/resort.module.css';
import MediaQuery from 'react-responsive'


import img3 from '../../assats/img/patina_villa_1_side.jpg'
import romantic from '../../assats/img/patina_villa_1.jpg'
import patinabannermiddl from '../../assats/img/patina_banner_midle.jpg'

import beachvilla from '../../assats/img/patina_banner_beach_villa-bn.jpg'
import beachvillaside from '../../assats/img/patina_banner_beach_villa.jpg'

import Form from '../../components/form'

export default function Gili() {

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
              <motion.h1 className='mb-4 text-white'>Patina Maldives</motion.h1>
          
              </div>
            </div>
        </div>
                </section>
            </Parallax>

            <section className='container mt-5'>
          <div className='row'>
          <h5 >Sophisticated accommodations blend harmoniously with this opulent yet rustic property in the
                Maldives.</h5>
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
                <motion.h4 className='mb-3 mt-4'>One Bed Room Sunset Water Pool Villa</motion.h4>
                <p >Here’s your ultimate getaway with a backdrop to the amber hues of an island sunset every
evening. If that doesn’t rope you in, then maybe the private deck and floor-to-ceiling windows
which slide open to the unguarded ocean below might.</p>

                   
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
            <motion.h4 className='mb-3 mt-4'>One Bed Room Sunset Water Pool Villa</motion.h4>
                <p >Here’s your ultimate getaway with a backdrop to the amber hues of an island sunset every
evening. If that doesn’t rope you in, then maybe the private deck and floor-to-ceiling windows
which slide open to the unguarded ocean below might.</p>

                    
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
           
                <motion.h4 className='mb-3 mt-4'>One Bed Room Beach Pool Villa</motion.h4>
                <p >Enjoy the lush vegetation that surrounds your not so little rustic cabana by the sea. Take a walk
in the early morning hour, sink toes through the soft white sands as you make your way to the
tepid and pellucid waters of the Indian Ocean.</p>

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
            <motion.h4 className='mb-3 mt-4'>One Bed Room Beach Pool Villa</motion.h4>
                <p >Enjoy the lush vegetation that surrounds your not so little rustic cabana by the sea. Take a walk
in the early morning hour, sink toes through the soft white sands as you make your way to the
tepid and pellucid waters of the Indian Ocean.</p>
           
              </div>
          </div>
    </section>
    </MediaQuery>

    <section className='container-fluid bg_gray_background resort_boxes'>
                <div className='row mb-4'>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Floor-to-ceiling windows on three sides</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Private garden with pool</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Outdoor oversized bathtub</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Rain shower</h5>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-3'>
                        <div className='icon_box'>
                            <h5 className=''>Double basin</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Vanity table</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Refreshment centre</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Dining area</h5>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                 
                        <div className='icon_box'>
                            <h5 className=''>Smart TV</h5>
                        </div>
                        
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Tablet</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>PlayStation, Xbox and Nintendo on request</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>WIFI</h5>
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
