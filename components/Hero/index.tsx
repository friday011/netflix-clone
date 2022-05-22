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
    <main className="h-[65vh] px-8">
      <div className="absolute inset-0 h-[95vh] w-screen -z-10">
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
      {/* <div className="absolute inset-0 top-0 w-full h-full bg-black bg-opacity-50"></div> */}
      {/* <Image
        src={`${baseUrl}${
          randomMovie?.backdrop_path || randomMovie?.poster_path
        }`}
        alt={randomMovie?.title}
        layout="fill"
        objectFit="cover"
      /> */}
      <div className="mx-auto max-w-[1340px] flex flex-col items-start justify-center h-full space-y-4">
        <h1 className="max-w-lg text-5xl font-bold">{randomMovie?.title}</h1>
        <p className="max-w-lg">{randomMovie?.overview}</p>
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
      </div>
    </main>
  );
};

export default Hero;
