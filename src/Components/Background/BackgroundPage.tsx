import React from 'react'

const BackgroundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-16">
    <div className="relative w-full max-w-lg">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-neutral-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      {/* <div className="m-8 relative space-y-4">
      </div> */}
    </div>
  </div>
  )
}

export default BackgroundPage













// import React from 'react';

// const BackgroundPage = () => {
//   return (
//     <div
//       className="min-h-screen flex items-center justify-center"
//       style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
//     >
//       <div className="relative w-full max-w-lg">
//         <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//         <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//         <div className="m-8 relative space-y-4">
//           {/* Add your content here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackgroundPage;
