import React from "react";

export const metadata = {
  title: "Status room",
  description: "Generated for the Status room page",
};

export default function Status_room() {
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-4 sm:gap-4 ">
        <div className="relative bg-[#F6EECF] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-[55px] sm:px-10  flex-auto content-start">
          <div className="mx-auto max-w-md   ">
            <h2 className="text-center text-xl">For 4 people.</h2>
            <div className=" justify-between space-y-6 py-8 text-base leading-7 text-gray-600">
              <h1 className="font-bold text-xl">-</h1>
              <li className="flex gap-4">
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
              </li>
              <div className="container flex gap-4">
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
              </div>
            </div>
            <div className=" space-y-6 py-8 text-base leading-7 text-gray-600">
              <li className="flex gap-4 1">
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
              </li>
              <div className="container flex gap-4">
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
                <button className="flex-auto rounded-lg h-20 bg-[#829DFF]"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
