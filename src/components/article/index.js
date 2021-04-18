import React from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Article(props) {
  const route = useParams();
  const { slug } = route;
  const singlePost = props.allArticles.filter((e) => e.slug === slug);

  const {description, imageUrl, photoAuthor, title} = singlePost[0]

  return (
    <>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <nav
              className="flex justify-center pb-10 hidden sm:flex"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center space-x-4">
                <li>
                  <div className="flex items-center">
                    <Link
                      to="/"
                      aria-current="page"
                      className="ml-4 text-sm font-medium underline text-gray-500 hover:text-gray-700"
                    >
                      Inicio
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      to={`/${slug}`}
                      aria-current="page"
                      className="ml-4 text-sm font-medium underline text-gray-500 hover:text-gray-700"
                    >
                      {title}
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>

            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Artículos
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
                {description}
            </p>
            <figure className="my-10">
              <img
                className="w-full rounded-lg"
                src={imageUrl}
                alt=""
                width={1310}
                height={873}
              />
              <figcaption className="text-center mt-8 text-sm text-gray-500">
                📸 Fotografía: {photoAuthor}
              </figcaption>
            </figure>
          </div>
          <div className="text-lg mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto max-w-prose pt-10 border-solid border-t-2">
            <p>
              Faucibus commodo massa rhoncus, volutpat.{" "}
              <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
              Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim.{" "}
            </p>
            <ul>
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>
                Cras cras lobortis vitae vivamus ultricies facilisis tempus.
              </li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
              Quis semper vulputate aliquam venenatis egestas sagittis quisque
              orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
              eu. Tincidunt leo, elementum mattis elementum ut nisl, justo,
              amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet,
              duis sed elit interdum dignissim.
            </p>
            <h2>From beginner to expert in 30 days</h2>
            <p>
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.
            </p>
            <blockquote>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </blockquote>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
            <h2>Everything you need to get up and running</h2>
            <p>
              Purus morbi dignissim senectus mattis.
              Amet, massa quam varius orci dapibus volutpat cras. In amet eu
              ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
              viverra ridiculus non molestie. Gravida quis fringilla amet eget
              dui tempor dignissim. Facilisis auctor venenatis varius nunc,
              congue erat ac. Cras fermentum convallis quam.
            </p>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
