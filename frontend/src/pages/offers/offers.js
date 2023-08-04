import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import footerimg from "../../assats/img/honeymoon_form.jpg";
import Form from "../../components/form";
import Newsform from "../../components/Newsform";
import axios from "axios";
import formsideimg from "../../assats/img/jovial_travel_Tailor_Made.jpg";

export default function Offers() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const variants = {
    hidden: { opacity: 0, x: 0 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Fetch offers data from the API
    axios
      .get("https://jovialtravels.com/laravel/backend/public/api/offers-list")
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching offers data:", error);
      });
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="min-90"
    >
      <section className=" offer_header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <motion.h1 className="mb-2 text-white text-center">
                Exclusive Offers, Maldives
              </motion.h1>
              <h4 className="text-center text-white">
                Explore and inquire about the travel market’s best offers and
                packages for your next trip to the Maldives. Discover limited
                deals and discounts that are sure to perk up your honeymoon or
                next family holiday!
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Your list of offers */}
      {offers.map((offer, index) => (
        <section className="container">
          <div className="row offer-bg">
            <div key={index} className="row">
              <div className="col-6 mob-100">
                {offer.image && (
                  <img
                    src={`https://jovialtravels.com/laravel/backend/public/uploads/${offer.image}`}
                    alt={`Offer ${index + 1}`}
                    width="100%"
                  />
                )}
              </div>
              <div className="col-6 mob-100">
                <p>
                  <em>{offer.name}</em>
                </p>
                <h3 className="mb-3">{offer.title}</h3>
                <p>{offer.header_content_1}</p>
                <p>{offer.header_content_2}</p>
                {offer.content_1 && <li>{offer.content_1}</li>}
                {offer.content_2 && <li>{offer.content_2}</li>}
                {offer.content_3 && <li>{offer.content_3}</li>}
                {offer.content_4 && <li>{offer.content_4}</li>}
                {offer.content_5 && <li>{offer.content_5}</li>}
                {offer.content_6 && <li>{offer.content_6}</li>}
                {offer.content_7 && <li>{offer.content_7}</li>}
                {offer.content_8 && <li>{offer.content_8}</li>}
                {offer.content_9 && <li>{offer.content_9}</li>}
                {offer.content_10 && <li>{offer.content_10}</li>}
                <p>{offer.footer_content_1}</p>
                <p>{offer.footer_content_2}</p>
                <p>{offer.footer_content_3}</p>
                <button onClick={handleButtonClick} className="bg-dark">
                  Get This offer
                </button>
                {showPopup && (
                  <div className="popup-overlay">
                    <div className="popup">
                      <div className="row">
                        <div className="col-6 mob-100 mobile-dispaly-none">
                          <img src={formsideimg} width="100%" />
                        </div>
                        <div className="col-6 mob-100">
                          <p className="pointer-cs " onClick={handlePopupClose}>
                            <svg
                              width="30px"
                              viewBox="0 0 1024 1024"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  fill="#987252"
                                  d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                                ></path>
                              </g>
                            </svg>
                          </p>
                          <h5>Don't Miss Out on These Limited-Time Deals!</h5>
                          <Newsform />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Parallax
        className="custom_space"
        bgImage={footerimg}
        bgImageAlt="the cat"
        strength={200}
      >
        <section className="container">
          <div className="row">
            <div className="col-9 form_bg">
              <motion.h2 className="mb-5 ">Enquire Now</motion.h2>
              <Form />
            </div>
          </div>
        </section>
      </Parallax>
    </motion.div>
  );
}
