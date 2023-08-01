import React from 'react'
import { motion} from "framer-motion";
import { Parallax } from 'react-parallax';
import patner from '../../assats/img/jovial_travel_blog_two_banner.jpg'
import Form from '../../components/form'
import patner2 from '../../assats/img/jovial_travel_blog_two_middle.jpg'


export default function Blogtwo() {
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
                 <motion.h2 className='mb-5 text-white'>Why Travel To The Maldives?</motion.h2>
                </section>
            </Parallax>
   
    
        <section className='container custom_space'>
                <div className='row'>
                    <div className='col-2'>

                    </div>
                    <div className='col-8'>
                    <h4 className='text-left mb-5'>You've seen photos of the Maldives before: picture-perfect private villas suspended over
striking blue waters, alabaster white sand beaches and spectacular sunsets dipping into the
horizon. The scenic beauty of the Maldives is something to behold, something you can&#39;t quite
understand until you're there in person.</h4>
                        <p>The island nation of the Maldives is popular with honeymooners looking for seclusion and
adventurers looking to explore the depths of the sea on a scuba diving and snorkeling
excursion. </p>
                        <p>
                        Travellers seeking relaxation can unwind at one of the island spas and all visitors should
certainly spend a day exploring the Maldivian capital of Malé. The hotels in this region are also
spectacular, ranging from underwater hotels to overwater bungalows to incredibly beautiful
resorts.
                        </p>
                        <p>
                        However, getting to and staying in this tropical paradise requires patience (there are no direct
flights from the United States) and plentiful cash. Located between the Arabian and Laccadive
seas, roughly 500 miles southwest of Sri Lanka, the Maldives is about as isolated as you can get
– and that&#39;s just another one of its many allures.
                        </p>
                        <p>Here are just a few of the main reasons why you need to make Maldives your next travel spot.</p>

                        <h4 className='mt-4 mb-3'>Romance done right </h4>
                        <p>A visit to the Maldives is a dream come true. Each resort is a private enclave perched on an
individual island, providing its occupants with exclusive tranquility. This is a great place to relax
and spend quality time with your other half or family. Imagine waking up on the private island,
surrounded by swaying palm trees, azure blue sea and pristine soft white sand every day.
Maldives is where you create magical memories with your loved ones.</p>

                        <h4 className='mt-4 mb-3'>It’s the Luxe Life  </h4>
                        <p>If there were one luxury destination in Asia that comes to mind, it has to be Maldives. Over
here, you will be treated like royalty. From the moment you arrive at the Male Airport, resort
representatives will be there to escort you to your luxury speedboat or seaplane. This is where
your fuss-free vacation begins. From the unparalleled top-notch personalized service to the
romantic Dhoni cruises to dining on a private sandbank, you will enjoy unrivalled luxury and
pampering. </p>

                    </div>
                    <div className='col-2'>

                    </div>
                </div>
        </section>


        <Parallax bgImage={patner2} bgImageAlt="the cat" strength={50}>
                <section className='h-100vh d-flex align-items-end container'>
                 
                </section>
            </Parallax>

            <section className='container custom_space'>
                <div className='row'>
                    <div className='col-2'>

                    </div>
                    <div className='col-8'>
                    

                        <h4 className='mt-4 mb-3'>Life on the Sea  </h4>
                        <p>Well known for its picturesque beaches with sparkling soft white sand, beautiful azure sea, and
impossibly clear skies, the term “tropical paradise” for Maldives is almost an understatement.
Basking on your sundeck while enjoying the heart-stopping views of the Indian Ocean is like a
dream. Every single angle seems to be the perfect vantage point for taking picture-perfect
insta-worthy photos.</p>




<h4 className='mt-4 mb-3'>Ultimate privacy </h4>
                        <p>A trip to the Maldives is an ultimate vacation where you get to enjoy a combination of nature,
luxury and privacy. Sandbank dining is definitely one of the most serene and romantic
experiences in Maldives. Enjoy the sandbank in private with your special other half on the stark
white sand while being surrounded by the endless Indian Ocean. Savour your meal as you
witness the first rays of morning light on the horizon.</p>
<p>With all this and more awaiting your next holiday, we just need to know why you’re still reading
and ask that you get clicking!</p>

                    

                    </div>
                    <div className='col-2'>

                    </div>
                </div>
        </section>

        <section className='container'>
                <div className='row'>
                    <div className='col-12'>
                  
                    </div>
                </div>
        </section>
        <section className='container mt-5'>
                <div className='row'>
                    <div className='col-9 border_bg_form'>
                    <Form/>
                    </div>
                </div>
            </section>
   
    </motion.div>
  )
}
