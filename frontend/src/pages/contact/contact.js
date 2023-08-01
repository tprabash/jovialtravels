import React from 'react'
import { motion} from "framer-motion";
import { Parallax } from 'react-parallax';
import patner from '../../assats/img/contact_us_banner.jpg'
import Form from '../../components/form'


export default function contact() {

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
                 <motion.h1 className='mb-5 text-white'>Contact Jovial Travel</motion.h1>
                </section>
            </Parallax>

            <section className='container custom_space'>
                <div className='row'>
                    <div className='col-9 border_bg_form'>
                    <Form/>
                    </div>
                </div>
            </section>
      </motion.div>
  )
}
