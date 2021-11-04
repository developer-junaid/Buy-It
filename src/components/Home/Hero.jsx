import React from "react"

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
          Welcome to Daraz.pk
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
          Daraz is the leading online marketplace
        </p>
        <a
          href="#"
          className="
              bg-gradient-to-r
              from-red-600
              to-pink-500
              rounded-full
              py-4
              px-8
              text-gray-50
              uppercase
              text-xl
              md:self-start
              my-5
            "
        >
          Shop Now
        </a>
      </div>

      <div className="md:w-3/5 mt-7">
        <img
          src="https://raw.githubusercontent.com/itzpradip/tailwind-eshop-static-html/bc1b37d73730b9e7804e91438246ce2f996cc435/images/hero-img.svg"
          alt="purchase"
        />
      </div>
    </div>
  )
}
