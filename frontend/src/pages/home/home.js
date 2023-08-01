import React, { useEffect } from "react";
import styles from '../home/home.module.css'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MediaQuery from 'react-responsive'
import img1 from '../../assats/img/Alila-Kothaifaru-Maldives---Mirus-Bartender.jpg'
import img3 from '../../assats/img/jovial_travel_wedding_side.jpg'
import romantic from '../../assats/img/jovial_travel_wedding_and_anniversaries.jpg'
import spa from '../../assats/img/jovial_travel_spa_wellness.jpg'
import spaside from '../../assats/img/jovial_travel_spa_side.jpg'
import chevelBlank from '../../assats/img/jovial_travel_patina.jpg'
import Lankanfushi from '../../assats/img/jovial_travel_Gili-Lankanfushi_Maldives.jpg'
import Waldorf from '../../assats/img/jovial_travel_Waldorf_Astoria.jpg'
import Regii from '../../assats/img/jovial_travel_St_Regii.jpg'
import Reethi from '../../assats/img/jovial_travel_Reethi_Rah.jpg'
import Raffles from '../../assats/img/jovial_travel_Raffles_Maldives.jpg'
import Jw from '../../assats/img/jovial_travel_Jw_Maldives.jpg'
import HardRock from '../../assats/img/jovial_travel_hardRock_Maldives.jpg'
import Ozon from '../../assats/img/jovial_travel_ozan.jpg'
import Finolu from '../../assats/img/jovial_travel_Finolhu_Maldives.jpg'
import Hilton  from '../../assats/img/jovial_travel_hiton.jpg'
import Joali  from '../../assats/img/jovial_travel_joali_Maldives.jpg'

import Sai  from '../../assats/img/jovial_travel_sai_logan.jpg'
import Lily  from '../../assats/img/jovial_travel_lily_Maldives.jpg'
import Alila  from '../../assats/img/jovial_travel_allia_Maldives.jpg'


import veela from '../../assats/img/jovial_travel_veela.jpg'
import acva from '../../assats/img/jovial_travel_acva.jpg'
import norma from '../../assats/img/jovial_travel_norma.jpg'
import downarrow from '../../assats/img/down_arrow.svg'
import { Link } from "react-router-dom";

import Slider from '../../components/slider'

