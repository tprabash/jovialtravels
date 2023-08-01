import React from 'react'
import { motion} from "framer-motion";
import patinabanner from '../../assats/img/jovial_travel_allola_banner.jpg'
import patinaform from '../../assats/img/weeding_form.jpg'

import { Parallax } from 'react-parallax';
import styles from '../resort/resort.module.css';
import MediaQuery from 'react-responsive'

import img3 from '../../assats/img/jovial_travel_allila_sunrise_villa_side.jpg'
import romantic from '../../assats/img/jovial_travel_allila_sunrise_villa.jpg'
import patinabannermiddl from '../../assats/img/jovial_travel_allila_middle_sec.jpg'

import beachvilla from '../../assats/img/jovial_travel_allila_beach_villa.jpg'
import beachvillaside from '../../assats/img/jovial_travel_allila_beach_villa_side.jpg'
import Form from '../../components/form'

export default function Allila() {
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
              <motion.h1 className='mb-4 text-white'>Alila Kothaifaru Maldives</motion.h1>
              
              </div>
            </div>
        </div>
        </section>
   </Parallax>
   <section className='container mt-5'>
      <div className='row'>
      <h4 className='' >Prepare to be surrounded by a stunning house reef in the scenic Raa Atoll, Alila Kothaifaru Maldives is a private island retreat set in an awe-inspiring destination embraced by nature’s
                wonders.</h4>
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
                <motion.h4 className='mb-3 mt-4'>Sunrise Water Villa  </motion.h4>
                <p >Wake up to the splendour of the sunrise while floating in luxurious comfort above the turquoise lagoon. These elegantly appointed villas feature an open-concept bedroom and living room for
                a spacious feel, with floor-to-ceiling glass doors that slide open to a private pool and sun deck
                surrounded by uninterrupted ocean views. </p>   
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
            <motion.h4 className='mb-3 mt-4'>Sunrise Water Villa  </motion.h4>
                <p >Wake up to the splendour of the sunrise while floating in luxurious comfort above the turquoise lagoon. These elegantly appointed villas feature an open-concept bedroom and living room for
a spacious feel, with floor-to-ceiling glass doors that slide open to a private pool and sun deck
surrounded by uninterrupted ocean views. </p>


                    
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
           
              <motion.h4 className='mb-3 mt-4'>Sunrise Beach Villa  </motion.h4>
                <p >Feel at home in this spacious abode featuring a separate bedroom and living room extending to
a private pool and sun deck, an invitation to lounge and relax. Be surrounded by lush jungle
foliage and experience the utmost privacy while you indulge in all Maldives has to offer. </p>

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
            <motion.h4 className='mb-3 mt-4'>Sunrise Beach Villa  </motion.h4>
                <p >Feel at home in this spacious abode featuring a separate bedroom and living room extending to
a private pool and sun deck, an invitation to lounge and relax. Be surrounded by lush jungle
foliage and experience the utmost privacy while you indulge in all Maldives has to offer. </p>
           
              </div>
          </div>
    </section>
    </MediaQuery>

    <section className='container-fluid bg_gray_background resort_boxes'>
                <div className='row mb-4'>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Deluxe bathroom</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Pool</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Sunrise view</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Personal Host</h5>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-3'>
                        <div className='icon_box'>
                            <h5 className=''>Dual vanity</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Personal Host</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Private outdoor seating</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>In-villa swimming pool</h5>
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
