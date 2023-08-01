import React from 'react'
import { motion} from "framer-motion";
import patinabanner from '../../assats/img/jovial_sai_logan_banner.jpg'
import patinaform from '../../assats/img/weeding_form.jpg'

import { Parallax } from 'react-parallax';
import styles from '../resort/resort.module.css';
import MediaQuery from 'react-responsive'

import img3 from '../../assats/img/jovial_sai_logan_sky_room_side.jpg'
import romantic from '../../assats/img/jovial_sai_logan_sky_room.jpg'
import patinabannermiddl from '../../assats/img/jovial_sai_logan_banner_mdl.jpg'

import beachvilla from '../../assats/img/jovial_sai_logan_beach_room.jpg'
import beachvillaside from '../../assats/img/jovial_sai_logan_beach_room_side.jpg'
import Form from '../../components/form'

export default function Sai() {
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
              <motion.h1 className='mb-4 text-white'>Saii Lagoon Maldives </motion.h1>
             
              </div>
            </div>
        </div>
        </section>
   </Parallax>

   <section className='container mt-5'>
          <div className='row'>
          <h4 >Celebrate being on vacay mode in this ultra-modern, stylish and quirky holiday resort. Part of the Hilton brand, SAii Lagoon Maldives is what adventurers look for when they want more than picturesque views of the Indian Ocean. </h4>
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
                <motion.h4 className='mb-3 mt-4'>Sky Room </motion.h4>
                <p >Located on the upper floor, SAii’s spacious and stylish Sky Rooms feature an indoor chill-out corner, comfortable custom furnishings, and private balconies that frame the serene Indian Ocean and the picturesque views of the Maldives island hotel.</p>   
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
            <motion.h4 className='mb-3 mt-4'>Sky Room </motion.h4>
                <p >Located on the upper floor, SAii’s spacious and stylish Sky Rooms feature an indoor chill-out corner, comfortable custom furnishings, and private balconies that frame the serene Indian Ocean and the picturesque views of the Maldives island hotel.</p> 
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
           
              <motion.h4 className='mb-3 mt-4'>Beach Room   </motion.h4>
                <p >These villas offer generous interiors with an indoor relaxation space and stylish custom-made furnishings. The private terrace of the room features a relaxing seating area that opens to a white sandy beach for a true Maldives beach hotel experience.
</p>

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
            <motion.h4 className='mb-3 mt-4'>Beach Room   </motion.h4>
                <p >These villas offer generous interiors with an indoor relaxation space and stylish custom-made furnishings. The private terrace of the room features a relaxing seating area that opens to a white sandy beach for a true Maldives beach hotel experience.
</p>
           
              </div>
          </div>
    </section>
    </MediaQuery>

    <section className='container-fluid bg_gray_background resort_boxes'>
                <div className='row mb-4'>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Natural bathroom amenities from M.I.Y, Aroma</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Double vanity sink</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Rain shower</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Bathrobes</h5>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-3'>
                        <div className='icon_box'>
                            <h5 className=''>Tasty choices from signature Snap, Snack Box</h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div className='icon_box'>
                            <h5 className=''>Handcrafted puzzles </h5>
                        </div>
                    </div>
                    <div className='col-3 '>
                    
                    </div>
                    <div className='col-3 '>
                   
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
