import React from 'react';

function Card() {
  return (
    <div className="p-[3%] w-full h-full">
      <div className="md:mt-[2rem] mt-2 h-[90%]">
        <div className="md:w-[60%] md:h-[3.5rem] h-[2.5rem] hidden md:block">
          <p className="uppercase font-bold font-Inter text-pink2 md:text-[1.8rem]">
            Wills &amp; Lasting Powers of Attorney
          </p>
        </div>
        <div className="h-[100%] md:flex">
          <div className="md:w-[65%] h-[90%] md:overflow-auto">
            <img
              className="float-right p-1 py-3 rounded-lg w-[50%] sm:hidden md:flex"
              src="https://www.infinityrewards.co.uk/assets/PoAttorney.c53c6029.png"
              alt="img"         
            />
            <p className="uppercase font-bold font-Inter text-pink2 text-4xl ">
              Wills &amp; Lasting Powers of Attorney
            </p>
            <p className="text-[0.6rem] md:text-[1.1rem] 2xl:text-[1.2rem] font-Inter text-[#889099]">
              <section>
                The simple, straightforward way to make your wishes known and
                probably one of the most important documents you’ll ever own.
                Not only can it help safeguard your family and all the valuable
                things that you spend your life working so hard for, but it
                will also make sure they go to exactly where you want.
              </section>
              <section>
                Many people die without making a Will; this can cause real
                problems for loved ones because the deceased’s true wishes are
                unknown. If you die without making a Will, the law – rather
                than you – decides who inherits your estate.
              </section>
              There are two types of Lasting Power of Attorney as follows:
              <p className="w-[90%] ml-5">
                <ul className="list-disc">
                  <li className="">Property and Affairs Lasting Power of Attorney – allows your attorney authority to deal with your property and finances, as you specify.</li>
                  <li className="">Personal Welfare Lasting Power of Attorney – allows your attorney to make welfare and health care decisions on your behalf, only when you lack mental capacity to do so yourself.</li>
                  <li className="">Our trusted partners at Honey Pro are on hand to help you. Click the link below for more information.</li>
                </ul>
              </p>
            </p>
            <a
              href="https://review.infinitylawgroup.co.uk/intro?referralcode=infinityreward"
              target="_blank"
            >
              <button className="bg-pink2 md:text-xs text-[0.5rem] p-1 px-6 mt-4 hover:bg-pink3 rounded-[0.2rem] text-white font-Inter">
                Read more
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
