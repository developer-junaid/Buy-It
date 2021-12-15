import React from "react"

export const ImageGallery = ({
  imageRight,
  imageLeft,
  imageTop,
  imageBottom,
}) => {
  return (
    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img
          src={imageLeft}
          alt={"Alt"}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className=" lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img
            src={imageTop}
            alt={"Alt"}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="hidden lg:block aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img
            src={imageBottom}
            alt={"Alt"}
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
      <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img
          src={imageRight}
          alt={"Alt"}
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  )
}
