import React from 'react'
import { motion} from "framer-motion";
export default function Tearmandcondition() {

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
          <section className='container-fluid bg-gray-tone d-flex align-items-end'>
            <div className='container '>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='mb-5'>Terms and Conditions</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className='container mt-5'>
        <div className='row mb-4'>
                    <div className='col-12'>
                        <p>Jovial Travels maintains the www.utravel.ae Website (“Site”). The following are the terms of use
                        that govern the use of the Site (“Terms of Use”). By using the Site you expressly agree to be
                        bound by these Terms of Use and the www.utravel.ae privacy policy and to follow these Terms
                        of Use and all applicable laws and regulations governing the use of the Site. Jovial Travels
                        reserves the right to change these Terms of Use at any time, effective immediately upon posting
                        on the Site. Please check this page of the Site periodically. We will note when there are updates
                        to the Terms of Use at the bottom of the Terms of Use. If you violate these Terms of Use, Jovial
                        Travels may terminate your use of the Site, bar you from future use of the Site, and/or take
                        appropriate legal action against you.</p>
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className='col-12'>
                        <h4 className='mb-4'>Copyright Policy</h4>
                        <p>COMPANY may terminate the privileges of any user who uses this Site to unlawfully transmit
                        copyrighted material without a license, express consent, valid defence or fair use exemption to
                        do so. If you submit information to this Site, you warrant that the information does not infringe
                        the copyrights or other rights of third parties.</p>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-12'>
                        <h4 className='mb-4'>Copyright Policy</h4>
                        <p>COMPANY may terminate the privileges of any user who uses this Site to unlawfully transmit
                        copyrighted material without a license, express consent, valid defence or fair use exemption to
                        do so. If you submit information to this Site, you warrant that the information does not infringe
                        the copyrights or other rights of third parties.</p>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-12'>
                        <h4 className='mb-4'>Disclaimer of Warranty, Limitation of Damages</h4>
                        <p>Jovial Travels makes no warranty or representation of any kind, either express or implied,
                        including but not limited to the warranty of title or non-infringement or implied warranty of
                        merchantability, fitness for a particular purpose, non-infringement or other violation of rights in
                        relation to the availability, accuracy, validity, reliability or content of these pages and/or the site.
                        The company also does not make any representation or warranty regarding the accuracy or
                        reliability of any advice, opinion, statement or other information that is submitted, displayed or
                        uploaded through the site by any user. The company shall not be liable for any direct, indirect,
                        incidental, special or consequential damages, lost profits or for business interruption arising out
                        of the use of or inability to use this site, even if the company has been advised of the possibility
                        of such damages. Some jurisdictions do not allow the exclusion of certain warranties or
                        limitations of liability, so the above limitations or exclusions may not apply to you. The liability
                        of Jovial Travels would in such a case be limited to the greatest extent of liability permitted by
                        law.</p>
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className='col-12'>
                        <h4 className='mb-4'>Indemnity</h4>
                        <p>You agree to indemnify and hold Jovial Travels, its subsidiaries, affiliates, officers, agents and
                        other partners and employees, harmless from any loss, liability, claim or demand, including
                        reasonable attorneys’ fees, made by any third party due to or arising out of or relating to your use
                        of the Site, including also your use of the Site to provide a link to another site or to upload
                        content or other information to the Site, or your breach of the Terms of Use.</p>
                    </div>
                </div>
        </section>

    </motion.div>
  )
}
