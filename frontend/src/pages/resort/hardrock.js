import React from 'react'
import { motion} from "framer-motion";
import patinabanner from '../../assats/img/hardrock_banner.jpg'
import patinaform from '../../assats/img/weeding_form.jpg'

import { Parallax } from 'react-parallax';
import styles from '../resort/resort.module.css';
import MediaQuery from 'react-responsive'


import img3 from '../../assats/img/hardRock_rock_villa_side.jpg'
import romantic from '../../assats/img/hardRock_rock_villa.jpg'

import patinabannermiddl from '../../assats/img/hardrock_banner_middle.jpg'
import patinabannermidd2 from '../../assats/img/hardrock_banner_midle2.jpg'

import beachvilla from '../../assats/img/hardRock_beachvilla.jpg'
import beachvillaside from '../../assats/img/hardRock_beachvilla_slide.jpg'

import Silvervilla from '../../assats/img/hardRock_silvervilla.jpg'
import silvervillaside from '../../assats/img/hardRock_silvervilla_side.jpg'



import Form from '../../components/form'

export default function Hardrock() {

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
              <motion.h1 className='mb-4 text-white'>Hard Rock Hotel Maldives </motion.h1>
                
              </div>
            </div>
        </div>
                </section>
            </Parallax>

            <section className='container mt-5'>
          <div className='row'>
          <h4  >Located at the iconic Cross Roads, the Maldives party central. Here is your chance to celebrate and experience a newfound sense of life on an island.  </h4>
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
                <motion.h4 className='mb-3 mt-4'>Rock Star Villa  </motion.h4>
                <p >From its funky interiors, the glass floors which show you life under the light blue lagoon and the unique hammocks which beg for you to sleep under the island’s stars – the Rock Star Villa is a once in a life time experience you don’t want to miss out on.  </p>

                   
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
            <motion.h4 className='mb-3 mt-4'>Rock Star Villa  </motion.h4>
                <p >From its funky interiors, the glass floors which show you life under the light blue lagoon and the unique hammocks which beg for you to sleep under the island’s stars – the Rock Star Villa is a once in a life time experience you don’t want to miss out on.  </p>

                    
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
           
                <motion.h4 className='mb-3 mt-4'>Gold Beach Pool Villa  </motion.h4>
                <p >With your very own plunge pool and direct beach access, the villas are favoured for their uninterrupted views of the Indian Oceans while also giving patrons a sense of privacy. Something that everyone who visits the Maldives wants.  </p>

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
            <motion.h4 className='mb-3 mt-4'>Gold Beach Pool Villa  </motion.h4>
                <p >With your very own plunge pool and direct beach access, the villas are favoured for their uninterrupted views of the Indian Oceans while also giving patrons a sense of privacy. Something that everyone who visits the Maldives wants.  </p>
           
              </div>
          </div>
    </section>
    </MediaQuery>

    <Parallax bgImage={patinabannermidd2} bgImageAlt="the cat" strength={100}>
                <section className='h-100vh container d-flex align-items-end '>
                <div className='row '>
            <div className='col-12 '>
             
            </div>
        </div>
                </section>
            </Parallax>


            <MediaQuery minDeviceWidth={760} >
    <section className='container custom_space_resort'>
          <div className='row '>
         
            
              <div className={` col-3  ...`}>
              <motion.div
               className={styles.img_box}>
              <img
                src={silvervillaside}
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
                src={Silvervilla}
                alt="Picture of the author"
               
              />
              </motion.div>
            
            </div>
                <motion.h4 className='mb-3 mt-4'>Silver Beach Studio   </motion.h4>
                <p >Step on to your private terrace with direct beach access, enjoy the eclectic styles unique to each studio and immerse yourself in a one-of-a-kind holiday.  </p>

                   
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
                src={Silvervilla}
                alt="Picture of the author"
                
              />
              </motion.div>
            
            </div>
            <motion.h4 className='mb-3 mt-4'>Silver Beach Studio   </motion.h4>
                <p >Step on to your private terrace with direct beach access, enjoy the eclectic styles unique to each studio and immerse yourself in a one-of-a-kind holiday.  </p>

                    
              </div>
          </div>
    </section>
    </MediaQuery>

    <section className='container-fluid bg_gray_background resort_boxes'>
                <div className='row mb-4'>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Ocean view</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Terrace with sun beds and lounging net</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Infinity pool</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Jukebox</h5>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-3'>
                        <div className='icon_box'>
                            <h5 className=''>Seahorse carousel</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Tuk Tuk bar and cabana</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Living room with dining area and couch</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Sofa bed in master bedroom</h5>
                        </div>
                    </div>
                 
                </div>
                <div className='row mb-4'>
                    <div className='col-3'>
                        <div className='icon_box'>
                            <h5 className=''>86" Smart TV</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Soundbar</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Coffee and tea amenities</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>The Sound of Your Stay® (upon request)</h5>
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
