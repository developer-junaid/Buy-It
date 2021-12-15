import React from "react"

// Link
import { Link } from "gatsby"
import { CartIcon } from "utils/Icons"

export const PaymentSuccess = () => {
  return (
    <div className="flex flex-col py-10 pt-20">
      <div className="flex flex-col justify-center text-center">
        <p className="text-lg uppercase text-blue-600 font-medium">
          Thank you!
        </p>
        <p className="text-5xl font-extrabold leading-tight tracking-tight">
          It's on the way!
        </p>
        <p className="text-lg text-gray-500 mt-1">
          Your order #14023425 has shipped and will be with you soon.
        </p>

        <p className="mt-6 leading-loose font-medium">Tracking number</p>
        <p className="text-blue-600 font-medium">51548394822291842931</p>
      </div>
      <hr className="my-8" />

      <div className="py-6 flex flex-col justify-center items-center text-center  w-full">
        <div className="py-5  w-full large:w-1/2 flex flex-col items-center">
          <p className="font-medium mb-4">Payment method</p>
          <p className="text-md text-gray-500 w-2/5">Stripe payment</p>
        </div>
        <div className="py-5  w-full lg:w-1/2 flex flex-col items-center">
          <p className="font-medium mb-4">Shipping method</p>
          <p className="text-md text-gray-500 w-2/5">
            Leopards <br /> Takes up to 3 working days
          </p>
        </div>
      </div>

      <Link
        to="/"
        className="mt-10 mx-auto w-full sm:w-64 bg-gray-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <CartIcon />
        Back to shopping
      </Link>
    </div>
  )
}
