/** @format */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/header/Header";
import Link from "next/link";
import MovieCard from "@/components/movieCard/MovieCard";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=0337e8808bdae9331dabf1e81b3f65d0"
        );

        if (res.data.results) {
          setTopMovies(res.data.results.slice(0, 10));
          setIsLoading(false)
        }
      } catch (error) {
        console.error("Error getting movies", error);
        setError('An error occurred while fetching data. Please check your internet connection or try again later.');
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (searchQuery) => {
    const filtered = topMovies.filter((movie) => {
      if (searchQuery === "") {
        return null;
      } else {
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      }
    });
    setSearchResults(filtered);
    console.log(searchResults);
  };

  if (error) {
    return <div className={styles.error}>{error}</div>
  }
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Header onSearch={handleSearch} />
        <Hero />
      </div>

      <div className={styles.listContainer}>
        {searchResults.length === 0 ? (
          <div></div>
        ) : (
          <div>
            <h1 className={styles.listTitle}>Search results</h1>
            <div className={styles.moviesList}>
              {searchResults.map((movie) => {
                return (
                  <Link href={`/movie/${movie.id}`} key={movie.id}>
                    <MovieCard movie={movie} />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className={styles.listContainer}>
        <h1 className={styles.listTitle}>Featured Movies</h1>
        <div className={styles.moviesList}>
          {topMovies.map((movie) => {
            return (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}
