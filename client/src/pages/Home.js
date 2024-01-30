import React from 'react';
import bgImg from '../assets/images/wallpaper-14.jpg';
import bgImg1 from '../assets/images/bg-Image-2.jpg'
import bgImg2 from '../assets/images/bg-Image-3.jpg'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { GoRocket, GoPerson } from "react-icons/go";
import { FaUsers, FaCheckCircle, FaCogs, FaSmile } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { IslandCard, PackageCard, TestimonialCard, QueryCard } from '../components/Cards';
import { islandData, packageData, testimonialData, queryData} from '../components/CardData';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};


const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const bgImageStyle = {
        backgroundImage: `url(${bgImg1})`,
    };

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
    return (
        <React.Fragment>
            <section
                className="h-screen flex items-center bg-no-repeat bg-center bg-cover md:bg-fixed welcome text-white"
                style={bgImageStyle}
                id="home"
            >
                <div className="text-center mx-8 lg:mx-auto max-w-2xl">
                <div>
                    <div className="text-4xl md:text-6xl font-bold mb-4" style={delaGothicStyle} >Welcome to Andaman Ablaze</div>
                    <div className="text-lg md:text-xl mb-6 font-bold" style={zillaSlabBoldStyle} >
                    Dive into the mystical world of Andaman and Nicobar Islands with us. We provide curated travel packages that offer unlimited adventure, relaxation, and fun all in one place. Experience the tropical getaway of your dreams!
                    </div>
                    <div className="flex justify-center space-x-4">
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore Packages</button> */}
                    {/* <AwesomeButton type="primary" href='#/#packages'><GoRocket />&nbsp;Explore Packages</AwesomeButton> */}
                    {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Contact Us</button> */}
                    <AwesomeButton type="secondary" href='#/contact-us'><GoPerson />&nbsp;Contact Us</AwesomeButton>
                    </div>
                </div>
                </div>
            </section>

            {/* Tagline */}
            <section
                className="px-4 md:px-24 flex flex-col md:flex-row md:justify-around bg-teal-50"
            >
                <div className="mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-5 my-20">
                <div 
                    className="text-lg md:text-4xl px-8" 
                    style={delaGothicStyle}
                >
                    Jaha Waves Milte Hai Vibes Se!
                </div>
                <div 
                    className="text-base md:text-xl mx-0 md:mx-10 my-4 md:my-0 w-full md:w-2/4 text-justify" 
                    style={zillaSlabStyle}
                >
                    Discover the enchanting charm of Andaman and Nicobar Islands with Andaman Ablaze, where the vibrant waves play and dance with the rhythm of your heart. Dive into the crystal-blue water or bask in breathtaking sunsets.
                </div>
                </div>
            </section>

            {/* Adventures */}
            <section
                className="px-10 md:px-24 lg:px-24 py-16"
            >
                <h2 className="text-4xl text-black font-bold mb-8 text-center" style={delaGothicStyle}>Island Adventures</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {islandData.map((island, index) => (
                    <IslandCard
                    key={index}
                    image={island.image}
                    title={island.title}
                    description={island.description}
                    />
                ))}
                </div>
            </section>

            {/* Packages */}

            <section 
            className="px-10 md:px-24 lg:px-24 pb-16 bg-white" id='packages'
            >
                <h2 className="text-4xl text-black font-bold mb-8 text-center" style={delaGothicStyle}>Stellar Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packageData.map((packageItem, index) => (
                    <PackageCard
                        key={index}
                        image={packageItem.image}
                        days={packageItem.days}
                        dayWisePlan={packageItem.dayWisePlan}
                        price={packageItem.price}
                        rating={packageItem.rating}
                        href={packageItem.href}
                    />
                    ))}
                </div>
            </section>


            <section className="h-96 px-10 md:px-40 mb-16 bg-white">
                <div className="h-96 flex flex-col md:flex-row rounded-md overflow-hidden shadow-lg bg-gradient-to-b from-blue-500 to-blue-300" style={{backgroundColor: '#4895ef'}}>

                {/* Left side (for text elements) */}
                <div className="flex-1 p-4 md:p-6 text-white flex flex-col justify-center items-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 my-2 text-slate-300 text-center" style={delaGothicStyle}>Early Bird Offer</h2>
                    <div className="text-base mb-6 md:text-3xl text-center" style={delaGothicStyle}>
                    Get upto 30% Discount!
                    </div>
                    <AwesomeButton className="mt-4" type="secondary" href='#/contact-us'>
                    Contact Us
                    </AwesomeButton>
                </div>

                {/* Right side (for image) */}
                <div className="flex-1 h-40 md:h-full">
                    <img
                    className="object-cover w-full h-full rounded-b-md lg:rounded-r-md shadow-lg"
                    src={bgImg}
                    alt="Your Alt Text"
                    />
                </div>

                </div>
            </section>


            <section className="h-screen">
                <div className="h-screen flex items-center bg-no-repeat bg-center bg-cover welcome text-white relative">
                <img src={bgImg2} alt="Package" className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <p className="text-xl lg:text-4xl font-semibold" style={delaGothicStyle}>
                    Not all those who wander are lost. - J.R.R Tolkien
                    </p>
                </div>
                </div>
            </section>

            <section
                className="px-10 lg:px-40 py-16 bg-white" id='packages'
            >
                <h2 
                className="text-4xl text-black font-bold mb-8 text-center" 
                style={delaGothicStyle}
                >Why Choose Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                    <FaUsers 
                    className="text-4xl mb-4 text-blue-500"
                    variants={textVariants} 
                    />
                    <h3 
                    className="text-xl font-semibold mb-2 text-blue-500"
                    variants={textVariants}
                    >Experienced Team</h3>
                    <p 
                    className="text-gray-700"
                    variants={textVariants}
                    >
                    Our team consists of experienced professionals dedicated to providing top-notch service and expertise.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaCheckCircle className="text-4xl mb-4 text-blue-500" />
                    <h3 className="text-xl font-semibold mb-2 text-blue-500" >Quality Service</h3>
                    <p className="text-gray-700" >
                    We prioritize quality in every aspect of our service, ensuring a memorable and enjoyable experience for our clients.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaCogs className="text-4xl mb-4 text-blue-500" />
                    <h3 className="text-xl font-semibold mb-2 text-blue-500" >Customized Packages</h3>
                    <p className="text-gray-700" >
                    Tailored packages to suit your preferences and needs, providing flexibility and personalization.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaSmile className="text-4xl mb-4 text-blue-500" />
                    <h3 className="text-xl font-semibold mb-2 text-blue-500" >Customer Satisfaction</h3>
                    <p className="text-gray-700" >
                    Our commitment is to ensure the satisfaction of our customers by going above and beyond their expectations.
                    </p>
                </div>
                </div>
            </section>


            {/* Testimonial motion.section */}
            <section
                className="px-10 lg:px-24 py-16 text-black"
            >
            <h2 className="text-4xl text-black font-bold mb-8 text-center" style={delaGothicStyle}>Testimonials</h2>
                <div className="max-w-xs mx-auto"> 
                <Slider {...settings}>
                    {testimonialData.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        userIcon={testimonial.userIcon}
                        feedback={testimonial.feedback}
                        rating={testimonial.rating}
                        name={testimonial.name}
                        className="mx-2"
                    />
                    ))}              
                </Slider>          
                </div>
            </section>

            {/* FAQ */}
            <section
                className="px-10 lg:px-40 py-16 bg-white"
            >
                <h2 className="text-4xl text-black font-bold mb-8 text-center" style={delaGothicStyle}>Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
                {queryData.map((query, index) => (
                    <QueryCard
                    key={index}
                    question={query.question}
                    answer={query.answer}
                    />
                ))}
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;
