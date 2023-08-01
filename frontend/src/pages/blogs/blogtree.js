import React from 'react'
import { motion} from "framer-motion";
import { Parallax } from 'react-parallax';
import patner from '../../assats/img/blog_tree_header.jpg'
import Form from '../../components/form'
import patner2 from '../../assats/img/blog_tree_middle.jpg'


export default function Blogtree() {
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
                 <motion.h2 className='mb-5 text-white'>Experience The Maldives </motion.h2>
                </section>
            </Parallax>
   
    
        <section className='container custom_space'>
                <div className='row'>
                    <div className='col-2'>

                    </div>
                    <div className='col-8'>
                    <h4 className='text-left mb-5'>The Maldives enchants. Just that name stirs up images of an exotic tropical paradise. It's no wonder visitors return again and again.</h4>
                        <p>If you think a Maldives vacation is all about an azure water and beautiful beaches, listening to the whispering waves, think again. Not that we have anything against that approach, but the Indian ocean's ultimate destination is more than just another luxury getaway. </p>
                     

                        <h4 className='mt-4 mb-3'>Seaplanes to the resort  </h4>
                        <p>Make your vacation or any occasion a special and memorable getaway, and look to the Maldives from a brand-new perspective with seaplanes flight.</p>
                    <p>
                    Enjoy air journey on great float plane to see a deep blue ocean dotted with tiny palm islands surrounded by crystal clear lagoons and sugar-white beaches.
                    </p>

                        <h4 className='mt-4 mb-3'>House Reef Snorkelling  </h4>
                        <p>Experience the underwater wonderland and the best snorkeling in the world! Swimming with a mask and snorkel is open to anyone who knows how to swim and does not require much experience. </p>
                       <p>
                       Snorkelling the resort’s bustling house reef is an essential experience for guests of the Maldives. You will discover a diverse array of marine life during this complimentary activity, from schools of colorful fish, to reef sharks, rays and turtles.
                       </p>


                        
                        <h4 className='mt-4 mb-3'>Island Hopping   </h4>
                        <p>Believe it or not, there is a large settlement in the Maldives and many locals live and work on the islands. If you stay at a private island in the Maldives, make sure to book an excursion to visit the nearby local islands and communities. This was a great day trip around the islands. </p>
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
                    

                        <h4 className='mt-4 mb-3'>Paddle Board around your lagoon  </h4>
                        <p>Believe it or not, there is a large settlement in the Maldives and many locals live and work on the islands. If you stay at a private island in the Maldives, make sure to book an excursion to visit the nearby local islands and communities. This was a great day trip around the islands.</p>

                        <h4 className='mt-4 mb-3'>Sleep over the water
  </h4>
                        <p>Almost all water villas in the world are located in French Polynesia (the South Pacific) and in the Maldives, although there are some alternatives that can be found outside these unrivaled Bounty islands.  And remember, the most exclusive Maldives' resorts offer a luxurious accommodation that will surpass your wildest dreams, with stunning amenities and views: from outdoor terraces and infinity pools to glass floor panels and retractable roofs, allowing guests to admire the fish schools below or look higher into the tropical starry sky.</p>


                        <h4>Swim with the Whale Sharks </h4>

                        <p>
                        Whale Sharks adventure ticks the top on bucket list of many visitors in the Maldives. Being one of the biggest fishes in the ocean and one of the most majestic creatures to see underwater, 
                        </p>
                        <p>
                        snorkeling or diving with these gentle giants is one of the ultimate experiences. Fortunately the Maldives is a breathtaking destination for sightings of whale sharks and manta rays all year round. However, good to know where and when to watch them
                        </p>
                    
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
