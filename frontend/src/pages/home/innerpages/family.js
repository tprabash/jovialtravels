import React from 'react'
import { motion} from "framer-motion";
import { Parallax } from 'react-parallax';
import MediaQuery from 'react-responsive'
import patner from '../../../assats/img/family_page_header.jpg'
import flowertop from '../../../assats/img/flowwe_top.png'
import flowerbottom from '../../../assats/img/flowwe_bottom.png'

import styles from '../../partners/partner.module.css';
import slider1 from '../../../assats/img/family_page_slider1.jpg'
import slider2 from '../../../assats/img/family_page_slider2.jpg'
import slider3 from '../../../assats/img/family_page_slider3.jpg'


import cuppelimg from '../../../assats/img/side_famiy.jpg'

import Form from '../../../components/form'

import chevelBlank from '../../../assats/img/jovial_travel_patina.jpg'
import Lankanfushi from '../../../assats/img/jovial_travel_Gili-Lankanfushi_Maldives.jpg'
import Waldorf from '../../../assats/img/jovial_travel_Waldorf_Astoria.jpg'
import Regii from '../../../assats/img/jovial_travel_St_Regii.jpg'
import Reethi from '../../../assats/img/jovial_travel_Reethi_Rah.jpg'
import Raffles from '../../../assats/img/jovial_travel_Raffles_Maldives.jpg'
import Jw from '../../../assats/img/jovial_travel_Jw_Maldives.jpg'
import HardRock from '../../../assats/img/jovial_travel_hardRock_Maldives.jpg'
import Ozon from '../../../assats/img/jovial_travel_ozan.jpg'
import Finolu from '../../../assats/img/jovial_travel_Finolhu_Maldives.jpg'
import Hilton  from '../../../assats/img/jovial_travel_hiton.jpg'
import Joali  from '../../../assats/img/jovial_travel_joali_Maldives.jpg'
import formImg  from '../../../assats/img/honeymoon_form.jpg'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Link } from "react-router-dom";

export default function Family() {



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
                 <motion.h1 className='mb-5 text-white'>Family Getaways</motion.h1>
       </section>
</Parallax>


<section className='container custom_space_resort'>
  

    <div className='row '>
        <div className='col-12'>
        <h2 className='mb-3 text-center'>Whether you’ve got infants and curious toddlers or are struggling to satisfy your moody teenagers, the
Maldives has something for everyone. Its just a matter of knowing what to do.</h2>
        </div>
    </div>

</section>


<Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slider1})` }}>
                   
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slider2})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slider3})` }}>
                  
                </div>
            </div>
           
        </Slide>

        <section className='container custom_space_resort'>
                <div className='row'>
                    <div className='col-6 mobile_100'>
                            <img src={cuppelimg}  width="100%"/>
                    </div>

                    <div className='col-6 padding-left-3 mobile_100'>

                            <h4 className='mt-5'>Our Travel Designers promise to listen. Tell us exactly what your family members love, give us an idea of
what they look for in a family holiday and we will give you the best family getaway in the Maldives.</h4>

                            
                           
                              
                    </div>
                </div>
            </section>

        

            <section className='container-fluid bg_gray_background resort_boxes'>
            <div className='row '>
                    <div className='col-12 text-center'>
                        <h2 className='mb-5'>Experiences</h2>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Kids Club</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Whale Shark Expeditions</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Cooking Lessons</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='icon_box'>
                            <h5 className=''>Outdoor Movie Nights</h5>
                        </div>
                    </div>
                </div>
           
               
            </section>

            <section className='container custom_space_resort'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>“I’ve got twin teenage girls and they each have different expectations for what they want in a holiday.
Jovial did not disappoint. They listed down what each girl wanted and delivered rightly so! Thank you
Jovial.&quot;</h2>

<p className='qute_name mt-5'>Ammarah Zaik</p>
<p>UK</p>
                    </div>
                </div>
            </section>


    <MediaQuery minDeviceWidth={760} >
   <section className='container' >
        <div className='row '>
            <div className='col-12 text-center'>
              <div >
              <motion.h2 className='mb-4'>It’s A Private Affair With Jovial Travels</motion.h2>
                <h5 >Think of us as an exclusive black book of partners, hotels, residences, private islands and yacht destinations around the <br/>Maldives  – to make you feel at home anywhere across all continents.</h5>
              </div>
            </div>
        </div>
        <div className='row'>
        <div className='col-4 '>
              <div className={styles.resort_box}>
                  <img
                  src={Waldorf}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Waldorf Astoria </h4>
            <p>Marvel at the Maldivian night sky in one of this award-winning property for an intimate,  </p>
              <Link to="/our-partners/waldorf-astoria"><button>explore</button></Link>
            </div>
            <div className='col-4 mt-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Jw}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>JW Marriot Maldives Resort and Spa </h4>
            <p>Here is a sanctuary of scenic luxury. Find your respite in stylish overwater villas and beach villas with plush bedding,  </p>
              <Link to="/our-partners/jw-marriot-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4 '>
              <div className={styles.resort_box}>
                  <img
                  src={Raffles}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Raffles Maldives </h4>
            <p>Discover the Maldives in spacious comfort and the magic of nature — it’s the best of both worlds. </p>
            <Link to="/our-partners/raffles-maldives"><button>explore</button></Link>
            </div>
        </div>

        
    </section>
   </MediaQuery>
   <MediaQuery maxDeviceWidth={760} >
   <section className={`${styles.resort_list_pdn}  container ... `} >
        <div className='row '>
            <div className='col-12 text-center'>
              <div >
              <motion.h2 className='mb-4'>It’s A Private Affair With Jovial Travels</motion.h2>
                <h5 >Think of us as an exclusive black book of partners, hotels, residences, private islands and yacht destinations around the <br className={styles.hide}/>Maldives  – to make you feel at home anywhere across all continents.</h5>
              </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={chevelBlank}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Patina Maldives </h4>
            <p>Sophisticated accommodations blend harmoniously with this opulent yet rustic property in the Maldives. </p>
            <Link to="/our-partners/patina-maldives"><button>explore</button></Link>
            </div>
            <div className='col-6 '>
            <div className={styles.resort_box}>
                  <img
                  src={Waldorf}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Waldorf Astoria </h4>
            <p>Marvel at the Maldivian night sky in one of this award-winning property for an intimate,  </p>
              <Link to="/our-partners/waldorf-astoria"><button>explore</button></Link>
            </div>
        </div>

        <div className='row'>
        <div className='col-6'>
        <div className={styles.resort_box}>
                  <img
                  src={Jw}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>JW Marriot Maldives Resort and Spa </h4>
            <p>Here is a sanctuary of scenic luxury. Find your respite in stylish overwater villas and beach villas with plush bedding,  </p>
              <Link to="/our-partners/jw-marriot-maldives"><button>explore</button></Link>
            </div>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={HardRock}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Hard Rock Hotel Maldives </h4>
            <p>Do like the rock stars do and make sure your holiday to the Maldives is a one-of-a-kind hit!</p>
            <Link to="/our-partners/hard-rock-hotel-maldives"><button>explore</button></Link>
            </div>
           
        </div>
       
    </section>
   </MediaQuery>

   <Parallax className='custom_space_resort_mrg' bgImage={formImg} bgImageAlt="the cat" strength={200}>
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
