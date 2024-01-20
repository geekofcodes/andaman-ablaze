import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Breadcrumbs } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import bgImg from '../assets/images/bg-Image-2.jpg'
import bgImg1 from '../assets/images/wallpaper-4.jpg'

const About = () => {

  const delaGothicStyle = {
    fontFamily: 'Dela Gothic One',
  }

  const zillaSlabStyle = {
    fontFamily: 'Zilla Slab, serif',
    fontWeight: 300,
  }

  const zillaSlabBoldStyle = {
    fontFamily: 'Zilla Slab, serif',
    fontWeight: 700,
  }

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const excitingPackagesCount = '10+'; // Replace with actual count
  const travelDestinationsCount = '15+'; // Replace with actual count
  const happyTravelersCount = '50+'; // Replace with actual count
  return (
    <>
      <Helmet>
        <title>About Andaman Ablaze - Explore Andaman with Us</title>
        {/* ... other head elements */}
      </Helmet>
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Image at the top covering 1/4 of the page */}
        <div className="relative flex-shrink-0 h-1/3 md:h-80">
          <img src={bgImg} alt="About Us" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 md:bottom-18 left-10 md:left-24 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext fontSize="small" className="text-white" />} >
                <a className="text-slate-300" href="/">
                Home
                </a>
                <p className="text-slate-100">About Us</p>
            </Breadcrumbs>
          </div>
        </div>
        <div className="px-10 md:px-40 lg:px-40 py-16 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} 
              style={zillaSlabStyle}
            >
              <h2 className="text-3xl md:text-4xl text-black font-bold mb-4 md:mb-8" style={delaGothicStyle}>Dive Into Our Story!</h2>
              <div className="mb-4 text-justify">
                Andaman Ablaze isn't just another travel service—it's your gateway to the mysteries of
                the Andaman Islands.
                At Andaman Ablaze, we're all about creating unforgettable experiences and making dream
                trips a reality. Our team of Island experts work tirelessly to curate the most
                incredible adventures, tailored just for you. Whether you're a curious wanderer, a
                thrill-seeker, or a devoted beach bum, we've got the perfect package that's customized to
                your preference. So join us, as we embark on the magical journey of a lifetime to explore
                the true gems of Andaman and Nicobar Islands.
              </div>
              {/* <div className="mb-4 text-justify">
                At Shoreline Escape, we're all about creating unforgettable experiences and making dream
                trips a reality. Our team of Island experts work tirelessly to curate the most
                incredible adventures, tailored just for you. Whether you're a curious wanderer, a
                thrill-seeker, or a devoted beach bum, we've got the perfect package that's customized to
                your preference. So join us, as we embark on the magical journey of a lifetime to explore
                the true gems of Andaman and Nicobar Islands.
              </div> */}
              <div className="mb-4 text-justify">
                We guide venturous spirits like you on unforgettable journeys through the shimmering
                aquamarines and vibrant corals of these island gems.
              </div>
              {/* <div className="mb-4 text-justify">
                We guide venturous spirits like you on unforgettable journeys through the shimmering
                aquamarines and vibrant corals of these island gems.
              </div> */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:mr-8 mb-4 md:mb-0">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 text-blue-500">
                    {excitingPackagesCount}
                  </div>
                  <div className="text-xl" style={zillaSlabBoldStyle}>Exciting Packages</div>
                </div>
                <div className="md:mr-8 mb-4 md:mb-0">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 text-green-500">
                    {travelDestinationsCount}
                  </div>
                  <div className="text-xl" style={zillaSlabBoldStyle}>Travel Destinations</div>
                </div>
                <div className="mb-4">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 text-yellow-500">
                    {happyTravelersCount}
                  </div>
                  <div className="text-xl" style={zillaSlabBoldStyle}>Happy Travelers</div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} 
            className="w-full md:w-1/2"
          >
            <img
              src={bgImg1}
              alt="About motion.section"
              className="w-full rounded-lg shadow-md flex flex-start"
            />
          </motion.div>
        </div>

        
      </section>
    </>
  );
};

export default About;



