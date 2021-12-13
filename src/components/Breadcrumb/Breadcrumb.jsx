import React from "react"

// Link
import { Link } from "gatsby"

// Icons
import { BackslashIcon } from "utils/Icons"

export const Breadcrumb = ({ category, productName, id }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <li>
          <div className="flex items-center">
            <Link
              to={`/products`}
              className="mr-2 text-sm font-medium text-gray-900"
            >
              {category}
            </Link>
            <BackslashIcon />
          </div>
        </li>
        <li className="text-sm">
          <Link
            to={`/product/${id}`}
            aria-current="page"
            className="font-medium text-gray-500 hover:text-gray-600"
          >
            {productName}
          </Link>
        </li>
      </ol>
    </nav>
  )
}
