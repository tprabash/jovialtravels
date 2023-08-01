import React from 'react'
import { motion} from "framer-motion";
import { Parallax } from 'react-parallax';
import patner from '../../assats/img/kids_blog_header.jpg'
import Form from '../../components/form'
import patner2 from '../../assats/img/blog_one_banner_middle.jpg'


export default function Blogone() {
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
                 <motion.h2 className='mb-5 text-white'>Toddlers, Teens and the Maldives</motion.h2>
                </section>
            </Parallax>
   
    
        <section className='container custom_space'>
                <div className='row'>
                    <div className='col-2'>

                    </div>
                    <div className='col-8'>
                    <h4 className='text-left mb-5'>Travel is one of human nature most joyous experiences. It offers us a glimpse into another world and culture whilst stimulating all five of our senses. </h4>
                        <p>But when it comes to a child or teen, travelling can be quite a task. You need to be on top of your regular game. You need to offer you little travellers something to keep them occupied (and relaxed) at all times. </p>
                        <p>
                        Though favoured the world over as a honeymoon destination for its stunning tropical beauty, did you know that the Maldives also makes for the perfect family getaway? With over 150 resorts to choose from, selecting the right property is key, especially if you are holidaying with kids. Here are some pointers that will help you pick a child-friendly resort in the Maldives: 
                        </p>

                        <h4 className='mt-4 mb-3'>Seaplane or Speed boat? </h4>
                        <p>If you're traveling with an infant or have over multiple flights to reach the capital Malé, it's best to pick a resort that is a speedboat ride from the airport. Speedboats are not particularly bumpy, but if you plan to visit during the Maldivian monsoons (June to October) check if the property has larger speedboats, which will be more comfortable.</p>

                        <h4 className='mt-4 mb-3'>Beach Villa or Water Villa?  </h4>
                        <p>If you travel with a bunch of teenagers, the water villas are the best way to win Parent of The Year. Its an Instagram friendly villa that will see them posting a five different sunset and sunrise boomerangs.  But if you’ve got your hands full with an inquisitive toddler whose speed will have you questioning your physical health – its always safer on a beach villa.  Why? Because firstly, taking a child to an overwater villa will have you signing a clause that you are solely responsible for any fatal injuries. But risk factors aside, the beach villa gives you privacy, luxury and a home away from home feel with the kids. </p>


                        
                        <h4 className='mt-4 mb-3'>All-Inclusive or Full Board Meal Plans?   </h4>
                        <p>Contrary to popular belief, a full board meal does not mean anything and everything is included. </p>
                        <p>It just means you are eligible for your three main meals and anything addition, will need to be paid for. When travelling with kids, we recommend you find a resort that offers you the All-inclusive meal plan. Why? Because with kids you never know if they’d prefer a snack after pool time or perhaps a refreshing juice some time in the afternoon. </p>

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
                    

                        <h4 className='mt-4 mb-3'>Is there enough for them to do?  </h4>
                        <p>This is a definite yes. When it comes to adventure, there’s a ton of action and soul stimulating activities for the whole family. Whether its spending their mornings at the Kids’ Clubs and Teen Lounges or their afternoons under water with the world’s most unique creatures — there is always something to do. </p>
                        <p>Your resorts should host a plethora of family friendly activities to keep you entertained. We recommend snorkeling at the reef or perhaps taking a fishing tutorial on the Maldivian dhoni. </p>

                    

                    </div>
                    <div className='col-2'>

                    </div>
                </div>
        </section>

        <section className='container'>
                <div className='row'>
                    <div className='col-12'>
                    <h4 className='mt-4 mb-3 text-center'>Are you looking for a family friendly holiday in the Maldives?  </h4>
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
