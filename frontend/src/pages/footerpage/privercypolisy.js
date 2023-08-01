import React from 'react'
import { motion} from "framer-motion";

export default function Privercypolisy() {

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
                        <h2 className='mb-5'>Privacy Policy</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className='container mt-5'>
                <div className='row mb-4'>
                    <div className='col-12'>
                        <p>Jovial Travels (referred to in this Privacy Statement as “Jovial Travels”) respects your privacy and is
                        committed to protecting the personal information that you share with us. This Privacy Statement applies
                        to any Website owned, operated, licensed or controlled by Jovial Travels, (referred to in this Privacy
                        Statement as the “Site”).</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Information Collection</h4>
                        <p>All credit/debit cards details and personally identifiable information will NOT be stored, sold, shared,
                        rented or leased to any third parties.</p>

                        <p>The Website Policies and Terms &amp; Conditions may be changed or updated occasionally to meet the
                        requirements and standards. Therefore the Customers’ are encouraged to frequently visit these sections
                        in order to be updated about the changes on the website. Modifications will be effective on the day they
                        are posted.</p>

                        <p>
                        Some of the advertisements you see on the Site are selected and delivered by third parties, such as ad
                        networks, advertising agencies, advertisers, and audience segment providers. These third parties may
                        collect information about you and your online activities, either on the Site or on other websites, through
                        cookies, web beacons, and other technologies in an effort to understand your interests and deliver to
                        you advertisements that are tailored to your interests. Please remember that we do not have access to,
                        or control over, the information these third parties may collect. The information practices of these third
                        parties are not covered by this privacy policy.
                        </p>
                        <p>
                        When you browse the Site and have not registered for any online service from JOVIAL TRAVELS, you
                        browse anonymously. Personal Information is not collected as you browse. “Personal Information” is
                        defined as any information that identifies or can be used to identify, contact, or locate the person to
                        whom such information pertains, including but not limited to a first and last name; email address; a
                        home, postal or other physical address; or other contact information. When you register for or request
                        any Site service, or when you complete the Guest Information Form online after you have reserved a
                        journey, you may be asked to provide us with Personal Information which is used to enhance your Site
                        experience, expedite communications, allow you to receive electronic/postal mailings JOVIAL TRAVELS,
                        or help facilitate your travel with JOVIAL TRAVELS. Additionally, we may request your destination and
                        travel interests, which allow us to further personalize your Site and email messages.
                        </p>
                        <p>
                        We may also use this Personal Information in aggregate to generate market research reports.
                        Demographic data such as age, gender and interests provided by Google are collected and used to
                        analyze our Site visitors through Google Analytics Demographics and Interest Reporting. Google
                        Remarketing ads are advertised to Site visitors that have visited specific pages on the Site. If you wish to
                        opt-out of either of these, please click here for more details.
                        </p>
                        <p>
                        We may share Personal Information with law enforcement agencies if there is a criminal investigation or
                        suspected illegal activity, to protect the rights and property of JOVIAL TRAVELS; to investigate reports of
                        fraud or of users sending material using a false email address or users sending harassing, threatening, or
                        abusive messages; to protect against misuse or unauthorized use of the Site; or during emergencies,
                        such as when we believe someone’s physical safety is at risk.
                        </p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Use of Information</h4>
                        <p>We may use Personal Information you have given us with any of our group of companies (including our
                        parent companies and any of our subsidiaries or commonly-owned companies) to, for example, provide
                        a service, ensure proper booking, measure consumer interest in our various products and services and
                        inform you about products and services.</p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Registration for Online Products & Services</h4>
                        <p>In order to service you on the Site, we may request that you voluntarily supply us with Personal Information for purposes such as correspondence, Site registration, or participating in Site surveys and/or contests. If you are known to us as a registered user of an JOVIAL TRAVELS Site, we may combine information about your use of Site products or services with certain other online and offline information we have about you as an JOVIAL TRAVELS customer as well as information available from external sources in order to customize your Site experience and present you with relevant online and offline communications.</p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Cookies</h4>
                        <p>If you use the Site, we utilize “cookies” that enable us to monitor traffic patterns and serve you more efficiently if you revisit the Site. A cookie does not identify you personally but it does identify your computer. You can set your browser to notify you when you receive a cookie and this will provide you with an opportunity to either accept or reject it in each instance. There are two types of cookies, session cookies and persistent cookies. Session cookies are temporary cookie files, which are erased when you close your browser. When you restart your browser and go back to the Site, the Site will not recognize you. You will have to log back into your account and select your preferences. A new session cookie will be generated, which will store your browsing information and will again be active until you leave the Site and close your browser.</p>

                        <p>
                        Persistent cookies are just that: persistent. These files stay in one of your browser’s subfolders until you delete them manually or your browser deletes them based on the duration period contained within the persistent cookie’s file. Persistent cookies permit you to visit the Site over and over again and be recognized as a previous visitor and may permit you to access your account without having to log in over and over again. The information saved by the cookies, such as the server your computer is logged onto, your browser type, and whether you entered the Site from a website or email hyperlink, is collected and tracked in aggregate. This information is used for the purpose of measuring response rates to Web page and email hyperlinks as well as overall Site activity and performance.
                        </p>

                        <p>

                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>IP Addresses</h4>
                        <p>JOVIAL TRAVELS collects the IP addresses (the Internet Protocol address, which is a numerical label assigned to each device on the Internet) used to access our Site and the dates and times of access. This information is used to analyze trends, administer the Site, track a user’s movement, and gather broad demographic information for aggregate use. IP addresses are not personally linked to identifiable information.</p>

                        <p>

                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Email</h4>
                        <p>JOVIAL TRAVELS may send you emails based on the Personal Information you provided, both online and through your transactions with us. These emails may come directly from JOVIAL TRAVELS or from a company we have engaged on our behalf. You can opt out of receiving marketing emails from JOVIAL TRAVELS as described below in the section entitled: “Declining Email.” When we send you email, we may use your email address to identify information about your receipt of the email, including whether the communication was opened, how many times it was viewed and whether you clicked on an embedded hyperlink to reach a particular web page. This information is used to measure response rates to email communications as well as enhance your Site experience.
</p>

                        <p>
                        JOVIAL TRAVELS does not provide your Personal Information to our business partners. However, we may send you offers on behalf of our business partners. If you take advantage of an offer from an JOVIAL TRAVELS business partner and become their customer, they may independently wish to send emails to you. In this case, you will need to inform them separately if you wish to decline to receive future emails from them.
                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Declining Email</h4>
                        <p>JOVIAL TRAVELS provides all recipients with a means to decline receiving marketing email. At any time, you may request to discontinue receiving email from JOVIAL TRAVELS by following the opt-out instructions included at the bottom of all JOVIAL TRAVELS marketing email and informing us of your preference. You may also click here to manage your email preferences. If you would like to be removed from all JOVIAL TRAVELS  communications, please call +971 56 6895477 and speak to a Travel Consultant, or email reservations@jovialtravel.com.
</p>

                    
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Forward/Email this Page or Send Electronic Postcards</h4>
                        <p>Site users can choose to request that a Site Web page be sent electronically to another person. When you elect to do this, you will be required to enter your email address and name, the recipient’s email address and name, a subject line, and a text message that will go to the recipient. This will generate a pre-formatted email message that will go from you to the recipient’s mailbox with your message embedded in the text of the email. This feature is completely voluntary and, therefore, you will have a choice whether or not to disclose the required information.
</p>

                    
                    </div>
                </div>

                
                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Contests</h4>
                        <p>When you enter a contest or other promotional feature on the Site, we may ask for your Personal Information so that we can administer the contest and notify winners. Participation in these contests is completely voluntary and you, therefore, have a choice whether or not to disclose the required information. In addition, these contests and promotions will be subject to the rules and requirements that accompany them.
</p>

                    
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Online Surveys</h4>
                        <p>We value opinions and comments from JOVIAL TRAVELS  customers, and you may have the opportunity to give us your feedback through Site surveys. In conducting these surveys, we may ask for your Personal Information so that we can appropriately identify you. Survey and Personal Information collected will be aggregated and used to make improvements to the Site and improve UT JOVIAL TRAVELS  products and services. Participation in these surveys is completely voluntary and you therefore have a choice whether or not to disclose the required information.
</p>

                    
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Children</h4>
                        <p>This Site is not used to knowingly solicit Personal Information from or market to children under the age of 13. This Site is intended for use by persons who are over 18 years of age. Therefore, we request that children under the age of 13 not submit any Personal Information to us through the Site. If we learn that we have inadvertently gathered Personal Information from children under the age of 13, we will promptly remove such information from our records
                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Customer Information</h4>
                        <p>If you would like information about your account, believe that JOVIAL TRAVELS  has not complied with this Privacy Statement with respect to your Personal Information, or you have other related inquiries or concerns, you may write to:
                        </p>
                        <p>
                            <ul>
                                <li>Jovial Travels </li>
                                <li>Attention: Marketing</li>
                                <li>Jumeirah Lakes Towers Cluster M, HDS Tower,</li>
                                <li>Office 2807, P.O Box 487178,</li>
                                <li>Dubai, United Arab Emirates</li>
                                <li>Tel. +971 56 6895477</li>
                                <li>reservations@jovialtravels.com</li>
                            </ul>
                        </p>
                        <p>In your letter, please describe in as much detail as possible the nature of your inquiry or the ways in which you believe that the UTRAVEL DMCC Privacy Policy has not been complied with. UTRAVEL DMCC will investigate your inquiry or concern promptly.</p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Linked Internet Sites</h4>
                        <p>You should be aware that other Internet sites which you visit from this Site may contain privacy
                            provisions that differ from the provisions of our Privacy Statement JOVIAL TRAVELS is not responsible
                            for the privacy practices or content of other such sites. We encourage Site users to be aware when they
                            leave the Site and to read the privacy statements of each and every Website that they visit to determine
                            their privacy practices and whether the site collects personally identifiable information. This Privacy
                            Statement applies solely to information collected by this Site.
                        </p>
                       
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4 className='mb-3'>Security</h4>
                        <p>JOVIAL TRAVELS uses Secure Socket Layers (“SSL”), a reasonable security measure for transferring
                        information to process your orders. The SSL encrypts, or translates, your order information into a highly
                        indecipherable code, which is processed immediately. When you begin the transaction process, you will
                        move into the secure area of our Site. A warning window may pop up to notify you that you are entering
                        this “safe” area. Once you have entered, the page address (“URL”) will change from http to https, to let
                        you know you are in a secure area. You will remain in this secure zone for the entire transaction process.
                        We maintain the data you provide, along with a record of your purchases, in a secure database. We limit
                        the information we provide to outside companies with whom we contract to only what they need to
                        carry out their responsibilities. We also encourage our partners and service providers to adopt and
                        follow stringent consumer privacy policies.
                        </p>
                       
                    </div>
                </div>
        </section>

    </motion.div>
  )
}
