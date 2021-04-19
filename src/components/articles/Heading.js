import React from "react";

export default function Heading() {
  return (
    <div>
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">💼 </span>
            <span className="block text-indigo-600">
              {/* TÍTULO DEL BLOG */}
            </span>
            <span className="block mt-10">
              {/* DESCRIPCIÓN DEL BLOG */}
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {/* NOMBRE DEL AUTOR */}
          </p>
        </div>
      </div>
    </div>
  );
}
