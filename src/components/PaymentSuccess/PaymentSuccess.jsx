import React from "react"

// Link
import { Link } from "gatsby"
import { OrderProductCard } from "components/OrderProductCard/OrderProductCard"

export const PaymentSuccess = () => {
  return (
    <div className="flex flex-col py-10 pt-20">
      <div>
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
      <OrderProductCard />
      <OrderProductCard />
      <OrderProductCard />
      <div className="flex flex-col w-full">
        <div className="py-6 flex  w-full">
          <div className="py-5  w-1/2 flex flex-col items-left pl-32">
            <p className="font-medium mb-4">Shipping address</p>
            <p className="text-md text-gray-500 w-2/5">
              Kristin Watson 7363 Cynthia Pass Toronto, ON N3Y 4H8
            </p>
          </div>
          <div className="py-5  w-1/2 flex flex-col items-left pl-32">
            <p className="font-medium mb-4">Billing address</p>
            <p className="text-md text-gray-500 w-2/5">
              Kristin Watson 7363 Cynthia Pass Toronto, ON N3Y 4H8
            </p>
          </div>
        </div>
        <hr />
        <div className="py-6 flex  w-full">
          <div className="py-5  w-1/2 flex flex-col items-left pl-32">
            <p className="font-medium mb-4">Payment method</p>
            <p className="text-md text-gray-500 w-2/5">Stripe payment</p>
          </div>
          <div className="py-5  w-1/2 flex flex-col items-left pl-32">
            <p className="font-medium mb-4">Shipping method</p>
            <p className="text-md text-gray-500 w-2/5">
              Leopards <br /> Takes up to 3 working days
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className=" px-32 py-8">
        <p className="text-md font-medium flex justify-between leading-10">
          Subtotal <span className="text-gray-500 mr-8">$36</span>
        </p>
        <p className="text-md font-medium flex justify-between leading-10">
          Shipping <span className="text-gray-500 mr-8">$0</span>{" "}
        </p>
        <p className="text-md font-medium flex justify-between leading-10">
          Total <span className="text-gray-500 mr-8">$23</span>{" "}
        </p>
      </div>
    </div>
  )
}
