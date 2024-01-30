import island1Img from '../assets/images/beaches.jpg';
import island2Img from '../assets/images/adventure.jpg';
import island3Img from '../assets/images/snorkeling.jpg';
import island4Img from '../assets/images/relaxation.jpg';
import island5Img from '../assets/images/nature1.jpg';
import island6Img from '../assets/images/memories.jpg';

import pkg1Img from '../assets/images/package1.jpg';
import pkg2Img from '../assets/images/package2.jpg';
import pkg3Img from '../assets/images/package3.jpg';
import pkg4Img from '../assets/images/package4.jpg';
import pkg5Img from '../assets/images/package5.jpg';

import userIcon1 from '../assets/images/user-icons/default-user.png'


export const islandData = [
    {
      image: island1Img,
      title: 'Tropical Beaches',
      description: 'Sink your toes into warm, golden sands as you watch mesmerizing sunsets.',
    },
    {
      image: island2Img,
      title: 'Adventure Tours',
      description: 'Quench your thirst for adenture with thrilling water sports and island excursions.',
    },
    {
      image: island3Img,
      title: 'Snorkeling & Diving',
      description: 'Experience the vibrant marine life through snorkeling and scuba diving.',
    },
    {
      image: island4Img,
      title: 'Relaxation',
      description: 'Unwind in the comforting embrace of nature as you stroll along pristine shores.',
    },
    {
      image: island5Img,
      title: "Nature's Bounty",
      description: "Discover the islands' unique flora and fauna from vibrant corals to lush mangrooves.",
    },
    {
      image: island6Img,
      title: 'Unforgettable Memories',
      description: 'Unplug and create memories that will last you a lifetime with your loved ones.',
    },
  ];

export const packageData = [
    {
      image: pkg1Img,
      days: '3 Nights & 4 Days' ,
      price: '17,605',
      rating: 5,
      href: '#/three-nights-and-four-days'
    },
    {
      image: pkg2Img,
      days: '4 Nights & 5 Days',
      price: '24,565',
      rating: 4,
      href: '#/four-nights-and-five-days'
    },
    {
      image: pkg3Img,
      days: '5 Nights & 6 Days',
      price: '32,615',
      rating: 5,
      href: '#/five-nights-and-six-days'
    },
    {
      image: pkg4Img,
      days: '6 Nights & 7 Days', 
      price: '41,690',
      rating: 4,
      href: '#/six-nights-and-seven-days'
    },
    {
      image: pkg5Img,
      days: '9 Nights & 10 Days',
      price: '72,050',
      rating: 5,
      href: '#/nine-nights-and-ten-days'
    },
  ];

export const testimonialData = [
  {
    id: 1,
    userIcon: userIcon1,
    feedback: 'The experience has been surreal.',
    rating: 5,
    name: 'John',
  },
  {
    id: 2,
    userIcon: userIcon1,
    feedback: 'The packages, travel, stays have been very good and in budget friendly price',
    rating: 5,
    name: 'Sam',
  },
  // {
  //   id: 3,
  //   userIcon: userIcon3,
  //   feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  //   rating: 5,
  //   name: 'John Doe',
  // },
  // {
  //   id: 4,
  //   userIcon: userIcon4,
  //   feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  //   rating: 5,
  //   name: 'John Doe',
  // },
  // {
  //   id: 5,
  //   userIcon: userIcon5,
  //   feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  //   rating: 5,
  //   name: 'John Doe',
  // },
  // {
  //   id: 6,
  //   userIcon: userIcon6,
  //   feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  //   rating: 5,
  //   name: 'John Doe',
  // },
  // Add more testimonial data as needed
];

export const queryData = [
  {
    question: 'What is the best time to visit Andaman?',
    answer: 'The Andamans are a tropical paradise all year round. but the best time to visit is between October and May for the most idyllic weather and ocean conditions.'
  },
  {
    question: 'Are there any travel restrictions?',
    answer: 'Indian citizens can travel freely to the Andamans, while foreign travelers require only a standard tourist visa.'
  },
  {
    question: 'Are the packages suitable for families?',
    answer: 'Yes! Our packages include family friendly activities ensuring everyone has the best time of their lives.'
  },
  {
    question: 'Are kid-friendly options available?',
    answer: 'Absolutely! We offer packages catering to families with kid-friendly activities and accomodations.'
  },
  {
    question: 'What is the best time to visit Andaman?',
    answer: 'The Andamans are a tropical paradise all year round. but the best time to visit is between October and May for the most idyllic weather and ocean conditions.'
  },
  {
    question: 'Do you offer customized packages?',
    answer: 'Yes, we offer tailor-made packages for you to create your dream vacation.'
  },
];
  
