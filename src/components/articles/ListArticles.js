import React from "react";

export default function ListArticles() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 my-20 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {/* NOMBRE DE LA SECCIÓN */}
            </h2>
            <p className="text-xl text-gray-500">
              {/* DESCRIPCIÓN DE LA SECCIÓN */}
            </p>
          </div>
          
          {/* FILTRAR ARTÍCULOS */}

        </div>
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {/* NOMBRE DE LA SECCIÓN */}
            </h2>
            <p className="text-xl text-gray-500">
              {/* DESCRIPCIÓN DE LA SECCIÓN */}
            </p>
          </div>
          
          {/* FILTRAR ARTÍCULOS */}

        </div>
      </div>
    </div>
  );
}
