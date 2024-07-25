import React from 'react';
import { useNavigate } from "react-router-dom";
import img from "../img/Brain_1.jpg"
import img3 from "../img/Brain_3.png"

const Block = () => {
    const navigate = useNavigate();

    const Click = () => {
        navigate('/Brief');
      };

  return (
    <div>
    <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-700">
<div className="container p-6 mx-auto space-y-8">
    <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Cognitive Tests</h2>
        <p className="font-serif text-sm dark:text-gray-400">loream ipsum </p>
    </div>
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        <article className="flex flex-col dark:bg-gray-900">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={img} />
            </a>
            <div className="flex flex-col flex-1 p-6">
                {/* <a rel="noopener noreferrer" href="/Test" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="/Test" className="text-xl tracking uppercase hover:underline dark:text-violet-400">Convenire</a> */}
                <button onClick={Click} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Working Memory Test
                </button>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">Test-1</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 1, 2020</span>
                    <span>2.1K views</span>
                </div>
            </div>
        </article>
        <article className="flex flex-col dark:bg-gray-900">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={img3} />
            </a>
            <div className="flex flex-col flex-1 p-6">
            <button onClick={Click} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Test-2
                </button>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">Test-2</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 2, 2020</span>
                    <span>2.2K views</span>
                </div>
            </div>
        </article>
        <article className="flex flex-col dark:bg-gray-900">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={img} />
            </a>
            <div className="flex flex-col flex-1 p-6">
            <button onClick={Click} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Test-3
                </button>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">Test-3</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 3, 2020</span>
                    <span>2.3K views</span>
                </div>
            </div>
        </article>
        <article className="flex flex-col dark:bg-gray-900">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={img3} />
            </a>
            <div className="flex flex-col flex-1 p-6">
            <button onClick={Click} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Test-4
                </button>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">Test-4</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 4, 2020</span>
                    <span>2.4K views</span>
                </div>
            </div>
        </article>
    </div>
</div>
</section>
    </div>
  );
};

export default Block;