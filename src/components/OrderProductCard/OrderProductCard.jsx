import React from "react"

export const OrderProductCard = () => {
  return (
    <div>
      <div className="w-full flex ">
        <div className="w-1/6 h-48 p-4">
          <div
            className="h-full bg-cover md:bg-cover bg-center  bg-no-repeat"
            style={{
              backgroundImage: `url("https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_487,c_limit/6c184f89-6f9e-491f-97ca-a9490f0448a3/air-max-pre-day-womens-shoes-3hpk3B.png")`,
              maxHeight: "290px",
            }}
          ></div>
        </div>
        <div className="w-5/6 pt-4">
          <p className="text-xl font-medium leading-loose">Cold Brew Bottle</p>
          <p className="text-md text-gray-500 leading-relaxed w-4/5">
            This glass bottle comes with a mesh insert for steeping tea or
            cold-brewing coffee. Pour from any angle and remove the top for easy
            cleaning.
          </p>
          <div className="mt-5 flex">
            <p className="font-medium">
              Quantity <span className="text-gray-700 ml-2">1</span>{" "}
            </p>
            <p className="ml-20">
              Price <span className="text-gray-600 ml-2">$32.00</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <hr className="my-6" />
    </div>
  )
}
