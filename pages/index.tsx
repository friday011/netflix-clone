import type { GetServerSideProps } from "next";

import { TrendingMovies } from "../typings";
import requests from "../utils/requests";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Row from "../components/Row";
import { FC, PropsWithChildren } from "react";

interface Props {
  trendingMovies: TrendingMovies;
}

const Home: FC<PropsWithChildren<Props>> = ({ trendingMovies }) => {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Header />
      <main className="relative">
        <Hero movies={trendingMovies.results} />
        <section className="mt-8">
          <Row title="Trending Now" items={trendingMovies.results} />
        </section>
      </main>
      <div className="h-screen"></div>
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
