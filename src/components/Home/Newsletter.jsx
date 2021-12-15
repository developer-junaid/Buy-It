import React, { useState } from "react"

// Sweetalerts
import Swal from "sweetalert2"

export const Newsletter = () => {
  const [email, setEmail] = useState("")

  const handleChange = event => {
    setEmail(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (email === "") {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please enter email",
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Subscribed to newsletter",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setEmail("")
      })
    }
  }

  return (
    <div className="rounded-lg shadow-lg my-20 flex">
      <div
        className="
            lg:w-3/5
            w-full
            bg-gradient-to-r
            from-gray-600
            to-blue-900
            lg:from-gray-900 lg:via-blue-500 lg:to-transparent
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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
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
              value={email}
              required
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 rounded-lg w-full py-3"
            >
              Subscribe
            </button>
          </form>
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
