import React, {useEffect} from 'react';
import bgImg from '../assets/images/bg-Image-2.jpg'
import { Helmet } from 'react-helmet';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Breadcrumbs } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

const Contact = () => {
  const bgImageStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const delaGothicStyle = {
    fontFamily: 'Dela Gothic One',
  }

  const zillaSlabStyle = {
    fontFamily: 'Zilla Slab, serif',
    fontWeight: 300,
  }

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const ContactItem = ({ icon, title, details, color }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col items-center"
      >
        {icon({ className: `text-5xl mb-4 ${color}` })}
        <div className="mb-2 font-bold">{title}</div>
        <div>{details}</div>
      </motion.div>
    );
  }; 

  return (
    <>
      <Helmet>
        <title>Contact Andaman Ablaze - Reach Out Today</title>
        {/* ... other head elements */}
      </Helmet>
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Image at the top covering 1/4 of the page */}
        <div className="relative flex-shrink-0 h-1/3 md:h-80">
          <img src={bgImg} alt="About Us" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 md:bottom-18 left-10 md:left-24 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext fontSize="small" className="text-white" />} >
                <a className="text-slate-300" href="/">
                Home
                </a>
                <p className="text-slate-100">Contact Us</p>
            </Breadcrumbs>
          </div>
        </div>
        <div className="px-10 md:px-40 lg:px-40 pt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} 
            className="text-3xl md:text-4xl mb-4 text-black font-bold" 
            style={delaGothicStyle}
          >
            Get In Touch
          </motion.h2>
        </div>
        <div className="px-10 md:px-40 lg:px-40 pb-16 flex flex-col md:flex-row items-center justify-between">          
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0"> 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} 
              className="mb-4 text-black text-justify" 
              style={zillaSlabStyle}
            >
              Looking to swap the office blues for the azure waters of Andaman? You've found your way to the right spot! 
              Shoreline Escape offers tailor-made tours assured to pump adrenaline into your getaway. Just ready your spirit for an absolute beach blast! 
              Eager to explore the mesmerizing Andaman? Keep calm and contact Shoreline Escape! Let your adventurous soul fly high. 
              Connect with us and we'll guide you to your dream journey.
              Exploring the wild, relaxing on pristine beaches, diving into crystal clear waters or bird-watching, whatever it is, we've got answers to all your queries.
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <ContactItem icon={FaMapMarkerAlt} title="Visit Us" details="Port Blair, Andaman and Nicobar Islands" color="text-blue-500" />
            <ContactItem icon={FaPhone} title="Call Us" details="+123 456 7890" color="text-green-500" />
            <ContactItem icon={FaEnvelope} title="Email Us" details="info.andamanablaze@gmail.com" color="text-red-500" />
          </div>        
        </div>


        
      </section>
    </>
  );
};

export default Contact;

