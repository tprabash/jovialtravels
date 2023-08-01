import React from 'react'
import { motion} from "framer-motion";
import { Parallax } from 'react-parallax';
import MediaQuery from 'react-responsive'
import patner from '../../assats/img/blog_header.jpg'
import { Link } from "react-router-dom";
import styles from '../partners/partner.module.css';

import chevelBlank from '../../assats/img/blog_img1.jpg'
import Lankanfushi from '../../assats/img/blog_img2.jpg'
import Waldorf from '../../assats/img/blog_img3.jpg'


export default function Blogs() {

    const variants = {
        hidden: { opacity: 0, x: 0,  },
        enter: { opacity: 1, x: 0, },
        exit: { opacity: 0, x: 0, },
      }

  return (
    <motion.div
        variants={variants} // Pass the variant object into Framer Motion 
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit"
        className='min-90'
    >

<Parallax bgImage={patner} bgImageAlt="the cat" strength={50}>
                <section className='h-100vh d-flex align-items-end container'>
                 <motion.h1 className='mb-5 text-white'>Jovial Blogs</motion.h1>
                </section>
            </Parallax>

   <MediaQuery minDeviceWidth={760} >
   <section className='container custom_space_top' >
        <div className='row '>
            <div className='col-12 text-center'>
              <div >
             
             
              </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Waldorf}
                  alt="Picture of the author"
                  
                />
              </div>
            <h3 className='mt-4'>Toddlers, Teens and the Maldives</h3>
           
            <Link to="/blogs/toddlers-teens-and-the-maldives"><button>read more</button></Link>
            </div>
            <div className='col-4 mt-4'>
              <div className={styles.resort_box}>
                  <img
                  src={chevelBlank}
                  alt="Picture of the author"
                />
              </div>
                <h3 className='mt-4'>Why Travel To The Maldives?</h3>
                
                <Link to="/blogs/why-travel-to-the-maldives"><button>read more</button></Link>
            </div>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Lankanfushi}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h3 className='mt-4'>Experience The Maldives</h3>
            <Link to="/blogs/experience-the-maldives"><button>read more</button></Link>
            </div>
        </div>

    </section>
   </MediaQuery>
   <MediaQuery maxDeviceWidth={760} >
   <section className={`${styles.resort_list_pdn}  container ... `} >
        <div className='row '>
            <div className='col-12 text-center'>
              <div>
              <motion.h2 className='mb-4'>Jovial Blogs</motion.h2>
              </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
              <div className={styles.resort_box}>
                  <img
                  src={Waldorf}
                  alt="Picture of the author"
                 
                />
              </div>
           
              <h2 className='mt-4'>Toddlers, Teens and the Maldives</h2>
           
           <Link to="/blogs/toddlers-teens-and-the-maldives"><button>read more</button></Link>
            </div>
            <div className='col-6 '>
              <div className={styles.resort_box}>
                  <img
                  src={chevelBlank}
                  alt="Picture of the author"
                  
                />
              </div>
           
              <h5 className='mt-4'>Why Travel To The Maldives?</h5>
                
                <Link to="/blogs/why-travel-to-the-maldives"><button>read more</button></Link>
            </div>
        </div>

    </section>
   </MediaQuery>
     
        </motion.div>
  )
}
