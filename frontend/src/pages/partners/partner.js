import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../partners/partner.module.css";
import patner from "../../assats/img/jovial_travel_Honeymoon.jpg";
import chevelBlank from "../../assats/img/jovial_travel_patina.jpg";

export default function Partner() {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    // Fetch resorts data from the API
    axios
      .get("http://localhost:8000/api/partners-list")
      .then((response) => {
        setResorts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching resorts data:", error);
      });
  }, []);

  const variants = {
    hidden: { opacity: 0, x: 0 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit"
      className="min-90"
    >
      <Parallax bgImage={patner} bgImageAlt="the cat" strength={50}>
        <section className="h-100vh d-flex align-items-end container">
          <motion.h1 className="mb-5 text-white">Our Partners</motion.h1>
        </section>
      </Parallax>

      <MediaQuery minDeviceWidth={760}>
        <section className="container custom_space_top">
          <div className="row ">
            <div className="col-12 text-center">
              <div>
                <motion.h2 className="mb-4">
                  It’s A Private Affair With Jovial Travels
                </motion.h2>
                <h5>
                  Think of us as an exclusive black book of partners, hotels,
                  residences, private islands and yacht destinations around the{" "}
                  <br />
                  Maldives – to make you feel at home anywhere across all
                  continents.
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
          {resorts.map((resort, index) => (
            <div className="col-4">
              <div className={styles.resort_box}>
                <img 
                src={`http://localhost:8000/uploads/resorts/${resort.image}`}
                />
              </div>

              <h4>{resort.resort_name}</h4>
              <p>{resort.resort_description}{" "}
              </p>
              <Link key={index} to={`/our-partners/${resort.resort_url}`}>
                <button>explore</button>
              </Link>
            </div>
            ))}
          </div>
        </section>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={760}>
        <section
          className={`${styles.resort_list_pdn}  container custom_space_top ... `}
        >
          <div className="row ">
            <div className="col-12 text-center">
              <div>
                <motion.h2 className="mb-4">
                  It’s A Private Affair With Jovial Travels
                </motion.h2>
                <h5>
                  Think of us as an exclusive black book of partners, hotels,
                  residences, private islands and yacht destinations around the
                  Maldives – to make you feel at home anywhere across all
                  continents.
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className={styles.resort_box}>
                <img src={chevelBlank} alt="Picture of the author" />
              </div>

              <h4 className="mt-4">Patina Maldives </h4>
              <p>
                Sophisticated accommodations blend harmoniously with this
                opulent yet rustic property in the Maldives.{" "}
              </p>
              <Link to="/our-partners/patina-maldives">
                <button>explore</button>
              </Link>
            </div>
          </div>
        </section>
      </MediaQuery>
    </motion.div>
  );
}
