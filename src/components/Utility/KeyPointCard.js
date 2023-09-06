
// import React, { useState } from "react";

// function KeyPointCard({ title, subtitle, image, description, keyPoints }) {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg m-4 hover:shadow-xl">
//       <div className="flex flex-col md:flex-row md:min-w-full">
//         <div className="md:w-1/2">
//           <img
//             className="object-cover w-full h-64 md:h-auto rounded-t-lg md:rounded-l-lg"
//             src={image}
//             alt={title}
//           />
//         </div>

//         <div className="md:w-1/2 p-4">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
//             {title}
//           </h5>
//           <p className="mb-2 text-xl font-semibold text-gray-600">{subtitle}</p>
//           <p
//             className={`mb-3 font-normal text-gray-600 ${
//               expanded ? "block" : "line-clamp-5 md:line-clamp-none"
//             }`}
//           >
//             {description}
//           </p>
//           <ul className={`${expanded ? "block" : "hidden"}`}>
//             {!keyPoints[0].title  && keyPoints.map((point, index) => (
//               <li key={index} className="mb-2 text-gray-600 ">
//                 {point}
//               </li>
//             ))}
//           </ul>
//           <button
//             className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
//             onClick={toggleExpand}
//           >
//             {expanded ? "Show less" : "Read more"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default KeyPointCard;



import React, { useState } from "react";

function KeyPointCard({ title, subtitle, image, description, keyPoints }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg m-4 hover:shadow-xl">
      <div className="flex flex-col md:flex-row md:min-w-full">
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-64 md:h-auto rounded-t-lg md:rounded-l-lg"
            src={image}
            alt={title}
          />
        </div>

        <div className="md:w-1/2 p-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
            {title}
          </h5>
          <p className="mb-2 text-xl font-semibold text-gray-600">{subtitle}</p>
          <p
            className={`mb-3 font-normal text-gray-600 ${
              expanded ? "block" : "line-clamp-5 md:line-clamp-none"
            }`}
          >
            {description}
          </p>
          <ul className={`${expanded ? "block" : "hidden"}`}>
            { !keyPoints[0].title  && keyPoints.map((point, index) => (
              <li key={index} className="mb-2 text-gray-600 ">
                {point}
              </li>
            ))}
          </ul>
          <button
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
            onClick={toggleExpand}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default KeyPointCard;

