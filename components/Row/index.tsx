import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { Movie } from "../../typings";
import Thumbnail from "../Thumbnail";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  title: string;
  items: Movie[];
}

const Row: FC<PropsWithChildren<Props>> = ({ items, title }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log(rowRef.current.po);
  // }, [rowRef.current.po]);

  const handleClick = (direction: string) => {
    setIsScrolled(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth, onscroll } = rowRef.current;
      console.log(onscroll);

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full group">
      <div className="flex items-center w-full gap-1 px-4 sm:px-8 lg:px-12">
        <h2 className="text-[#e5e5e5] hover:text-white cursor-pointer text-base font-semibold text-left md:text-lg">
          {title}
        </h2>
        <FaChevronRight className="hidden w-3 h-3 text-cyan-400 group-hover:block" />
      </div>
      <main className="relative flex items-center w-full gap-2 overflow-auto group">
        <button
          onClick={() => handleClick("left")}
          className={`absolute top-0 bottom-0 left-0 z-20 flex items-center justify-center w-12 h-full m-auto transition duration-200 ease-linear opacity-0 group-hover:opacity-100 bg-gradient-to-l from-gray-900/10 to-gray-900/40 ${
            !isScrolled && "hidden"
          }`}
        >
          <FaChevronLeft className="w-8 h-8" />
        </button>
        <div
          className="flex items-center w-full gap-4 py-4 pl-4 overflow-x-scroll sm:pl-8 lg:pl-12"
          ref={rowRef}
        >
          {items.map(item => (
            <Thumbnail key={item.id} item={item} />
          ))}
        </div>
        <button
          onClick={() => handleClick("right")}
          className="absolute top-0 bottom-0 right-0 z-20 flex items-center justify-center w-12 h-full m-auto transition duration-200 ease-linear opacity-0 group-hover:opacity-100 bg-gradient-to-r from-gray-900/10 to-gray-900/40"
        >
          <FaChevronRight className="w-8 h-8" />
        </button>
      </main>
    </div>
  );
};

export default Row;
