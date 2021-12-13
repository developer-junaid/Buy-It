import React from "react"

// Image
import soccerSVG from "assets/soccer.svg"

export const Hero = () => {
  return (
    <div className="md:flex mt-20">
      <div className="md:w-2/5 flex flex-col justify-center items-center">
        <h2
          className="
              font-serif
              text-5xl text-gray-600
              mb-4
              text-center
              md:text-left md:self-start
            "
        >
          Welcome to Buy-it
        </h2>
        <p
          className="
              uppercase
              text-gray-600
              tracking-wide
              text-center
              md:text-left md:self-start
            "
        >
          We Deliver, You Love
        </p>
        <p
          className="
              uppercase
              text-gray-600
              tracking-wide
              text-center
              md:text-left md:self-start
            "
        >
          Buy-it is the leading online marketplace for shoes
        </p>
        <a
          href="#shop"
          className="
              bg-gradient-to-r
              from-gray-800
              to-blue-400
              relative
              rounded-full
              py-4
              px-8
               overflow-hidden
              text-gray-50
              uppercase
              text-xl
              md:self-start
              my-5
              group
            "
        >
          <span className="absolute w-64 h-48 mt-16 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-linear duration-500 bg-gray-800 left-0 top-0"></span>

          <span className="relative">Shop Now</span>
        </a>
      </div>

      <div className="md:w-3/5 mt-7">
        <img src={soccerSVG} alt="purchase" />
      </div>
    </div>
  )
}
