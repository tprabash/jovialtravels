import React from 'react'
import { motion} from "framer-motion";
import { Parallax } from 'react-parallax';
import MediaQuery from 'react-responsive'
import patner from '../../../assats/img/wellness_page_header.jpg'
import flowertop from '../../../assats/img/flowwe_top.png'
import flowerbottom from '../../../assats/img/flowwe_bottom.png'

import styles from '../../partners/partner.module.css';
import slider1 from '../../../assats/img/wellness_page_slider1.jpg'
import slider2 from '../../../assats/img/wellness_page_slider2.jpg'
import slider3 from '../../../assats/img/wellness_page_slider3.jpg'
import slider4 from '../../../assats/img/wellness_page_slider4.jpg'

import cuppelimg from '../../../assats/img/spa_side.jpg'

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


import Sai  from '../../../assats/img/jovial_travel_sai_logan.jpg'
import Lily  from '../../../assats/img/jovial_travel_lily_Maldives.jpg'
import Alila  from '../../../assats/img/jovial_travel_allia_Maldives.jpg'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Link } from "react-router-dom";

export default function Spa() {


   

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
                 <motion.h1 className='mb-5 text-white'>Spa and Wellness Retreats</motion.h1>
</section>
</Parallax>


<section className='container custom_space_resort'>
  

    <div className='row '>
        <div className='col-12'>
        <h2 className='mb-3 text-center'>Revered the world over for the islands’ masterful wellness therapists.</h2>
        <h4 className='mt-5 text-center'>Indulge in a selection of therapies
which will relax your body and enrich your mind. Gift yourself the opportunity to experience the world’s
best, holistic wellness practices and discover a whole new meaning to life.</h4>
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
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slider4})` }}>
                  
                </div>
            </div>
        </Slide>

        <section className='container custom_space_resort'>
                <div className='row'>
                    <div className='col-6 mobile_100'>
                            <img src={cuppelimg}  width="100%"/>
                    </div>

                    <div className='col-6 padding-left-3 mobile_100'>

                            <h4 className='mt-5'>From yoga, to heated oil massages to the latest water   therapy – we will cherry pick the best treatments
                            to try out to help relieve you from the stress of reality.</h4>
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
        <div className='col-4'>
        <div className={styles.resort_box}>
                  <img
                  src={Lily}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Lily Beach Maldives  </h4>
            <p>Located on the island of Huvahendhoo, Lily Beach offers luxury All Inclusive packages. Perfect for snorkellers and scuba divers due to the abundant marine life and 40+ dive sites within easy reach. All the usual water sports are available, as well as a range of holistic therapies at the Tamara Spa for those looking to be pampered and indulged.</p>
            <Link to="/our-partners/lily-beach-maldives"><button>explore</button></Link>
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
                  src={Alila}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Alila Kothaifaru Maldives </h4>
            <p>This serene resort is located in the Raa Atoll on a natural island, Kothaifaru and is only 45-minutes away from Male international airport. Prepare to spend you holiday blessed with white beaches, turquoise ocean, over-water and beach villas, a spa, elegant restaurants and so much more. </p>

            
            <Link to="/our-partners/alila-kothaifaru-maldives"><button>explore</button></Link>
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
                  src={Alila}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Alila Kothaifaru Maldives </h4>
            <p>This serene resort is located in the Raa Atoll on a natural island, Kothaifaru and is only 45-minutes away from Male international airport. Prepare to spend you holiday blessed with white beaches, turquoise ocean, over-water and beach villas, a spa, elegant restaurants and so much more. </p>

            
            <Link to="/our-partners/alila-kothaifaru-maldives"><button>explore</button></Link>
            </div>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Lily}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Lily Beach Maldives  </h4>
            <p>Located on the island of Huvahendhoo, Lily Beach offers luxury All Inclusive packages. Perfect for snorkellers and scuba divers due to the abundant marine life and 40+ dive sites within easy reach. All the usual water sports are available, as well as a range of holistic therapies at the Tamara Spa for those looking to be pampered and indulged.</p>
            <Link to="/our-partners/lily-beach-maldives"><button>explore</button></Link>
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
