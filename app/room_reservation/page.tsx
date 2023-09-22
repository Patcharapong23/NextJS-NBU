import Image from "next/image";
import Bed4 from "../assets/Bed4.png";
import Bed2 from "../assets/Bed2.png";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Room Reservation",
  description: "Generated for the about page",
};

export default function Room_Reservation() {
  return (
    <div className="flex justify-center items-center h-screen gap-4 sm:gap-4">
      <Link
        href="/status_room"
        className="relative bg-[#F5EDDC] max-w-lg rounded-[55px] overflow-hidden shadow-xl ring-1 ring-gray-900/5 mx-4 p-4"
      >
        <div className="px-6 pt-10 pb-8 text-center text-xl font-bold">
          For 4 people.
        </div>
        <div className="divide-y divide-gray-300/50 space-y-6 py-8 text-base leading-7 text-gray-600">
          <Image
            alt="Bed"
            src={Bed4}
            layout="responsive"
            width={600}
            height={400}
          />
          <h1 className="text-2xl font-bold mb-2 text-left">
            15,000฿ / Year/ Person
          </h1>
          <p className="text-sm text-left">
            1 Air Conditioner, 1 Water heater, 2 Bunk beds, 1 Bathroom, 1
            Toilet, 4 New Wardrobes, 4 New Desks and 4 New Chairs
          </p>
        </div>
      </Link>
      <Link
        href=""
        className="relative bg-[#F5EDDC] max-w-lg rounded-[55px] overflow-hidden shadow-xl ring-1 ring-gray-900/5 mx-4 p-4"
      >
        <div className="px-6 pt-10 pb-8 text-center text-xl font-bold">
          For 2 people.
        </div>
        <div className="divide-y divide-gray-300/50 space-y-6 py-8 text-base leading-7 text-gray-600">
          <Image
            alt="Bed"
            src={Bed2}
            layout="responsive"
            width={600}
            height={400}
          />
          <h1 className="text-2xl font-bold mb-2 text-left">
            15,000฿ / Year/ Person
          </h1>
          <p className="text-sm text-left">
            1 Air Conditioner , 1 Water heater , 2 Single beds , 1 Bathroom , 1
            Toilet , 2 Wardrobes , 2 Desks and 2 Chairs
          </p>
        </div>
      </Link>
    </div>
  );
}
