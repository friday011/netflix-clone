import Head from "next/head";
import type { GetServerSideProps } from "next";

import { Movie, SearchResults } from "../typings";
import requests from "../utils/requests";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Row from "../components/Row";
import { FC, PropsWithChildren } from "react";

// interface Props {
//   trendingMovies: SearchResults<Movie>;
// }

// To fix - add TV interface
interface Props {
  trendingMovies: SearchResults<Movie>;
  trendingNow: SearchResults<Movie>;
  popularMovies: SearchResults<Movie>;
  discoverMovies: SearchResults<Movie>;
  discoverTV: SearchResults<Movie>;
  topRatedMovies: SearchResults<Movie>;
  topRatedTV: SearchResults<Movie>;
  // actionMovies: SearchResults<Movie>;
  // comedyMovies: SearchResults<Movie>;
  // horrorMovies: SearchResults<Movie>;
  // romanceMovies: SearchResults<Movie>;
  // documentaries: SearchResults<Movie>;
}

const Home: FC<PropsWithChildren<Props>> = ({
  trendingMovies,
  trendingNow,
  popularMovies,
  topRatedMovies,
  topRatedTV,
  discoverMovies,
  discoverTV
  // actionMovies,
  // comedyMovies,
  // horrorMovies,
  // romanceMovies,
  // documentaries
}) => {
  // bg-gradient-to-b from-gray-900/10 to-[#141414]
  return (
    <main className="relative h-screen pb-8 bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative">
        <Hero movies={trendingMovies.results} />
        <section className="flex flex-col gap-12 mt-8">
          <Row title="Trending Now" items={trendingNow.results} />
          <Row title="Popular Movies" items={popularMovies.results} />
          <Row title="Top Rated Movies" items={topRatedMovies.results} />
          <Row title="Top Rated TV Shows" items={topRatedTV.results} />
          <Row title="Discover new Movies" items={discoverMovies.results} />
          <Row title="Discover new TV Shows" items={discoverTV.results} />
          {/* <Row title="Action Movies" items={actionMovies.results} />
          <Row title="Comedy Movies" items={comedyMovies.results} />
          <Row title="Horror Movies" items={horrorMovies.results} />
          <Row title="Romantic Movies" items={romanceMovies.results} />
          <Row title="Documentaries" items={documentaries.results} /> */}
        </section>
      </main>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data: SearchResults<Movie> = await fetch(requests.fetchTrending)
    .then(res => res.json())
    .catch(err => console.error(err));

  const [
    trendingNow,
    popularMovies,
    discoverMovies,
    discoverTV,
    topRatedMovies,
    topRatedTV
    // actionMovies,
    // comedyMovies,
    // horrorMovies,
    // romanceMovies,
    // documentaries
  ] = await Promise.all([
    fetch(requests.fetchTrending)
      .then(res => res.json())
      .catch(err => console.error(err)),
    fetch(requests.fetchPopularMovies)
      .then(res => res.json())
      .catch(err => console.error(err)),
    fetch(requests.fetchDiscoverMovies)
      .then(res => res.json())
      .catch(err => console.error(err)),
    fetch(requests.fetchDiscoverTV)
      .then(res => res.json())
      .catch(err => console.error(err)),
    fetch(requests.fetchTopRatedMovies)
      .then(res => res.json())
      .catch(err => console.error(err)),
    fetch(requests.fetchTopRatedTV)
      .then(res => res.json())
      .catch(err => console.error(err))
    // fetch(requests.fetchActionMovies)
    //   .then(res => res.json())
    //   .catch(err => console.error(err)),
    // fetch(requests.fetchComedyMovies)
    //   .then(res => res.json())
    //   .catch(err => console.error(err)),
    // fetch(requests.fetchHorrorMovies)
    //   .then(res => res.json())
    //   .catch(err => console.error(err)),
    // fetch(requests.fetchRomanceMovies)
    //   .then(res => res.json())
    //   .catch(err => console.error(err)),
    // fetch(requests.fetchDocumentaries)
    //   .then(res => res.json())
    //   .catch(err => console.error(err))
  ]);

  return {
    props: {
      trendingMovies: data,
      trendingNow,
      popularMovies,
      discoverMovies,
      discoverTV,
      topRatedMovies,
      topRatedTV
      // actionMovies,
      // comedyMovies,
      // horrorMovies,
      // romanceMovies,
      // documentaries
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
