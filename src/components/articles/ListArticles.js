import React from "react";
import FilteredArticles from "./FilteredArticles";

export default function ListArticles(props) {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 my-20 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Búsqueda de trabajo
            </h2>
            <p className="text-xl text-gray-500">
              Recomendaciones para que puedas tener mayores oportunidades con
              las empresas
            </p>
          </div>
          <FilteredArticles articles={props.allArticles} topic="busqueda" />
        </div>
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Estadísticas de trabajo en Latinoamérica
            </h2>
            <p className="text-xl text-gray-500">
              Conoce más sobre cómo el mercado laboral progresa en diferentes
              países de Latinoamérica.
            </p>
          </div>
          <FilteredArticles articles={props.allArticles} topic="estadistica" />
        </div>
      </div>
    </div>
  );
}
