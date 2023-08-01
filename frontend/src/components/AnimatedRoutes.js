import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
//pages
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";

import Partner from "../pages/partners/partner";
import Woldof from '../pages/resort/woldof';
import Privercypolisy from '../pages/footerpage/privercypolisy';
import Tearmandcondition from '../pages/footerpage/tearmandcondition';
import Blogs from '../pages/blogs/bloglisting';
import Blogone from '../pages/blogs/blogone';
import Blogtwo from '../pages/blogs/blogtwo';
import Blogtree from '../pages/blogs/blogtree';
import Offers from '../pages/offers/offers';
import Waldorfastoria from '../pages/resort/woldofastra';
import Gili from '../pages/resort/gililanka';
import Jwmarriot from '../pages/resort/jw';
import Hardrock from '../pages/resort/hardrock';
import Raffles from '../pages/resort/raffles';
import Ozan from '../pages/resort/ozan';
import Joali from '../pages/resort/joali';
import Finolu from '../pages/resort/finolu';
import Hiltan from '../pages/resort/Hilton';
import Wedding from '../pages/home/innerpages/wedding';
import Honeymoon from '../pages/home/innerpages/honeymoon';
import Spa from '../pages/home/innerpages/spa';
import Family from '../pages/home/innerpages/family';
import Allila from '../pages/resort/allila';
import Lily from '../pages/resort/lily';
import Sai from '../pages/resort/sai';
import Login from '../pages/auth/login';



export default function AnimatedRoutes() {
    const location = useLocation();

  return (
    <div>
        <AnimatePresence exitBeforeEnter>
         <Routes location = {location}  key={location.pathname}>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact-us" element={<Contact/>} />
            <Route exact path="/our-partners" element={<Partner/>} />
            <Route exact path="/exclusive-offers" element={<Offers/>} />
            <Route exact path="/login" element={<Login/>} />

            <Route exact  path="/our-partners/patina-maldives" element={<Woldof/>} />
            <Route exact  path="/our-partners/waldorf-astoria" element={<Waldorfastoria/>} />
            <Route exact  path="/our-partners/gili-lankanfushi-maldives" element={<Gili/>} />
            <Route exact  path="/our-partners/jw-marriot-maldives" element={<Jwmarriot/>} />
            <Route exact  path="/our-partners/hard-rock-hotel-maldives" element={<Hardrock/>} />
            <Route exact  path="/our-partners/raffles-maldives" element={<Raffles/>} />
            <Route exact  path="/our-partners/ozen-reserve-bolifushi" element={<Ozan/>} />
            <Route exact  path="/our-partners/joali-maldives" element={<Joali/>} />
            <Route exact  path="/our-partners/finolhu-maldives" element={<Finolu/>} />
            <Route exact  path="/our-partners/hilton-aminigiri" element={<Hiltan/>} />
            <Route exact  path="/our-partners/alila-kothaifaru-maldives" element={<Allila/>} />
            <Route exact  path="/our-partners/lily-beach-maldives" element={<Lily/>} />
            <Route exact  path="/our-partners/saii-lagoon-maldives" element={<Sai/>} />


            <Route exact  path="/privacy-policy" element={<Privercypolisy/>} />
            <Route exact  path="/terms-&-conditions" element={<Tearmandcondition/>} />


            <Route exact  path="/blogs" element={<Blogs/>} />
            <Route exact  path="/blogs/toddlers-teens-and-the-maldives" element={<Blogone/>} />
            <Route exact  path="/blogs/why-travel-to-the-maldives" element={<Blogtwo/>} />
            <Route exact  path="/blogs/experience-the-maldives" element={<Blogtree/>} />


            <Route exact  path="/weddings-and-anniversaries" element={<Wedding/>} />
            <Route exact  path="/honeymoon-and-romantic-stays" element={<Honeymoon/>} />
            <Route exact  path="/spa-and-wellness-retreats" element={<Spa/>} />
            <Route exact  path="/family-getaways" element={<Family/>} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}
