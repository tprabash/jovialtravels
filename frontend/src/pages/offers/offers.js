import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import patner from '../../assats/img/offer_banner.jpg'
import patner2 from '../../assats/img/offer_banner2.jpg'
import patner3 from '../../assats/img/offer_banner3.jpg'
import footerimg from '../../assats/img/honeymoon_form.jpg'
import Form from '../../components/form'

import Newsform from '../../components/Newsform'
import bolpushi from '../../assats/img/bolpushi.jpg'
import fmount from '../../assats/img/fmount-m.jpg'
import kandima from '../../assats/img/kandima.jpg'
import sheraton from '../../assats/img/sheraton-full-moon.jpg'
import ananthara from '../../assats/img/ananthara-digu.jpg'
import siyama from '../../assats/img/sun-siyama.jpg'




import formsideimg from '../../assats/img/jovial_travel_Tailor_Made.jpg'

import hardroc from '../../assats/img/hardRock_rock_villa.jpg'

import hidway from '../../assats/img/hidway-maldives.jpg'
import jt from '../../assats/img/jt-mal.jpg'
import { Link } from "react-router-dom";


export default function Offers() {

    const [showPopup, setShowPopup] = useState(false);

        const handleButtonClick = () => {
            setShowPopup(true);
        }

        const handlePopupClose = () => {
            setShowPopup(false);
        }



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

    <section className=' offer_header'>
        <div className='container'>
        <div className='row'>
            <div className='col-12'>
            <motion.h1 className='mb-2 text-white text-center'>Exclusive Offers, Maldives</motion.h1>
            <h4 className='text-center text-white'>Explore and inquire about the travel market’s best offers and packages for your next trip to the Maldives. Discover limited deals and discounts that are sure to perk up your honeymoon or next family holiday!</h4>
            </div>
        </div>
        </div>
      
    </section>

    
    <section className='container'>
        <div className='row offer-bg'>   
            <div className='col-6 mob-100'>
            
            <img className='mb-4' src={siyama}  width="100%"/>
            {/* <p>Is a luxury resort located on the pristine island of Sirru Fen Fushi in the Maldives. The resort is situated on a 600-hectare private island, surrounded by crystal clear waters, white sandy beaches, and lush greenery. Also a luxurious and secluded retreat that offers guests a unique and unforgettable experience.</p> */}
            
            </div>
            <div className='col-6 mob-100'>
            
            <p className='mt-3'><em>Sun Siyam Olhuveli</em></p>
            <h3 className='mb-3'>Amazing beach offer stay in the Maldives, with your private beach pool villa    <span>| TOTAL PACKAGE COST AED2,030</span></h3>
            
                                <p>
                                    <ul>
                                        <li>
                                             3 nights package on full board basis at grand beach pool villa </li>
                                        <li>Complimentary one time lucky dolphin cruise for 2 adults  </li>
                                        <li>complimentary one time shisha once during the stay </li>
                                        <li>complimentary floating breakfast </li> 
                                        <li>*valid till 30th sep BOOK BEFORE 31ST AUG </li>
                                    </ul>
                                </p>
                              
                              
                                <button onClick={handleButtonClick} className='bg-dark'>Get This offer</button>
                               {showPopup && (
                                <div className="popup-overlay">
                                <div className="popup">
                                    
                                   <div className='row'>
                                    <div className='col-6 mob-100 mobile-dispaly-none'>     
            <img src={formsideimg}  width="100%"/></div>
                                    <div className='col-6 mob-100'>
                                    <p className='pointer-cs ' onClick={handlePopupClose}><svg width="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#987252" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg></p>
                                    <h5>Don't Miss Out on These Limited-Time Deals!</h5>
                                        <Newsform/> </div>
                                   </div>
                                </div>
                                </div>
                            )}
            </div>
        </div>
    </section>



    <section className='container'>
        <div className='row offer-bg'>   
            <div className='col-6 mob-100'>
            
            <img className='mb-4' src={ananthara}  width="100%"/>
            {/* <p>Is a luxury resort located on the pristine island of Sirru Fen Fushi in the Maldives. The resort is situated on a 600-hectare private island, surrounded by crystal clear waters, white sandy beaches, and lush greenery. Also a luxurious and secluded retreat that offers guests a unique and unforgettable experience.</p> */}
            
            </div>
            <div className='col-6 mob-100'>
            
            <p className='mt-3'><em>Anantara Dihgu</em></p>
            <h3 className='mb-3'>Exclusive package offer for 3 nights at a sunrise beach villa , return speed boat and meals on half board basis  <span>| Package cost for 3 nights stay between July – Sep USD2,060 </span></h3>
            
                                <p>
                                    <ul>
                                        <li>
                                            Complimentary one time 45 minutes spa for 2 adults for Sunrise Beach Villa, Sunset Beach Villa, Sunrise Over Water Suite, Sunset Over Water Suite. </li>
                                        <li>Daily group wellness activities </li>
                                        <li>Yoga and Meditation Experiences    </li>
                                        <li>Fitness Experiences</li>
                                        <li>Holistic Experiences</li>
                                        <li>One time 30 minutes outdoor photoshoot (1 free printed photo will be provided – No soft copy) </li>
                                        
                                        
                                    
                                    </ul>
                                </p>
                              
                              
                                <button onClick={handleButtonClick} className='bg-dark'>Get This offer</button>
                               {showPopup && (
                                <div className="popup-overlay">
                                <div className="popup">
                                    
                                   <div className='row'>
                                    <div className='col-6 mob-100 mobile-dispaly-none'>     
            <img src={formsideimg}  width="100%"/></div>
                                    <div className='col-6 mob-100'>
                                    <p className='pointer-cs ' onClick={handlePopupClose}><svg width="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#987252" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg></p>
                                    <h5>Don't Miss Out on These Limited-Time Deals!</h5>
                                        <Newsform/> </div>
                                   </div>
                                </div>
                                </div>
                            )}
            </div>
        </div>
    </section>


    
    <section className='container'>
        <div className='row offer-bg'>   
            <div className='col-6 mob-100'>
            
            <img className='mb-4' src={sheraton}  width="100%"/>
            {/* <p>Is a luxury resort located on the pristine island of Sirru Fen Fushi in the Maldives. The resort is situated on a 600-hectare private island, surrounded by crystal clear waters, white sandy beaches, and lush greenery. Also a luxurious and secluded retreat that offers guests a unique and unforgettable experience.</p> */}
            
            </div>
            <div className='col-6 mob-100'>
            
            <p className='mt-3'><em>Sheraton Maldives</em></p>
            <h3 className='mb-3'>Honeymoon packages at Sheraton Maldives for 3 nights on full board basis <span>| USD 2,283 for two adults on beach front cottage</span></h3>
            
                                <p>
                                    <ul>
                                        <li>Honeymoon Benefits - Minimum Stay 03 Nights</li>
                                        <li>Welcome bottle of sparkling wine and chocolates</li>
                                        <li>Romantic Bed Decorations set up once during stay</li>
                                        <li>One time complimentary Cocktail Reception at the Honeymoon Garden (Weather permitting. No substitute in case of bad weather)</li>
                                        
                                        
                                    
                                    </ul>
                                </p>
                              
                              
                                <button onClick={handleButtonClick} className='bg-dark'>Get This offer</button>
                               {showPopup && (
                                <div className="popup-overlay">
                                <div className="popup">
                                    
                                   <div className='row'>
                                    <div className='col-6 mob-100 mobile-dispaly-none'>     
            <img src={formsideimg}  width="100%"/></div>
                                    <div className='col-6 mob-100'>
                                    <p className='pointer-cs ' onClick={handlePopupClose}><svg width="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#987252" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg></p>
                                    <h5>Don't Miss Out on These Limited-Time Deals!</h5>
                                        <Newsform/> </div>
                                   </div>
                                </div>
                                </div>
                            )}
            </div>
        </div>
    </section>

    <section className='container'>
        <div className='row offer-bg'>   
            <div className='col-6 mob-100'>
            
            <img className='mb-4' src={kandima}  width="100%"/>
            {/* <p>Is a luxury resort located on the pristine island of Sirru Fen Fushi in the Maldives. The resort is situated on a 600-hectare private island, surrounded by crystal clear waters, white sandy beaches, and lush greenery. Also a luxurious and secluded retreat that offers guests a unique and unforgettable experience.</p> */}
            
            </div>
            <div className='col-6 mob-100'>
            
            <p className='mt-3'><em>Maldives resort deals for Kandima Resort</em></p>
            <h3 className='mb-3'>Book before the 30 th June 2023 and travel between 01 June to 30 th September <span>| Just for USD 2,800 for two adults on Ocean Pool Villa</span></h3>
            
                            <p>4 nights package on Half board basis</p>
                            <p>Value additions</p>
                                <p>
                                    <ul>
                                        <li>Meals on half board basis</li>
                                        <li>Return domestic transfers</li>
                                        <li>One time dolphin quest per person per stay</li>
                                        <li>30-minute photo shoot session with 01 printed photo (6x8) per room per stay</li>
                                        <li>Group movie night under the stars</li>
                                        
                                    
                                    </ul>
                                </p>
                              
                                <p className='mt-1'><em>*note that rooms are subject to availability at the time of the booking <br/>*airfares may vary according to the country of origin</em></p>
                                <button onClick={handleButtonClick} className='bg-dark'>Get This offer</button>
                               {showPopup && (
                                <div className="popup-overlay">
                                <div className="popup">
                                    
                                   <div className='row'>
                                    <div className='col-6 mob-100 mobile-dispaly-none'>     
            <img src={formsideimg}  width="100%"/></div>
                                    <div className='col-6 mob-100'>
                                    <p className='pointer-cs ' onClick={handlePopupClose}><svg width="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#987252" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg></p>
                                    <h5>Don't Miss Out on These Limited-Time Deals!</h5>
                                        <Newsform/> </div>
                                   </div>
                                </div>
                                </div>
                            )}
            </div>
        </div>
    </section>

    <section className='container'>
        <div className='row offer-bg'>   
            <div className='col-6 mob-100'>
            
            <img className='mb-4' src={fmount}  width="100%"/>
            {/* <p>Is a luxury resort located on the pristine island of Sirru Fen Fushi in the Maldives. The resort is situated on a 600-hectare private island, surrounded by crystal clear waters, white sandy beaches, and lush greenery. Also a luxurious and secluded retreat that offers guests a unique and unforgettable experience.</p> */}
            
            </div>
            <div className='col-6 mob-100'>
            
            <p className='mt-3'><em>Fairmont Maldives - Sirru Fen Fushi</em></p>
            <h3 className='mb-3'>Exclusive 3 nights package with 25% Discount applied <span>| Starting from  USD 5500</span></h3>
            
                            <p>Stay Period: 01st March 2023 to 20th December 2023</p>
                            
                                <p>
                                    <ul>
                                        <li>Full board meal plan (breakfast , lunch and Dinner )</li>
                                        <li>3 Nights offer with complimentary Sea plane  transfers</li>
                                        <li>Return International air tickets for 2 adults  from Dubai.</li>
                                        <li>3 nights stay at beach sunrise pool Villa </li>
                                        <li>Complimentary 3-course dinner at Azure from a la carte menu.</li>
                                        <li>45-minutes Coralarium orientation once during stay </li>
                                        <li>Complementary Use of snorkeling equipment</li>
                                    
                                    </ul>
                                </p>
                              
                                <p className='mt-1'><em>*note that rooms are subject to availability at the time of the booking <br/>*airfares may vary according to the country of origin</em></p>
                                <button onClick={handleButtonClick} className='bg-dark'>Get This offer</button>
                               {showPopup && (
                                <div className="popup-overlay">
                                <div className="popup">
                                    
                                   <div className='row'>
                                    <div className='col-6 mob-100 mobile-dispaly-none'>     
            <img src={formsideimg}  width="100%"/></div>
                                    <div className='col-6 mob-100'>
                                    <p className='pointer-cs ' onClick={handlePopupClose}><svg width="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#987252" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg></p>
                                    <h5>Don't Miss Out on These Limited-Time Deals!</h5>
                                        <Newsform/> </div>
                                   </div>
                                </div>
                                </div>
                            )}
            </div>
        </div>
    </section>

    <section className='container'>
        <div className='row offer-bg'>   
            <div className='col-6 mob-100'>
            
            <img className='mb-4' src={hardroc}  width="100%"/>
            {/* <p>Is a luxury resort located on the pristine island of Sirru Fen Fushi in the Maldives. The resort is situated on a 600-hectare private island, surrounded by crystal clear waters, white sandy beaches, and lush greenery. Also a luxurious and secluded retreat that offers guests a unique and unforgettable experience.</p> */}
            
            </div>
            <div className='col-6 mob-100'>
            
            <p className='mt-3'><em>Hard rock Maldives </em></p>
            <h3 className='mb-3'>Great Maldives beach offers on 3 nights on half board basis BOOK now to receive this limited
offer.| USD 2,170 for two adults</h3>
            
                            <p>MORE TO OFFER ON COMPLIMENTARY: </p>
                            
                                <p>
                                    <ul>
                                        <li>Sunset Ritual with complimentary drinks, subject to weather condition.</li>
                                        <li>Complimentary use of snorkeling equipment, kayak and pedal boat.</li>
                                        <li>The Sound of Your Stay music amenities - a private 10-track playlist, access to fantastic
Fender guitars, and a Crosley turntable with a curated collection of 10 iconic records.</li>
                                        <li>Complimentary activities available; Play on Air, Land and Water, Hard Rock&#39;s signature
Yoga program ROCK OM®, Brazilian Jiu Jitsu, Self-Defense &amp; Kick Boxing and
introduction to aerial arts classes with our instructors.</li>
                                        
                                    
                                    </ul>
                                </p>
                               

                               <button onClick={handleButtonClick} className='bg-dark'>Get This offer</button>
                               {showPopup && (
                                <div className="popup-overlay">
                                <div className="popup">
                                    
                                   <div className='row'>
                                    <div className='col-6 mob-100 mobile-dispaly-none'>     
            <img src={formsideimg}  width="100%"/></div>
                                    <div className='col-6 mob-100'>
                                    <p className='pointer-cs ' onClick={handlePopupClose}><svg width="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#987252" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg></p>
                                    <h5>Don't Miss Out on These Limited-Time Deals!</h5>
                                        <Newsform/> </div>
                                   </div>
                                </div>
                                </div>
                            )}
            </div>
        </div>
    </section>

    <section className='container'>
        <div className='row offer-bg'>   
            <div className='col-6 mob-100'>
            
            <img src={bolpushi}  width="100%"/>
            {/* <p>Is a luxury resort located on the pristine island of Sirru Fen Fushi in the Maldives. The resort is situated on a 600-hectare private island, surrounded by crystal clear waters, white sandy beaches, and lush greenery. Also a luxurious and secluded retreat that offers guests a unique and unforgettable experience.</p> */}
            
            </div>
            <div className='col-6 mob-100'>
            
            <p className='mt-3'><em>Ozen Reserve bolifushi </em></p>
            <h3 className='mb-3'>Stay 4 Nights on All-Inclusive Meal Plan (unlimited food and drink throughout stay) 
                                Book now and receive a 10% discount with:</h3>
            
                                <p>This one-of-a-kind, bespoke, and indulgent vacation plan is exclusive to Ozen Reserve Bolifushi. Its privileges encompass inspiring fine dining, premium beverages, and exclusive experiences, blended seamlessly with your stay for a lavish holiday experience.</p>
                            
                                <p><ul>
                                        <li>Unlimited All-Inclusive Dining</li>
                                        <li>Extensive Beverage Plans</li>
                                        <li>Excursions & Watersports</li>
                                        <li>Complimentary Spa services </li>
                                    
                                    </ul>
                                </p>
                              
                                <p className='mt-1'><em>*note that rooms are subject to availability at the time of the booking <br/>*airfares may vary according to the country of origin</em></p>
                                <button onClick={handleButtonClick} className='bg-dark'>Get This offer</button>
                               {showPopup && (
                                <div className="popup-overlay">
                                <div className="popup">
                                    
                                   <div className='row'>
                                    <div className='col-6 mob-100 mobile-dispaly-none'>     
            <img src={formsideimg}  width="100%"/></div>
                                    <div className='col-6 mob-100'>
                                    <p className='pointer-cs ' onClick={handlePopupClose}><svg width="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#987252" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg></p>
                                    <h5>Don't Miss Out on These Limited-Time Deals!</h5>
                                        <Newsform/> </div>
                                   </div>
                                </div>
                                </div>
                            )}
            </div>
        </div>
    </section>

    <section className='container'>
        <div className='row offer-bg'>   
            <div className='col-6 mob-100'>
            
            <img src={hidway}  width="100%"/>
          
         
            </div>
            <div className='col-6 mob-100'>
            <p className='mt-3'><em>Hideway Beach Resort and Spa </em></p>
            <h3>3 Nights offer with complimentary Domestic flight transfers </h3>
            <p>A signature experience awaits at the signature collection with an elevated level of luxury where space meets privacy coupled with grandiose curated experiences. </p>
            
                          
                            
                                <p><ul>
                                <li>Book now and receive </li>
                                     
                                        <li>Complimentary Half Board Meal Plan (Breakfast and Dinner) </li>
                                        <li>A free 60 minutes sunset (or) sunrise yoga session </li>
                                        <li>Complimentary Cinema under the star experience </li>
                                        <li>One- time sunset Dolphin safari (90 minutes)</li>
                                        <li>2 children below 11 .99 years stay for free while staying as per meals plan</li>
                                    
                                    </ul>
                                </p>
                                <p className='mt-1'><em>* This offer is open to Middle East and Turkey Passport holders</em></p>

                                <button onClick={handleButtonClick} className='bg-dark'>Get This offer</button>
                               {showPopup && (
                                <div className="popup-overlay">
                                <div className="popup">
                                    
                                   <div className='row'>
                                    <div className='col-6 mob-100 mobile-dispaly-none'>     
            <img src={formsideimg}  width="100%"/></div>
                                    <div className='col-6 mob-100'>
                                    <p className='pointer-cs ' onClick={handlePopupClose}><svg width="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#987252" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg></p>
                                    <h5>Don't Miss Out on These Limited-Time Deals!</h5>
                                        <Newsform/> </div>
                                   </div>
                                </div>
                                </div>
                            )}
            </div>
        </div>
    </section>




    <section className='container'>
        <div className='row offer-bg'>   
            <div className='col-6 mob-100'>
            
            <img src={jt}  width="100%"/>
          
        
            </div>
            <div className='col-6 mob-100'>
            <p className='mt-3'><em>W Marriott  </em></p>
            <h3>Stay 4 nights on Full board Meal Plan (Breakfast, Lunch and Dinner) and receive a 20% discount on your whole stay </h3>
            <p>Edging the azure waters of Shaviyani Atoll, JW Marriott Maldives Resort & Spa is a sanctuary of scenic luxury.</p>
            
            <p className='mt-2'>Book before February 28, 2023 and receive:</p>      
                            
                                <p><ul>
                                <li>Villa upgrade to next level or higher subject to availability</li>
                                        <li>Welcome amenity – a bottle of wine with Maldivian sweets platter</li>
                                        <li>Complimentary non-motorized water sports equipment only</li>
                                        <li>Complimentary snorkeling gears (fins & masks), which your thakuru will assist in picking-up from the Dive center </li>
                                        <li>Butler service</li>
                                        <li>Complimentary wifi in villas & all public areas</li>
                                        <li>Complimentary 30 mins photo-session with 1 picture to take home</li>
                                        <li>Complimentary daily turn down amenity</li>
                                    
                                    </ul>
                                </p>
                              

                                <button onClick={handleButtonClick} className='bg-dark'>Get This offer</button>
                               {showPopup && (
                                <div className="popup-overlay">
                                <div className="popup">
                                    
                                   <div className='row'>
                                    <div className='col-6 mob-100 mobile-dispaly-none'>     
            <img src={formsideimg}  width="100%"/></div>
                                    <div className='col-6 mob-100'>
                                    <p className='pointer-cs ' onClick={handlePopupClose}><svg width="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#987252" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg></p>
                                    <h5>Don't Miss Out on These Limited-Time Deals!</h5>
                                        <Newsform/> </div>
                                   </div>
                                </div>
                                </div>
                            )}
            </div>
        </div>
    </section>

       

          

      

         

        <Parallax className='custom_space' bgImage={footerimg} bgImageAlt="the cat" strength={200}>
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
