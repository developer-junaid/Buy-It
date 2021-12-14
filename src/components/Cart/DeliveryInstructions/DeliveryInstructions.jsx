import React from "react"

export const DeliveryInstructions = () => {
  return (
    <>
      <div className="p-4 bg-gray-100 rounded-full">
        <h1 className="ml-2 font-bold uppercase">Shipping and Billing</h1>
      </div>
      <div className="p-4">
        <p className="mb-4 italic">Enter Shipping and Billing address</p>
        <textarea className="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
      </div>
    </>
  )
}
