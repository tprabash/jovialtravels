import React from 'react'
import { motion} from "framer-motion";
import { Parallax } from 'react-parallax';
import MediaQuery from 'react-responsive'
import patner from '../../assats/img/jovial_travel_Honeymoon.jpg'
import { Link } from "react-router-dom";
import styles from '../partners/partner.module.css';
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



export default function partner() {

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
                 <motion.h1 className='mb-5 text-white'>Our Partners</motion.h1>
                </section>
            </Parallax>

           


            <MediaQuery minDeviceWidth={760} >
   <section className='container custom_space_top' >
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
   <section className={`${styles.resort_list_pdn}  container custom_space_top ... `} >
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
     
        </motion.div>
  )
}
