import React from "react";
import Link from "../elements/Link";

function KeyPointCard({ src, title, desc }) {
  return (
    <div>
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={src}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 ">{desc}</p>
          <Link linkText={"Read more"} />
        </div>
      </a>
    </div>
  );
}

export default KeyPointCard;