export default function Home() {


  const userLanguage = navigator.language;


  
  return (


    <div>
    <Homeen/>
   

 
    {/* add more sections for other languages as needed */}
    </div>





  )
}



 function Homeen(){

  
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    }
  }, [controls, inView2]);

 




  const variants = {
    hidden: { opacity: 0,  },
    enter: { opacity: 1, },
  
  }
  const header1 = {
    hidden: { opacity: 0, x: 0, y: 30, },
    enter: { opacity: 1, x: 0, y: 0, },
  }
  const header2 = {
    hidden: { opacity: 0, x: 0, y: 30, },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
  }
 

  const imgrev = {
    hidden: { opacity: 0, x: 0, y: 90, },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1,} },
  }


  const subheader = {
    hidden: { opacity: 0, x: 0, y: 20, },
    enter: { opacity: 1, x: 0, y: 0, },
  }
  const explore = {
    hidden: { opacity: 0, x: 0, y: 0, },
    enter: { opacity: 1, x: 0, y: 0, },
  }


  return(


    
    <div>
      <Slider/>
    {/* <motion.section 
    key="top"
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
 
    transition={{ type: 'linear', duration: 1, }} 
    
    className={styles.bg_img_top}>
        <div className='row'>
            <div className={styles.display_flex}>
                <motion.h1
                 key="headerh1"
                 variants={header1} // Pass the variant object into Framer Motion 
                 initial="hidden" // Set the initial state to variants.hidden
                 animate="enter" // Animated state to variants.enter
                 // Exit state (used later) to variants.exit
                 transition={{ type: 'linear', duration: 1, delay:0.5 }}
                className={styles.color_white}>At Jovial, We Understand Travel.</motion.h1>
                <motion.h4 
                  key="headerh4"
                  variants={subheader} // Pass the variant object into Framer Motion 
                  initial="hidden" // Set the initial state to variants.hidden
                  animate="enter" // Animated state to variants.enter
                  // Exit state (used later) to variants.exit
                  transition={{ type: 'linear', duration: 1, delay:0.8 }}
                className={styles.color_white_10}>We ensure our guests are treated to only 
                the crème of <br className={styles.hide}/>private villas and luxury travel to the Maldives.</motion.h4>
            </div>
            <motion.div
             key="explore"
             variants={explore} // Pass the variant object into Framer Motion 
             initial="hidden" // Set the initial state to variants.hidden
             animate="enter" // Animated state to variants.enter
             // Exit state (used later) to variants.exit
             transition={{ type: 'linear', duration: 1, delay:0.6 }}
             className={styles.scroll_more}>
                <div >
                  <div className="text-center mb-2 ">
                      <img
                      src={downarrow}
                      width={15}
                      alt="Picture of the author"
                       
                    />
                  </div>
               
                  <p>SCROLL DOWN <br/>TO START THE EXPERIENCE</p></div>
            </motion.div>
        </div>
    </motion.section > */}
    <section className='container' >
        <div className='row'>
            <div className='col-12 text-center'>
              <div className={styles.custom_space}>
              <motion.h2
                ref={ref2}
                animate={controls}
                initial="hidden"
                variants={header2}
                className='mb-4'>Let us take you on an exotic  Maldives adventure</motion.h2>
                <motion.h5
                     ref={ref2}
                     animate={controls}
                     initial="hidden"
                     variants={header2}
                >One that is fuelled with only the best names in hospitality. Our promise? <br className={styles.hide}/>To give you the world on a literal silver platter.</motion.h5>
              </div>
            </div>
        </div>
    </section>
   <section className={styles.bg_img_second} >
        <div className='row'>

        </div>
   </section>
   <section className='container' >
        <div className='row'>
            <div className='col-12 text-center'>
              <div className={`${styles.mobile_botom} ${styles.custom_space}`}>
              <motion.h2
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={header2}
         
              className='mb-4'>The Jovial Promise</motion.h2>
                <h5 >When you choose Jovial you are instantly awarded an array of exclusive, premier services.</h5>
              </div>
            </div>
        </div>
    </section>

    <MediaQuery minDeviceWidth={760} >
    <div className='container' >
          <div className='row'>
              <div className='col-5'>
              <motion.div
               className={styles.img_box}>
              <img
              src={img1}
              alt="Picture of the author"
             
            />
              </motion.div>
            
              </div>
              <div className='col-1'>

              </div>
              <div className='col-6' >
                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>Guarantee</motion.h4>
                <p >The best market rates in the industry</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>Instant access</motion.h4>
                <p >24/7</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>Tailor Made</motion.h4>
                <p >Bespoke holidays for each client</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>Curated Portfolio</motion.h4>
                <p >Of the best hotels and resorts</p>
                </div>

                <div >
                <motion.h4 className='mb-2 mt-4'>Incentives</motion.h4>
                <p >And special discounts</p>
                </div>
             

              </div>
          </div>
    </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={760} >
    <div className='container' >
          <div className='row'>
        
              <div className={`${styles.mobile_pdn} col-12 ...`} >
                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>Guarantee</motion.h4>
                <p >The best market rates in the industry</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>Instant access</motion.h4>
                <p >24/7</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>Tailor Made</motion.h4>
                <p >Bespoke holidays for each client</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>Curated Portfolio</motion.h4>
                <p >Of the best hotels and resorts</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>Incentives</motion.h4>
                <p >And special discounts</p>
                </div>
                <div >
                <motion.h4 className='mb-2 mt-4'>Inside Knowledge</motion.h4>
                <p >By our teams in our most-popular destinations</p>
                </div>

              </div>
          </div>
    </div>
    </MediaQuery>

    <section className={`${styles.bg_img_therd} ${styles.custom_space}`} >
        <div className='row'>

        </div>
   </section>

   <section className={`${styles.space_end} ${styles.mobile_botom} container ...`} >
        <div className='row'>
            <div className='col-12 text-center'>
              <div className=''>
                <motion.h2 className='mb-4'>Discover A New World</motion.h2>
              </div>
            </div>
        </div>
    </section>
    <MediaQuery minDeviceWidth={760} >
    <section className='container'>
      <div className="row">
          <div className="col-6">
          <div  className={styles.img_container}>
            <motion.div
               className={styles.img_box}>
              <img
                src={romantic}
                alt="Picture of the author"
               
              />
              </motion.div>
            
            </div>
          </div>
          <div className="col-1">

          </div>
          <div className="col-5 pt-4">
          <motion.h3 className='mb-3 mt-4'>Weddings and Anniversaries</motion.h3>
                <p >Organize your destination wedding with our very own Travel Designers, from the location, to
                    the food, to the resorts stays for your guests and loved ones – we take care of it all!</p>

                    <Link to="/weddings-and-anniversaries"><button>explore</button></Link>
          </div>
      </div>
          {/* <div className='row '>
         
            
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
          
              

              </div>
          </div> */}
    </section>

    </MediaQuery>
    <MediaQuery maxDeviceWidth={760} >
    <section className='container'>
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
                <motion.h3 className='mb-3 mt-4'>Weddings and Anniversaries</motion.h3>
                <p >Organize your destination wedding with our very own Travel Designers, from the location, to
                    the food, to the resorts stays for your guests and loved ones – we take care of it all!</p>
                    <Link to="/weddings-and-anniversaries"><button>explore</button></Link>

                   
              </div>
          </div>
    </section>
    </MediaQuery>
    <MediaQuery minDeviceWidth={760} >

    <section className={`${styles.bg_img_forth} ${styles.custom_space}`} >
      <div className='container'>
      <div className='row'>
      
            <div className={`${styles.paddin_top_10} col-7  ...`}>
            <motion.h3 className='mb-3 mt-4 text-white'>Honeymoon and Romantic Stays</motion.h3>
                <p className='text-white'>Allow us to help you make the best of your honeymoon, its romance your way, all the way.</p>
                <Link to="/honeymoon-and-romantic-stays"><button className="text-white">explore</button></Link>
            </div>
            <div className='col-5 pt-5'>
            
            </div>
        </div>
      </div>
        
   </section>
    </MediaQuery>

    <MediaQuery maxDeviceWidth={760} >
    <section className={`${styles.bg_img_forth} ${styles.custom_space} ${styles.banner_botom}`} >
      <div className='container'>
      <div className='row'>
      
            {/* <div className={`${styles.paddin_top_10} col-5  ...`}>
            <motion.h4 className='mb-3 mt-4 text-white'>Honeymoon and Romantic Stays</motion.h4>
                <p className='text-white'>Allow us to help you make the best of your honeymoon, its romance your way, all the way.</p>
                <button className='text-white'>explore</button>
            </div>
            <div className='col-7 pt-5'>
            
            </div> */}
        </div>
      </div>
        
   </section>
    <section className={`${styles.banner_space_botom_text} container ... `}>
          <div className="row">
              <div className="col-12">
              <motion.h3 className='mb-3'>Honeymoon and Romantic Stays</motion.h3>
                <p className=''>Allow us to help you make the best of your honeymoon, its romance your way, all the way.</p>
                <Link to="/honeymoon-and-romantic-stays"><button>explore</button></Link>
              </div>
          </div>
    </section>
    </MediaQuery>
   
    <MediaQuery minDeviceWidth={760} >
   <section className='container'>
    <div className="row">
          
            <div className="col-5 pt-4">
            <motion.h3 className='mb-3 mt-4'>Spa and Wellness Retreats</motion.h3>
                <p >Immerse yourself in the best treatments found in the Indian Ocean and discover a whole new you</p>
                <Link to="/spa-and-wellness-retreats"><button className="">explore</button></Link>
            </div>
            <div className="col-1">

            </div>
            <div className="col-6">
            <motion.div
               className={styles.img_box}>
                <img
                src={spa}
               
                alt="Picture of the author"
               
              />
              </motion.div>
            </div>
    </div>
          {/* <div className='row '>
         
          

          <div className='col-7 mt-5' >
            
           
             

              </div>
              <div className='col-1'>

          </div>

              <div className={`col-3  ...`}>
              <motion.div
               className={styles.img_box}>
              <img
              src={spaside}
              alt="Picture of the author"
          
            />
              </motion.div>
             
              </div>
              
           
          </div> */}
    </section>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={760} >
    <section className='container'>
          <div className='row '>
         
           
              <div className={`${styles.mobile_pdn} ${styles.mrgin_top_80}  col-12 ...`} >
            <div  className={styles.img_container}>
            <motion.div
               className={styles.img_box}>
              <img
                src={spa}
               
                alt="Picture of the author"
                
              />
              </motion.div>
            
            </div>
            <motion.h3 className='mb-3 mt-4'>Spa and Wellness Retreats</motion.h3>
                <p >Immerse yourself in the best treatments found in the Indian Ocean and discover a whole new
              you</p>
              <Link to="/spa-and-wellness-retreats"><button className="">explore</button></Link>
              </div>
          </div>
    </section>
    </MediaQuery>
    <MediaQuery minDeviceWidth={760} >
    <section className={`${styles.bg_img_fiveth} ${styles.custom_space}`} >
      <div className='container'>
      <div className='row'>
      
            
            <div className='col-7 pt-5'>
            
            </div>
            <div className={`${styles.paddin_top_10} col-5  ...`}>
            <motion.h3 className='mb-3 mt-4 text-white'>Family Getaways</motion.h3>
                <p className='text-white'>Press pause on your fast-paced life and cherish time with your loved ones this holiday.</p>
                <Link to="/family-getaways"><button className="text-white">explore</button></Link>
            </div>
        </div>
      </div>
        
   </section>
   </MediaQuery>
   <MediaQuery maxDeviceWidth={760} >
    <section className={`${styles.bg_img_fiveth} ${styles.custom_space} ${styles.banner_botom}`} >
      <div className='container'>
      <div className='row'>
      
            {/* <div className={`${styles.paddin_top_10} col-5  ...`}>
            <motion.h4 className='mb-3 mt-4 text-white'>Honeymoon and Romantic Stays</motion.h4>
                <p className='text-white'>Allow us to help you make the best of your honeymoon, its romance your way, all the way.</p>
                <button className='text-white'>explore</button>
            </div>
            <div className='col-7 pt-5'>
            
            </div> */}
        </div>
      </div>
        
   </section>
    <section className={`${styles.banner_space_botom_text} ${styles.mrgin_bottom_80} container ... `}>
          <div className="row">
              <div className="col-12">
              <motion.h3 className='mb-3 '>Family Getaways</motion.h3>
                <p className=''>Press pause on your fast-paced life and cherish time with your loved ones this holiday.</p>
                <Link to="/family-getaways"><button className="">explore</button></Link>
              </div>
          </div>
    </section>
    </MediaQuery>


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
                  src={chevelBlank}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Patina Maldives </h4>
            <p>Sophisticated accommodations blend harmoniously with this opulent yet rustic property in the Maldives.  </p>
            <Link to="/our-partners/patina-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4 mt-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Waldorf}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Waldorf Astoria </h4>
            <p>Marvel at the Maldivian night sky in one of this award-winning property for an intimate, romantic getaway as spacious as the open ocean that surrounds you.   </p>
              <Link to="/our-partners/waldorf-astoria"><button>explore</button></Link>
            </div>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Jw}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>JW Marriot Maldives Resort and Spa </h4>
            <p>Here is a sanctuary of scenic luxury. Find your respite in stylish overwater villas and beach villas with plush bedding, private pools and decks with stunning views of the shimmering Indian Ocean.   </p>
              <Link to="/our-partners/jw-marriot-maldives"><button>explore</button></Link>
            </div>
        </div>

        <div className='row'>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={HardRock}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Hard Rock Hotel Maldives </h4>
            <p>Do like the rock stars do and make sure your holiday to the Maldives is an one-of-a-kind hit!</p>
            <Link to="/our-partners/hard-rock-hotel-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4 mt-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Raffles}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Raffles Maldives </h4>
            <p>Discover the Maldives in spacious comfort and the magic of nature — it’s the best of both worlds.  </p>
            <Link to="/our-partners/raffles-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Ozon}
                  alt="Picture of the author"
               
                />
              </div>
           
            <h4 className='mt-4'>Ozen Reserve Bolifushi</h4>
            <p>Be welcomed to island to the beat of the traditional drums of Maldives. Experience authentic Maldivian hospitality as you indulge in an impeccable style renowned by the Ozen brand.</p>
            <Link to="/our-partners/ozen-reserve-bolifushi"><button>explore</button></Link>
            </div>
        </div>

        <div className='row'>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Joali}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Joali Maldives </h4>
            <p>Designed as an immersive playground for all that is luxurious and sustainable, Joali is an experience you don’t want to miss out on. </p>

            
            <Link to="/our-partners/joali-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4 mt-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Finolu}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Finolhu Maldives </h4>
            <p>The colours of the corals and fish unfold their very special magic. Finolhu is a place of dreams, both on the beach and in the water.</p>
            <Link to="/our-partners/finolhu-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Hilton}
                  alt="Picture of the author"
                 
                />
              </div>
           
              <h4 className='mt-4'>Hilton Aminigiri  </h4>
            <p>These beach and overwater villas each have a private pool and all the comforts for guests to feel genuinely at home.</p>
            <Link to="/our-partners/hilton-aminigiri"><button>explore</button></Link>
            </div>
        </div>

        <div className='row'>
            <div className='col-4'>
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
            <div className='col-4 mt-4'>
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
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Sai}
                  alt="Picture of the author"
                 
                />
              </div>
           
              <h4 className='mt-4'>Saii Lagoon Maldives   </h4>
            <p>Looking for quirky vibrancy? A whole new energy to the usual seaside holiday? Imagine to enjoy the heavenly island life in the Maldives but having the freedom of hopping between multiple resorts, visiting different restaurants each night or meet new people. Sounds like it’s not possible? Well, it actually is at the SAii Lagoon!</p>
            <Link to="/our-partners/saii-lagoon-maldives"><button>explore</button></Link>
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
                <h5 >Think of us as an exclusive black book of partners, hotels, residences, private islands and yacht destinations around the Maldives  – to make you feel at home anywhere across all continents.</h5>
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
            <p>Sophisticated accommodations blend harmoniously with this opulent yet rustic property in the Maldives.  </p>
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
            <p>Marvel at the Maldivian night sky in one of this award-winning property for an intimate, romantic getaway as spacious as the open ocean that surrounds you.  </p>
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
            <p>Here is a sanctuary of scenic luxury. Find your respite in stylish overwater villas and beach villas with plush bedding, private pools and decks with stunning views of the shimmering Indian Ocean.   </p>
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
        <div className="row">
        <div className='col-6'>
        <div className={styles.resort_box}>
                  <img
                  src={Raffles}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Raffles Maldives </h4>
            <p>Discover the Maldives in spacious comfort and the magic of nature — it’s the best of both worlds.  </p>
            <Link to="/our-partners/raffles-maldives"><button>explore</button></Link>
            </div>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Ozon}
                  alt="Picture of the author"
               
                />
              </div>
           
            <h4 className='mt-4'>Ozen Reserve Bolifushi</h4>
            <p>Be welcomed to island to the beat of the traditional drums of Maldives. Experience authentic Maldivian hospitality as you indulge in an impeccable style renowned by the Ozen brand.  </p>
            <Link to="/our-partners/ozen-reserve-bolifushi"><button>explore</button></Link>
            </div>
        </div>

        <div className='row'>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Joali}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Joali Maldives </h4>
            <p>Designed as an immersive playground for all that is luxurious and sustainable, Joali is an experience you don’t want to miss out on. </p>

            
            <Link to="/our-partners/joali-maldives"><button>explore</button></Link>
            </div>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Finolu}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Finolhu Maldives </h4>
            <p>The colours of the corals and fish unfold their very special magic. Finolhu is a place of dreams, both on the beach and in the water.</p>
            <Link to="/our-partners/finolhu-maldives"><button>explore</button></Link>
            </div>
           
        </div>

        <div className='row'>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Hilton}
                  alt="Picture of the author"
                 
                />
              </div>
           
              <h4 className='mt-4'>Hilton Aminigiri  </h4>
            <p>These beach and overwater villas each have a private pool and all the comforts for guests to feel genuinely at home.</p>
            <Link to="/our-partners/hilton-aminigiri"><button>explore</button></Link>
            </div>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Alila}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Alila Kothaifaru Maldives </h4>
            <p>This serene resort is located in the Raa Atoll on a natural island, Kothaifaru and is only 45-minutes away from Male international airport. Prepare to spend you holiday blessed with white beaches, turquoise ocean, over-water and beach villas, a spa, elegant restaurants and so much more.  </p>

            
            <Link to="/our-partners/alila-kothaifaru-maldives"><button>explore</button></Link>
            </div>
           
        </div>

        <div className='row'>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Lily}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Lily Beach Maldives  </h4>
            <p>Located on the island of Huvahendhoo, Lily Beach offers luxury All Inclusive packages. Perfect for snorkellers and scuba divers due to the abundant marine life and 40+ dive sites within easy reach. All the usual water sports are available, as well as a range of holistic therapies at the Tamara Spa for those looking to be pampered and indulged.
