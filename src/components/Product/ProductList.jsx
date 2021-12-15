import React from "react"

export const ProductList = ({ children, title }) => {
  return (
    <div className="my-20">
      <div className="flex flex-col">
        <h2 className="text-3xl mb-6 border-l-4 border-blue-500 pl-4">
          {title}
        </h2>
      </div>
      <div
        className="
          grid grid-flow-row grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          2xl:grid-cols-4
          gap-10
        "
      >
        {children}
      </div>
    </div>
  )
}
