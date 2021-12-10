import React from "react"

export const DeliveryInstructions = () => {
  return (
    <>
      <div class="p-4 mt-6 bg-gray-100 rounded-full">
        <h1 class="ml-2 font-bold uppercase">Instruction for seller</h1>
      </div>
      <div class="p-4">
        <p class="mb-4 italic">
          If you have some information for the seller you can leave them in the
          box below
        </p>
        <textarea class="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
      </div>
    </>
  )
}
