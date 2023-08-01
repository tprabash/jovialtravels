import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import patner from '../../assats/img/about_banner.jpg'
import flower from '../../assats/img/flower_about.png'
import vinoli from '../../assats/img/vinoli_about.jpg'

import Kareem from '../../assats/img/Kareem-pic.jpeg'



export default function about() {

  const variants = {
    hidden: { opacity: 0, x: 0,  },
    enter: { opacity: 1, x: 0, },
    exit: { opacity: 0, x: 0, },
  }

  return (
    <motion.div
        variants={variants} 
        initial="hidden" 
        animate="enter" 
        exit="exit"
        className='min-90'
    >

            <Parallax bgImage={patner} bgImageAlt="the cat" strength={50}>
                <section className='h-100vh d-flex align-items-end container'>
                 <motion.h1 className='mb-5 text-white'>Our Story</motion.h1>
                </section>
            </Parallax>

            <section className='container custom_space'>
                <div className='row'>
                    <div className='col-12'>
                        <h4 className='text-center'>Our story is a pretty easy one to follow. You asked and we listened. We heard your google searches. Studied your Pinterest boards. Re-watched your favourite YouTube bloggers and basically became you for a very long time.</h4>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h2 className='mb-4 text-center'>You asked and we listened.</h2>
                        <p className='text-center'>
                        Its time folks, you’ve been looking all over the world wide web for a service that provides you with everything you need when travelling to an exotic location.</p>
                        <p className='text-center'>What does that mean you ask?</p>
                        <p className='text-center'>Well, just as you look at celebrities for inspiration on a holiday or your next outfit, we know you need a personal designer to watch over your next vacation spot.</p>
                        <p className='text-center'>We are the designers. We are here to curate the best holidays you will find across the oceans. You want private villas in far off lands where no one will find you? Done.</p>
                        <p className='text-center'>You’re looking for a designer to check rates, book ahead and simply tell you when to show up? Done.</p>
                        <p className='text-center'>You have a specific diet and want to ensure nothing gets mixed up on your holiday? Done.</p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h2 className='mb-4 text-center'>A Name You Can Trust</h2>
                        <p className='text-center'>
                        While there are a many travel destination management companies (or travel agencies) who will claim their mark in the industry. We can say with assured pride that we are a brand you can trust. </p>
                        <p className='text-center'>With a profound footprint in the travel sector as a corporate travel specialist based in the GCC, Utravel is finally ready to branch into the leisure travel sector and we do so with our latest travel product, Jovial Travels. </p>
                        
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h2 className='mb-4 text-center'>We are Travel Designers.</h2>
                        <p className='text-center'>
                        With years of experience in the field and we come to you with one goal: to provide our visitors with a luxurious holiday fit for royalty.</p>
                        <p className='text-center'>Discover new islands, personalised theme holidays and luxury like never before.</p>
                        <p className='text-center'>Jovial Travels is sheer comfort. It’s sleeping upon a million soft pillows, swimming the deepest parts of the ocean and discovering new flavours.</p>
                        <p className='text-center'>Jovial Travels is adrenaline fuels adventures, nights spent under the unpolluted starry skies and 24-hour personalized service.</p>
                        <p className='text-center'>Jovial Travels is all your wants, delivered…</p>
                      
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h2 className='text-center mb-5'>Meet The Faces Behind Your Next Holiday  </h2>
                        <p className='text-center mb-4'><img  src={Kareem} width='30%'/></p>
                        <p className='text-center'>Energentic, creative and always on the look out for the latest advancements in marketing – joining the Utravel family in its later years– Kareem has studied the art of hospitality and personalized service in the pristine Swiss Hotel Management School. 
Years spent allowing him access to international internships in countries such as Barbados and Belgium.
</p>
                        <p className='text-center mb-0 pb-0'>Kareem Abu Alrub</p>
                        <p className='text-center mb-5'> <em >Operations Manager </em></p>
                       
                       
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <p className='text-center mb-4'><img  src={vinoli} width='30%'/></p>
                        <p className='text-center'>“Thank you for choosing Jovial Travels.<br/> We are here to listen, take notes and curate only the most exceptional <br/>stays for you and your loved ones.”</p>
                        <p className='text-center mb-0 pb-0'>Vinoli Yasmira</p>
                        <p className='text-center mb-5'> <em >Lead Travel Designer</em></p>
                        <p className='text-center'><img  src={flower} width='70%'/></p>
                       
                    </div>
                </div>


            </section>
       
    </motion.div>
  )
}