</p>
            <Link to="/our-partners/lily-beach-maldives"><button>explore</button></Link>
            </div>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Sai}
                  alt="Picture of the author"
                 
                />
              </div>
           
              <h4 className='mt-4'>Saii Lagoon Maldives   </h4>
            <p>Looking for quirky vibrancy? A whole new energy to the usual seaside holiday? Imagine to enjoy the heavenly island life in the Maldives but having the freedom of hopping between multiple resorts, visiting different restaurants each night or meet new people. Sounds like it’s not possible? Well, it actually is at the SAii Lagoon!</p>
            <Link to="/our-partners/saii-lagoon-maldives"><button>explore</button></Link>
            </div>
           
        </div>
    </section>
    </MediaQuery>
   


    </div>
  )
}



function Homear(){

  
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    }
  }, [controls, inView2]);

 




  const variants = {
    hidden: { opacity: 0,  },
    enter: { opacity: 1, },
  
  }
  const header1 = {
    hidden: { opacity: 0, x: 0, y: 30, },
    enter: { opacity: 1, x: 0, y: 0, },
  }
  const header2 = {
    hidden: { opacity: 0, x: 0, y: 30, },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
  }
 

  const imgrev = {
    hidden: { opacity: 0, x: 0, y: 90, },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1,} },
  }


  const subheader = {
    hidden: { opacity: 0, x: 0, y: 20, },
    enter: { opacity: 1, x: 0, y: 0, },
  }
  const explore = {
    hidden: { opacity: 0, x: 0, y: 0, },
    enter: { opacity: 1, x: 0, y: 0, },
  }


  return(


    
    <div>

    <motion.section 
    key="top"
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
 
    transition={{ type: 'linear', duration: 1, }} 
    
    className={styles.bg_img_top}>
        <div className='row'>
            <div className={styles.display_flex}>
                <motion.h1
                 key="headerh1"
                 variants={header1} // Pass the variant object into Framer Motion 
                 initial="hidden" // Set the initial state to variants.hidden
                 animate="enter" // Animated state to variants.enter
                 // Exit state (used later) to variants.exit
                 transition={{ type: 'linear', duration: 1, delay:0.5 }}
                className={styles.color_white}>في Jovial، نفهم السفر.</motion.h1>
                <motion.h4 
                  key="headerh4"
                  variants={subheader} // Pass the variant object into Framer Motion 
                  initial="hidden" // Set the initial state to variants.hidden
                  animate="enter" // Animated state to variants.enter
                  // Exit state (used later) to variants.exit
                  transition={{ type: 'linear', duration: 1, delay:0.8 }}
                className={styles.color_white_10}>نحن نجسد الرفاهية ونضمن معاملة ضيوفنا ضمن صفوة الفيلات الخاصة ومتطلبات السفر الفاخر</motion.h4>
            </div>
            <motion.div
             key="explore"
             variants={explore} // Pass the variant object into Framer Motion 
             initial="hidden" // Set the initial state to variants.hidden
             animate="enter" // Animated state to variants.enter
             // Exit state (used later) to variants.exit
             transition={{ type: 'linear', duration: 1, delay:0.6 }}
             className={styles.scroll_more}>
                <div >
                  <div className="text-center mb-2 ">
                      <img
                      src={downarrow}
                      width={15}
                      alt="Picture of the author"
                       
                    />
                  </div>
               
                  <p>قم بالتمرير لأسفل لبدء التجربة</p></div>
            </motion.div>
        </div>
    </motion.section >
    <section className='container' >
        <div className='row'>
            <div className='col-12 text-center'>
              <div className={styles.custom_space}>
              <motion.h2
                ref={ref2}
                animate={controls}
                initial="hidden"
                variants={header2}
                className='mb-4'>دعنا نأخذك في مغامرة خيالية وفريدة،</motion.h2>
                <motion.h5
                     ref={ref2}
                     animate={controls}
                     initial="hidden"
                     variants={header2}
                >غنية فقط بأفضل الأسماء في مجال الضيافة. وعدنا؟
                تقديم العالم لك على طبق من فضة.
                </motion.h5>
              </div>
            </div>
        </div>
    </section>
   <section className={styles.bg_img_second} >
        <div className='row'>

        </div>
   </section>
   <section className='container' >
        <div className='row'>
            <div className='col-12 text-center'>
              <div className={`${styles.mobile_botom} ${styles.custom_space}`}>
              <motion.h2
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={header2}
         
              className='mb-4'>وعد Jovial </motion.h2>
                <h5 >عندما تختار Jovial ، ستحصل على الفور على مجموعة من الخدمات الحصرية والمميزة.</h5>
              </div>
            </div>
        </div>
    </section>

    <MediaQuery minDeviceWidth={760} >
    <div className='container' >
          <div className='row'>
              <div className='col-5'>
              <motion.div
               className={styles.img_box}>
              <img
              src={img1}
              alt="Picture of the author"
             
            />
              </motion.div>
            
              </div>
              <div className='col-1'>

              </div>
              <div className='col-6' >
                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>ضمان</motion.h4>
                <p >أفضل أسعار السوق في هذا القطاع</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>الوصول الفوري</motion.h4>
                <p >24/7</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>مخصصة حسب الطلب</motion.h4>
                <p >عطلات مخصصة لكل عميل</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>مجموعة منسقة بعناية</motion.h4>
                <p >لأفضل الفنادق والمنتجعات</p>
                </div>

                <div >
                <motion.h4 className='mb-2 mt-4'>حوافز</motion.h4>
                <p >وخصومات خاصة</p>
                </div>
             

              </div>
          </div>
    </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={760} >
    <div className='container' >
          <div className='row'>
        
              <div className={`${styles.mobile_pdn} col-12 ...`} >
              <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>ضمان</motion.h4>
                <p >أفضل أسعار السوق في هذا القطاع</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>الوصول الفوري</motion.h4>
                <p >24/7</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>مخصصة حسب الطلب</motion.h4>
                <p >عطلات مخصصة لكل عميل</p>
                </div>

                <div className={styles.border_botm}>
                <motion.h4 className='mb-2 mt-4'>مجموعة منسقة بعناية</motion.h4>
                <p >لأفضل الفنادق والمنتجعات</p>
                </div>

                <div >
                <motion.h4 className='mb-2 mt-4'>حوافز</motion.h4>
                <p >وخصومات خاصة</p>
                </div>

              </div>
          </div>
    </div>
    </MediaQuery>

    <section className={`${styles.bg_img_therd} ${styles.custom_space}`} >
        <div className='row'>

        </div>
   </section>

   <section className={`${styles.space_end} ${styles.mobile_botom} container ...`} >
        <div className='row'>
            <div className='col-12 text-center'>
              <div className=''>
                <motion.h2 className='mb-4'>اكتشف عالماً جديداً</motion.h2>
              </div>
            </div>
        </div>
    </section>
    <MediaQuery minDeviceWidth={760} >
    <section className='container'>
      <div className="row">
          <div className="col-6">
          <div  className={styles.img_container}>
            <motion.div
               className={styles.img_box}>
              <img
                src={romantic}
                alt="Picture of the author"
               
              />
              </motion.div>
            
            </div>
          </div>
          <div className="col-1">

          </div>
          <div className="col-5 pt-4">
          <motion.h3 className='mb-3 mt-4'>حفلات الزفاف واحتفالات الذكرى السنوية</motion.h3>
                <p >نظم حفل زفافك في وجهتك مع مصممي السفر لدينا، ابتداءاً من الموقع، إلى الطعام، إلى إقامات المنتجعات لضيوفك وأحبائك - نحن نعتني بكل شيء!</p>

                    <Link to="/weddings-and-anniversaries"><button>explore</button></Link>
          </div>
      </div>
          {/* <div className='row '>
         
            
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
          
              

              </div>
          </div> */}
    </section>

    </MediaQuery>
    <MediaQuery maxDeviceWidth={760} >
    <section className='container'>
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
            <motion.h3 className='mb-3 mt-4'>حفلات الزفاف واحتفالات الذكرى السنوية</motion.h3>
                <p >نظم حفل زفافك في وجهتك مع مصممي السفر لدينا، ابتداءاً من الموقع، إلى الطعام، إلى إقامات المنتجعات لضيوفك وأحبائك - نحن نعتني بكل شيء!</p>
                    <Link to="/weddings-and-anniversaries"><button>explore</button></Link>

                   
              </div>
          </div>
    </section>
    </MediaQuery>
    <MediaQuery minDeviceWidth={760} >

    <section className={`${styles.bg_img_forth} ${styles.custom_space}`} >
      <div className='container'>
      <div className='row'>
      
            <div className={`${styles.paddin_top_10} col-7  ...`}>
            <motion.h3 className='mb-3 mt-4 text-white'>Honeymoon and Romantic Stays</motion.h3>
                <p className='text-white'>Allow us to help you make the best of your honeymoon, its romance your way, all the way.</p>
                <Link to="/honeymoon-and-romantic-stays"><button className="text-white">explore</button></Link>
            </div>
            <div className='col-5 pt-5'>
            
            </div>
        </div>
      </div>
        
   </section>
    </MediaQuery>

    <MediaQuery maxDeviceWidth={760} >
    <section className={`${styles.bg_img_forth} ${styles.custom_space} ${styles.banner_botom}`} >
      <div className='container'>
      <div className='row'>
      
            {/* <div className={`${styles.paddin_top_10} col-5  ...`}>
            <motion.h4 className='mb-3 mt-4 text-white'>Honeymoon and Romantic Stays</motion.h4>
                <p className='text-white'>Allow us to help you make the best of your honeymoon, its romance your way, all the way.</p>
                <button className='text-white'>explore</button>
            </div>
            <div className='col-7 pt-5'>
            
            </div> */}
        </div>
      </div>
        
   </section>
    <section className={`${styles.banner_space_botom_text} container ... `}>
          <div className="row">
              <div className="col-12">
              <motion.h3 className='mb-3'>Honeymoon and Romantic Stays</motion.h3>
                <p className=''>Allow us to help you make the best of your honeymoon, its romance your way, all the way.</p>
                <Link to="/honeymoon-and-romantic-stays"><button>explore</button></Link>
              </div>
          </div>
    </section>
    </MediaQuery>
   
    <MediaQuery minDeviceWidth={760} >
   <section className='container'>
    <div className="row">
          
            <div className="col-5 pt-4">
            <motion.h3 className='mb-3 mt-4'>Spa and Wellness Retreats</motion.h3>
                <p >Immerse yourself in the best treatments found in the Indian Ocean and discover a whole new you</p>
                <Link to="/spa-and-wellness-retreats"><button className="">explore</button></Link>
            </div>
            <div className="col-1">

            </div>
            <div className="col-6">
            <motion.div
               className={styles.img_box}>
                <img
                src={spa}
               
                alt="Picture of the author"
               
              />
              </motion.div>
            </div>
    </div>
          {/* <div className='row '>
         
          

          <div className='col-7 mt-5' >
            
           
             

              </div>
              <div className='col-1'>

          </div>

              <div className={`col-3  ...`}>
              <motion.div
               className={styles.img_box}>
              <img
              src={spaside}
              alt="Picture of the author"
          
            />
              </motion.div>
             
              </div>
              
           
          </div> */}
    </section>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={760} >
    <section className='container'>
          <div className='row '>
         
           
              <div className={`${styles.mobile_pdn} ${styles.mrgin_top_80}  col-12 ...`} >
            <div  className={styles.img_container}>
            <motion.div
               className={styles.img_box}>
              <img
                src={spa}
               
                alt="Picture of the author"
                
              />
              </motion.div>
            
            </div>
            <motion.h3 className='mb-3 mt-4'>Spa and Wellness Retreats</motion.h3>
                <p >Immerse yourself in the best treatments found in the Indian Ocean and discover a whole new
              you</p>
              <Link to="/spa-and-wellness-retreats"><button className="">explore</button></Link>
              </div>
          </div>
    </section>
    </MediaQuery>
    <MediaQuery minDeviceWidth={760} >
    <section className={`${styles.bg_img_fiveth} ${styles.custom_space}`} >
      <div className='container'>
      <div className='row'>
      
            
            <div className='col-7 pt-5'>
            
            </div>
            <div className={`${styles.paddin_top_10} col-5  ...`}>
            <motion.h3 className='mb-3 mt-4 text-white'>Family Getaways</motion.h3>
                <p className='text-white'>Press pause on your fast-paced life and cherish time with your loved ones this holiday.</p>
                <Link to="/family-getaways"><button className="text-white">explore</button></Link>
            </div>
        </div>
      </div>
        
   </section>
   </MediaQuery>
   <MediaQuery maxDeviceWidth={760} >
    <section className={`${styles.bg_img_fiveth} ${styles.custom_space} ${styles.banner_botom}`} >
      <div className='container'>
      <div className='row'>
      
            {/* <div className={`${styles.paddin_top_10} col-5  ...`}>
            <motion.h4 className='mb-3 mt-4 text-white'>Honeymoon and Romantic Stays</motion.h4>
                <p className='text-white'>Allow us to help you make the best of your honeymoon, its romance your way, all the way.</p>
                <button className='text-white'>explore</button>
            </div>
            <div className='col-7 pt-5'>
            
            </div> */}
        </div>
      </div>
        
   </section>
    <section className={`${styles.banner_space_botom_text} ${styles.mrgin_bottom_80} container ... `}>
          <div className="row">
              <div className="col-12">
              <motion.h3 className='mb-3 '>Family Getaways</motion.h3>
                <p className=''>Press pause on your fast-paced life and cherish time with your loved ones this holiday.</p>
                <Link to="/family-getaways"><button className="">explore</button></Link>
              </div>
          </div>
    </section>
    </MediaQuery>


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
                  src={chevelBlank}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Patina Maldives </h4>
            <p>Sophisticated accommodations blend harmoniously with this opulent yet rustic property in the Maldives.  </p>
            <Link to="/our-partners/patina-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4 mt-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Waldorf}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Waldorf Astoria </h4>
            <p>Marvel at the Maldivian night sky in one of this award-winning property for an intimate, romantic getaway as spacious as the open ocean that surrounds you.   </p>
              <Link to="/our-partners/waldorf-astoria"><button>explore</button></Link>
            </div>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Jw}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>JW Marriot Maldives Resort and Spa </h4>
            <p>Here is a sanctuary of scenic luxury. Find your respite in stylish overwater villas and beach villas with plush bedding, private pools and decks with stunning views of the shimmering Indian Ocean.   </p>
              <Link to="/our-partners/jw-marriot-maldives"><button>explore</button></Link>
            </div>
        </div>

        <div className='row'>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={HardRock}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Hard Rock Hotel Maldives </h4>
            <p>Do like the rock stars do and make sure your holiday to the Maldives is an one-of-a-kind hit!</p>
            <Link to="/our-partners/hard-rock-hotel-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4 mt-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Raffles}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Raffles Maldives </h4>
            <p>Discover the Maldives in spacious comfort and the magic of nature — it’s the best of both worlds.  </p>
            <Link to="/our-partners/raffles-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Ozon}
                  alt="Picture of the author"
               
                />
              </div>
           
            <h4 className='mt-4'>Ozen Reserve Bolifushi</h4>
            <p>Be welcomed to island to the beat of the traditional drums of Maldives. Experience authentic Maldivian hospitality as you indulge in an impeccable style renowned by the Ozen brand.</p>
            <Link to="/our-partners/ozen-reserve-bolifushi"><button>explore</button></Link>
            </div>
        </div>

        <div className='row'>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Joali}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Joali Maldives </h4>
            <p>Designed as an immersive playground for all that is luxurious and sustainable, Joali is an experience you don’t want to miss out on. </p>

            
            <Link to="/our-partners/joali-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4 mt-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Finolu}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Finolhu Maldives </h4>
            <p>The colours of the corals and fish unfold their very special magic. Finolhu is a place of dreams, both on the beach and in the water.</p>
            <Link to="/our-partners/finolhu-maldives"><button>explore</button></Link>
            </div>
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Hilton}
                  alt="Picture of the author"
                 
                />
              </div>
           
              <h4 className='mt-4'>Hilton Aminigiri  </h4>
            <p>These beach and overwater villas each have a private pool and all the comforts for guests to feel genuinely at home.</p>
            <Link to="/our-partners/hilton-aminigiri"><button>explore</button></Link>
            </div>
        </div>

        <div className='row'>
            <div className='col-4'>
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
            <div className='col-4 mt-4'>
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
            <div className='col-4'>
              <div className={styles.resort_box}>
                  <img
                  src={Sai}
                  alt="Picture of the author"
                 
                />
              </div>
           
              <h4 className='mt-4'>Saii Lagoon Maldives   </h4>
            <p>Looking for quirky vibrancy? A whole new energy to the usual seaside holiday? Imagine to enjoy the heavenly island life in the Maldives but having the freedom of hopping between multiple resorts, visiting different restaurants each night or meet new people. Sounds like it’s not possible? Well, it actually is at the SAii Lagoon!</p>
            <Link to="/our-partners/saii-lagoon-maldives"><button>explore</button></Link>
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
                <h5 >Think of us as an exclusive black book of partners, hotels, residences, private islands and yacht destinations around the Maldives  – to make you feel at home anywhere across all continents.</h5>
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
            <p>Sophisticated accommodations blend harmoniously with this opulent yet rustic property in the Maldives.  </p>
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
            <p>Marvel at the Maldivian night sky in one of this award-winning property for an intimate, romantic getaway as spacious as the open ocean that surrounds you.  </p>
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
            <p>Here is a sanctuary of scenic luxury. Find your respite in stylish overwater villas and beach villas with plush bedding, private pools and decks with stunning views of the shimmering Indian Ocean.   </p>
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
        <div className="row">
        <div className='col-6'>
        <div className={styles.resort_box}>
                  <img
                  src={Raffles}
                  alt="Picture of the author"
                 
                />
              </div>
           
            <h4 className='mt-4'>Raffles Maldives </h4>
            <p>Discover the Maldives in spacious comfort and the magic of nature — it’s the best of both worlds.  </p>
            <Link to="/our-partners/raffles-maldives"><button>explore</button></Link>
            </div>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Ozon}
                  alt="Picture of the author"
               
                />
              </div>
           
            <h4 className='mt-4'>Ozen Reserve Bolifushi</h4>
            <p>Be welcomed to island to the beat of the traditional drums of Maldives. Experience authentic Maldivian hospitality as you indulge in an impeccable style renowned by the Ozen brand.  </p>
            <Link to="/our-partners/ozen-reserve-bolifushi"><button>explore</button></Link>
            </div>
        </div>

        <div className='row'>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Joali}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Joali Maldives </h4>
            <p>Designed as an immersive playground for all that is luxurious and sustainable, Joali is an experience you don’t want to miss out on. </p>

            
            <Link to="/our-partners/joali-maldives"><button>explore</button></Link>
            </div>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Finolu}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Finolhu Maldives </h4>
            <p>The colours of the corals and fish unfold their very special magic. Finolhu is a place of dreams, both on the beach and in the water.</p>
            <Link to="/our-partners/finolhu-maldives"><button>explore</button></Link>
            </div>
           
        </div>

        <div className='row'>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Hilton}
                  alt="Picture of the author"
                 
                />
              </div>
           
              <h4 className='mt-4'>Hilton Aminigiri  </h4>
            <p>These beach and overwater villas each have a private pool and all the comforts for guests to feel genuinely at home.</p>
            <Link to="/our-partners/hilton-aminigiri"><button>explore</button></Link>
            </div>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Alila}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Alila Kothaifaru Maldives </h4>
            <p>This serene resort is located in the Raa Atoll on a natural island, Kothaifaru and is only 45-minutes away from Male international airport. Prepare to spend you holiday blessed with white beaches, turquoise ocean, over-water and beach villas, a spa, elegant restaurants and so much more.  </p>

            
            <Link to="/our-partners/alila-kothaifaru-maldives"><button>explore</button></Link>
            </div>
           
        </div>

        <div className='row'>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Lily}
                  alt="Picture of the author"
                  
                />
              </div>
           
            <h4 className='mt-4'>Lily Beach Maldives  </h4>
            <p>Located on the island of Huvahendhoo, Lily Beach offers luxury All Inclusive packages. Perfect for snorkellers and scuba divers due to the abundant marine life and 40+ dive sites within easy reach. All the usual water sports are available, as well as a range of holistic therapies at the Tamara Spa for those looking to be pampered and indulged.
</p>
            <Link to="/our-partners/lily-beach-maldives"><button>explore</button></Link>
            </div>
            <div className='col-6'>
            <div className={styles.resort_box}>
                  <img
                  src={Sai}
                  alt="Picture of the author"
                 
                />
              </div>
           
              <h4 className='mt-4'>Saii Lagoon Maldives   </h4>
            <p>Looking for quirky vibrancy? A whole new energy to the usual seaside holiday? Imagine to enjoy the heavenly island life in the Maldives but having the freedom of hopping between multiple resorts, visiting different restaurants each night or meet new people. Sounds like it’s not possible? Well, it actually is at the SAii Lagoon!</p>
            <Link to="/our-partners/saii-lagoon-maldives"><button>explore</button></Link>
            </div>
           
        </div>
    </section>
    </MediaQuery>
   


    </div>
  )
}