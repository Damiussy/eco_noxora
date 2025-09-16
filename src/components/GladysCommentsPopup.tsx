import React from 'react';
import Image from "next/image";

interface GladysCommentsPopupProps {
  onClose: () => void;
}

const comments = [
  {
    name: "Jiafei",
    avatar: "/jiafei.png",
    comment: "Super trajet aujourd'hui ! À très vite !",
  },
  {
    name: "Deje El Bullying",
    avatar: "/deje_el_bullying.png",
    comment: "Merci pour la bonne humeur !",
  },
];

export default function GladysCommentsPopup({ onClose }: GladysCommentsPopupProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl border border-gray-200 z-50 w-80"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-lg font-bold mb-4 text-black">Comments from Gladys:</h3>
      {
        comments.map((comment, index) => (
          <div key={index} className="flex items-start mb-4">
            <Image
              src={comment.avatar}
              alt={comment.name}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div>
              <p className="font-semibold text-black">{comment.name} said:</p>
              <p className="text-gray-700 text-sm">{comment.comment}</p>
            </div>
          </div>
        ))
      }
      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}
