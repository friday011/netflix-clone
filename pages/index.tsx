import type { GetServerSideProps } from "next";

import { TrendingMovies } from "../typings";
import requests from "../utils/requests";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Row from "../components/Row";
import { FC, PropsWithChildren } from "react";

// To fix - proptypeswithchildren - pocket
interface Props {
  trendingMovies: TrendingMovies;
}

const Home: FC<PropsWithChildren<Props>> = ({ trendingMovies }) => {
  return (
    <main className="relative min-h-screen lg:h-[140vh] text-[#e5e5e5] bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Header />
      <main className="relative">
        <Hero movies={trendingMovies.results} />
        <Row />
      </main>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data: TrendingMovies = await fetch(requests.fetchTrending)
    .then(res => res.json())
    .catch(err => console.error(err));

  return {
    props: {
      trendingMovies: data
    }
  };
};

export default Home;

// bg-[#141414]
// trending-all
// discover-tv
// discover-movie
// toprated-movie
// toprated-tv
// action
// comedy
// horror
// romance
// documentaries
