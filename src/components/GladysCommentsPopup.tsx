import React from 'react';
import Image from "next/image";

interface GladysCommentsPopupProps {
  onClose: () => void;
}

const comments = [
  {
    name: "Jiafei",
    avatar: "/jiafei.png",
    rating: "10/10",
    comment: "Super trajet aujourd'hui ! À très vite !",
  },
  {
    name: "Buenos",
    avatar: "/deje_el_bullying.png",
    rating: "7.5/10",
    comment: "Merci pour la bonne humeur ! Les bouchons par contre...",
  },
  {
    name: "Lana",
    avatar: "/lana.png",
    rating: "8.75/10",
    comment: "Le siège est confortable ! J'ai bien dormi !",
  },
];

export default function GladysCommentsPopup({ onClose }: GladysCommentsPopupProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl border border-gray-200 z-50 w-80"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-lg font-bold mb-4 text-black">Reviews de Gladys:</h3>
      {
        comments.map((comment, index) => (
          <div key={index} className="flex items-start mb-4">
            <div className="flex flex-col items-center mr-3">
              <Image
                src={comment.avatar}
                alt={comment.name}
                width={40}
                height={40}
                className="rounded-full mb-1"
              />
              <p className="text-gray-700 text-xs">{comment.rating}</p>
            </div>
            <div>
              <p className="font-semibold text-black">{comment.name} à dit:</p>
              <p className="text-gray-700 text-sm">{comment.comment}</p>
            </div>
          </div>
        ))
      }
      <button
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}
