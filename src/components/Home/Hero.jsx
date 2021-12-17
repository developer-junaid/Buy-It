import React from "react"

// Typical
import Typical from "react-typical"

// Image
import soccerSVG from "../../../static/soccer.svg"

// Link
import { Link } from "gatsby"

export const Hero = () => {
  return (
    <div className="md:flex mt-20">
      <div className="md:w-2/5 flex flex-col justify-center items-center">
        <h2
          className="
              font-serif
              text-5xl text-gray-600
              mb-4
              font-medium

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
              leading-loose
              text-center
              text-xl
              md:text-left md:self-start
              hidden md:block
            "
        >
          The leading online marketplace for shoes
        </p>
        <p
          className="
              uppercase
              text-gray-600
              tracking-wider
              text-center
              text-2xl
              md:text-left md:self-start
            "
        >
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={["WE DELIVER", 1200, "YOU LOVE", 1200]}
          />
        </p>

        <Link
          to="/products"
          className="
              bg-gradient-to-r
              from-gray-800
              to-blue-400
              relative
              rounded-md
              py-4
              px-8
               overflow-hidden
              text-gray-50
              uppercase
              text-xl
              md:self-start
              my-5
              mt-7
              group
            "
        >
          <span className="absolute w-64 h-48 mt-16 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-linear duration-500 bg-gray-800 left-0 top-0"></span>

          <span className="relative">Shop Now</span>
        </Link>
      </div>

      <div className="md:w-3/5 mt-7">
        <img src={soccerSVG} alt="purchase" />
      </div>
    </div>
  )
}
