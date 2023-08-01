import React from 'react'
import { motion} from "framer-motion";


import patinabanner from '../../assats/img/woldof/jovial_travel_waldort_header.jpg'
import patinaform from '../../assats/img/woldof/jovial_travel_waldort_footer.jpg'
import patinabannermiddl from '../../assats/img/woldof/jovial_travel_waldort_md2.jpg'
import patinabannermidd2 from '../../assats/img/woldof/jovial_travel_waldort_md1.jpg'

import { Parallax } from 'react-parallax';
import styles from '../resort/resort.module.css';
import MediaQuery from 'react-responsive'

import romantic from '../../assats/img/woldof/jovial_travel_reef_villa.jpg'
import img3 from '../../assats/img/woldof/jovial_travel_reef_villa_side.jpg'

import beachvillaside from '../../assats/img/woldof/jovial_travel_beach_villa_side.jpg'
import beachvilla from '../../assats/img/woldof/jovial_travel_beach_villa.jpg'

import stellavillaside from '../../assats/img/woldof/jovial_travel_stella_villa_side.jpg'
import stellavilla from '../../assats/img/woldof/jovial_travel_stella_villa.jpg'


import Form from '../../components/form'


export default function Waldorfastoria() {

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
              <motion.h1 className='mb-4 text-white'>Waldorf Astoria </motion.h1>
            
              </div>
            </div>
        </div>
                </section>
            </Parallax>

            <section className='container mt-5'>
          <div className='row'>
          <h4 >Here’s a name that is a true embodiment to all things of luxe and opulence. A name revered to luxury, a name we can all trust.  </h4>
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
                <motion.h4 className='mb-3 mt-4'>Reef Villa with Pool </motion.h4>
                <p >Discover the best of both worlds as you sit upon the relaxed waves of the Indian Ocean. These overwater villas feature your very own private pool that overlooks the glorious horizon and a terrace to sit upon and bask under the unpolluted night’s skies. </p>

                   
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
            <motion.h4 className='mb-3 mt-4'>Reef Villa with Pool </motion.h4>
                <p >Discover the best of both worlds as you sit upon the relaxed waves of the Indian Ocean. These overwater villas feature your very own private pool that overlooks the glorious horizon and a terrace to sit upon and bask under the unpolluted night’s skies. </p>
                    
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
                alt="Picture of the author" />

              </motion.div>
                <motion.h4 className='mb-3 mt-4'>King Beach Villa with Pool</motion.h4>
                <p >Your own little haven with a slice of private beach property. Is there anything else you want when you visit the Maldives? </p>

                <p>These idyllic living spaces are generously designed for patrons to enjoy being wined and dined by the songs of the ocean. </p>

                <p>Here’s the chance to relax by your very own private pool or simply cocoon yourself in a hammock under the swaying palm trees. Sounds too good to pass up, is it not? </p>
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
            <motion.h4 className='mb-3 mt-4'>King Beach Villa with Pool</motion.h4>
                <p >Your own little haven with a slice of private beach property. Is there anything else you want when you visit the Maldives? </p>
                <p>These idyllic living spaces are generously designed for patrons to enjoy being wined and dined by the songs of the ocean. </p>
                <p>Here’s the chance to relax by your very own private pool or simply cocoon yourself in a hammock under the swaying palm trees. Sounds too good to pass up, is it not? </p>
           
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
                src={stellavillaside}
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
                src={stellavilla}
                alt="Picture of the author"
               
              />
              </motion.div>
            
            </div>
            <motion.h4 className='mb-3 mt-4'>Stella Maris Ocean Villa </motion.h4>
                <p >Intimate seclusion and unparalleled elegance. Your very own idyllic getaway accessed by boat.
This is a favourite amongst our more private clientele who wish to have their stays in the Maldives remain anonymous. 
 </p>
                <p>This is your ultimate address in the Maldives, a secluded haven on stilts, with the gentle laps of the lagoon water; featuring a BBQ station, direct ocean access, and a private infinity pool with overwater hammocks. Exclusively accessed by boat. </p>

                   
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
                src={stellavilla}
                alt="Picture of the author"
                
              />
              </motion.div>
            
            </div>
            <motion.h4 className='mb-3 mt-4'>Stella Maris Ocean Villa </motion.h4>
                <p >Intimate seclusion and unparalleled elegance. Your very own idyllic getaway accessed by boat.
This is a favourite amongst our more private clientele who wish to have their stays in the Maldives remain anonymous. 
 </p>
                <p>This is your ultimate address in the Maldives, a secluded haven on stilts, with the gentle laps of the lagoon water; featuring a BBQ station, direct ocean access, and a private infinity pool with overwater hammocks. Exclusively accessed by boat. </p>
                    
              </div>
          </div>
    </section>
    </MediaQuery>


    <section className='container-fluid bg_gray_background resort_boxes'>
                <div className='row mb-4'>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>King bed </h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Living room and sofa </h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Ocean views</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Overwater terrace </h5>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-3'>
                        <div className='icon_box'>
                            <h5 className=''>Indoor- outdoor showers and bathtub</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Outdoor pool</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Outdoor daybed </h5>
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
                            <h5 className=''>Overwater hammock</h5>
                        </div>
                        
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Guests: two adults and two children below 12 years</h5>
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
