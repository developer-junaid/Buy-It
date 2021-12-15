import React from "react"

// Link
import { Link } from "gatsby"

// Heroicons
import { ArrowRightIcon, CogIcon } from "@heroicons/react/outline"

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-12">
        <CogIcon className="w-24 text-blue-600" />
      </div>
      <p className="text-xl font-medium uppercase tracking-tight leading-relaxed text-blue-600">
        404 Error
      </p>
      <p className="text-6xl font-bold tracking-tighter leading-relaxed">
        Page not found.
      </p>
      <p className="text-gray-500 tracking-wide text-lg">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link to="/" className="flex text-blue-600 text-xl mt-5 font-medium">
        Go back home <ArrowRightIcon className="w-4 ml-2" />{" "}
      </Link>
    </div>
  )
}

export default Error
