import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { FaClock, FaHotel } from 'react-icons/fa';
import { FaShip } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { AwesomeButton } from 'react-awesome-button';

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

export const IslandCard = ({ image, title, description }) => {

    return (
        // <motion.div
        //   whileHover={{ scale: 1.1 }}
        //   className="bg-white p-4 m-2 rounded shadow-md cursor-pointer"
        // >
        <div
        whileHover={{ scale: 1.1 }}
        className="bg-white m-2 rounded-3xl cursor-pointer"
        >
        <img
            src={image}
            alt={title}
            className="mb-4 rounded-3xl"
            // whileHover={{ scale: 1.08 }}
            // transition={{ duration: 0.3 }}
            loading="lazy"
        />
        <h3 className="text-lg font-bold mb-2" style={zillaSlabBoldStyle}>{title}</h3>
        <p style={zillaSlabStyle}>{description}</p>
        {/* </motion.div> */}
        </div>
    );
};


export const PackageCard = ({ image, days, dayWisePlan, price, rating, href }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-md cursor-pointer" 
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt="Package" className="rounded-t-2xl" loading="lazy" />
      <div className="relative mx-4" style={{ top: '-20px' }}>
        <div className="flex bg-white text-sm text-blue-500 items-center font-bold mb-2 px-4 py-2 rounded shadow-lg">
          <FaClock className='mr-2 text-blue-500'/>
          {days}
          <span className="ml-auto text-sm text-yellow-500">
            {Array.from({ length: rating }, (_, index) => <span key={index}>★</span>)}
          </span>
        </div>
        <div className="">
          <div className="flex flex-row items-center justify-center">
            <FaHotel className="mx-4 w-5 h-5" />
            <IoCarSport className="mx-4 w-5 h-5" />
            <FaShip className="mx-4 w-5 h-5" />
            <FoodBankIcon className="mx-4 w-5 h-5" />
          </div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <span className="text-md font-semibold text-blue-500" style={zillaSlabBoldStyle}>Starts from ₹ {price}</span>
          </div>
          <AwesomeButton type="primary" href={href}>Explore Categories</AwesomeButton>
          
        </div>
      </div>
    </motion.div>
  );
};


export const TestimonialCard = ({ userIcon, feedback, rating, name }) => {
  return (
    <motion.div 
      className="bg-white p-4 lg:p-6 rounded shadow-lg mx-2 my-2 cursor-pointer "
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center mb-2 lg:mb-4">
        <img 
          className="w-16 h-16 rounded-full" 
          src={userIcon} 
          alt="User Icon"
        />
      </div>
      <div className="text-gray-700 mb-2 lg:mb-4 text-center">{feedback}</div>
      <div className="flex flex-col items-center ">
        <div className=" text-sm lg:text-base">{name}</div>
        <div className="text-lg lg:text-2xl text-yellow-500">{Array.from({ length: rating }, (_, index) => <span key={index}>★</span>)}</div>
        
      </div>
    </motion.div>
  );
};

export const QueryCard = ({ question, answer }) => {
  return (
    <div
    className=" m-2 rounded-3xl"
    >
    <h3 className="text-lg font-bold mb-2" style={zillaSlabBoldStyle}>{question}</h3>
    <p className="font-semibold" style={zillaSlabStyle}>{answer}</p>
    {/* </motion.div> */}
    </div>
);
}

// export const CategoryCard = ({ image, days, dayWisePlan, price, rating, href }) => {
//   return (
//     <motion.div
//       className="bg-white rounded-lg shadow-md overflow-hidden p-4"
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="flex items-center">
//         {/* Image on the left */}
//         <div className="w-1/3 pr-4">
//           <img src={image} alt="Package" className="w-full h-full object-cover rounded-md" />
//         </div>
//         {/* Day-wise plan in the middle */}
//         <div className="w-1/3 px-4">
//           <div className="text-md font-bold mb-2">{dayWisePlan}</div>
//           <div className="flex items-center mb-2">
//             <FaClock className="text-blue-500 mr-2" />
//             <span className="text-blue-500">{days}</span>
//           </div>
//           <div className="flex items-center">
//             <FaHotel className="mx-2 w-5 h-5" />
//             <IoCarSport className="mx-2 w-5 h-5" />
//             <FoodBankIcon className="mx-2 w-5 h-5" />
//           </div>
//         </div>
//         {/* Pricing on the right */}
//         <div className="w-1/3 pl-4">
//           <div className="text-xl mb-2" style={zillaSlabBoldStyle}>
//             Starts from ₹ {price}
//           </div>
//           <div className="text-yellow-500">
//             {Array.from({ length: rating }, (_, index) => (
//               <span key={index}>★</span>
//             ))}
//           </div>
//           <div className="mt-4">
//             <AwesomeButton type="primary" href={href}>
//               Explore Categories
//             </AwesomeButton>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const CategoryCard = ({ dayWisePlan, price }) => {

//   return (
//     <motion.div
//       className="bg-teal-100 rounded-lg shadow-md overflow-hidden py-3"
//       whileHover={{ scale: 1.03 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="flex flex-col items-center">
//         {/* Day-wise plan in the middle */}
//         <div className="px-0">
//           <div className="text-md font-bold mb-2" >
//             {dayWisePlan.map((day, index) => (
//               <div key={index} className="flex items-center">
//                 <div className="flex-grow">
//                   {day}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Pricing on the right */}
//         <div className="pl-4">
//           <div className="text-xl mb-2" style={zillaSlabBoldStyle}>
//             ₹ {price}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };



