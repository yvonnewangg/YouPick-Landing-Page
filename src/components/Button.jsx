import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
  )
}

// const Button = () => {
//   return (
//     <Link to="/form"> {/* This link should point to the URL of the form page */}
//       <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//         Want to market your business?
//       </button>
//     </Link>
//   );
// };

export default Button
