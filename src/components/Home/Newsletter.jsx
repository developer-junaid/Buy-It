import React from "react"

export const Newsletter = () => {
  return (
    <div className="rounded-lg shadow-lg my-20 flex">
      <div
        className="
            lg:w-3/5
            w-full
            bg-gradient-to-r
            from-black
            to-purple-900
            lg:from-black lg:via-purple-900 lg:to-transparent
            rounded-lg
            text-gray-100
            p-12
          "
      >
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-extrabold mb-4">
            Subscribe to get our offers first
          </h3>
          <p className="mb-4 leading-relaxed">
            Want to hear from us when we have new offers? Sign up for our
            newsletter and we'll email you every time we have new sale offers,
          </p>
          <div>
            <input
              type="email"
              name=""
              placeholder="Enter email address"
              className="
                  bg-gray-600
                  text-gray-200
                  placeholder-gray-400
                  px-4
                  py-3
                  w-full
                  rounded-lg
                  focus\:outline-none
                  mb-4
                "
            />
            <button type="submit" className="bg-red-600 rounded-lg w-full py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
        <img
          src="https://github.com/itzpradip/tailwind-eshop-static-html/blob/master/images/subscribe-banner.png?raw=true"
          alt=""
          className="h-96"
        />
      </div>
    </div>
  )
}
