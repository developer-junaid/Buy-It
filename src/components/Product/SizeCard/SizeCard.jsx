import React from "react"

export const SizeCard = ({ number }) => {
  return (
    <div
      className="
                border-2 border-gray-300
                text-gray-400
                rounded-md
                text-xs
                py-1
                px-2
                mr-2
              "
    >
      {number}
    </div>
  )
}
