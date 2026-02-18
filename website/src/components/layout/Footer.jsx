import React from 'react'
import { Apple,Play} from "lucide-react";
const CustomerService = [
  { id: 1, name: "Help Center" },
  { id: 2, name: "How to Buy" },
  { id: 3, name: "Shipping & Delivery" },
  { id: 4, name: "Returns & Refunds" },
  { id: 5, name: "Payment Methods" },
  // { id: 6, name: "Contact Us" },
  // { id: 7, name: "FAQs" },
  // { id: 8, name: "Terms & Conditions" },
];
const AboutGOLO = [
  { id: 1, name: "about us" },
  { id: 2, name: "careers" },
  { id: 3, name: "press" },
  { id: 4, name: "blog" },
  { id: 5, name: "investors" },
  // { id: 6, name: "sustainability" },
  // { id: 7, name: "corporate responsibility" },
  // { id: 8, name: "diversity and inclusion" },
];
function Footer() {
  return (
      <div className="  bg-white border-2 mt-12 border-t-gray-200 border-b-0 border-r-0 border-l-0  flex-col ">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 w-full container mx-auto ">
          <div className="   h-full  ">
            <h1 className="text-2xl font-bold text-black  m-4 cursor-pointer">lOGO</h1>
            <p className="  text-shadow-gray-300 text-gray-500 m-3 font-medium">
              Cambodia's leading online supermarket. Fresh groceries, daily
              essentials, and more delivered to your doorstep. Fast, reliable,
              and affordable
            </p>
            <div className="grid grid-cols-3   items-center justify-center text-center gap-4 ">
              <div className=" items-center cursor-pointer justify-center text-center py-3 px-3 bg-blue-200/20  rounded-full hover:bg-green-600/20 transition-colors duration-300 ">
                <iconify-icon icon="logos:facebook" width="20" />
              </div>
              <div className=" items-center cursor-pointer justify-center text-center py-3 px-3 bg-blue-200/20  rounded-full hover:bg-green-600/20 transition-colors duration-300 ">
                <iconify-icon icon="logos:telegram" width="20" />
              </div>
              <div className=" items-center cursor-pointer justify-center text-center py-3 px-3 bg-blue-200/20  rounded-full hover:bg-green-600/20 transition-colors duration-300">
                <iconify-icon icon="logos:instagram-icon" width="20" />
              </div>
            </div>
          </div>
          <div className="   h-full">
            <h1 className="text-2xl font-bold text-black  m-4">
              Customer Service
            </h1>
            {CustomerService.map((cs) => {
              return (
                <p key={cs.id} className=" text-shadow-gray-300 text-gray-500 m-3 font-medium hover:underline cursor-pointer ">
                  {cs.name}
                </p>
              );
            })}
          </div>
          <div className="  h-full">
            <h1 className="text-2xl font-bold text-black  m-4">About GOLO</h1>
            {AboutGOLO.map((ag) => {
              return (
                <p
                  key={ag.id}
                  className=" text-shadow-gray-300 text-gray-500 m-3 font-medium hover:underline cursor-pointer "
                >
                  {ag.name}
                </p>
              );
            })}
          </div>
          <div className="h-full">
            <h1 className="text-2xl font-bold text-black  m-4">Download App</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 m-2 gap-2  text-center items-center justify-center ">
              <div className=" flex cursor-pointer  text-center items-center justify-center p-4 text-white hover:text-black bg-gray-950  transition-transform  rounded-[12px] hover:bg-gray-400/30 transition-colors duration-300 gap-2 ">
                <Apple className="w-6 h-6" /><span className=" font-bold ">App Store</span>
              </div>
              <div className=" flex cursor-pointer text-center items-center justify-center p-4 text-white bg-gray-950  hover:text-black rounded-[12px] hover:bg-gray-400/30  transition-colors duration-300 gap-2">
                <Play className="w-6 h-6  " /><span className="  font-bold ">Google Play</span>
              </div>
            </div>
            <h1 className=" font-bold text-black  m-4">Payment Methods</h1>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 items-center justify-center text-center text-[12px] font-medium ">
              <div className="py-4 px-4 items-center justify-center text-center  bg-blue-200/20  rounded-full hover:bg-green-600/20 transition-colors duration-300 hover:underline cursor-pointer  ">
              <p>ABA</p>
              </div>
              <div className="py-4 px-4 items-center justify-center text-center  bg-blue-200/20  rounded-full hover:bg-green-600/20 transition-colors duration-300 hover:underline cursor-pointer  ">
              <p>Wing</p>
              </div>
              <div className="py-4 px-4 items-center justify-center text-center bg-blue-200/20  rounded-full hover:bg-green-600/20 transition-colors duration-300 hover:underline cursor-pointer ">
              <p>PiPay</p>
              </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Footer