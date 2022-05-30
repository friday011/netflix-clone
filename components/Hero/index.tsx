import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInfoCircle, FaPlay } from "react-icons/fa";
import { baseUrl } from "../../constants/movie";

import { Movie } from "../../typings";

interface IHero {
  movies: Movie[];
}

const Hero = ({ movies }: IHero) => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setRandomMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies]);

  console.log({ randomMovie }); // title not coming in tv

  return (
    <main className="h-[70vh] px-12 pb-16">
      <div className="h-full ">
        <div className="absolute inset-0 w-screen h-[95vh] -z-10">
          {randomMovie && (
            <Image
              src={`${baseUrl}${
                randomMovie?.backdrop_path || randomMovie?.poster_path
              }`}
              alt={randomMovie?.title}
              layout="fill"
              objectFit="cover"
              loading="eager"
              priority={true}
            />
          )}
        </div>
        <section className="flex flex-col items-start justify-end h-full max-w-lg space-y-4">
          <h1 className="text-4xl font-bold ">{randomMovie?.title}</h1>
          <p className="text-white">{randomMovie?.overview}</p>
          <div className="flex items-center space-x-2">
            <button className="flex items-center px-6 py-2 space-x-4 text-black transition duration-300 bg-white rounded hover:bg-white/75">
              <FaPlay className="w-5 h-5" />
              <p className="font-medium">Play</p>
            </button>
            <button className="flex items-center px-6 py-2 space-x-4 text-white bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] rounded transition duration-300">
              <FaInfoCircle className="w-5 h-5" />
              <p className="font-medium">More Info</p>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
