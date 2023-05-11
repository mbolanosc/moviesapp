import axios from "axios";
import React from "react";

const MOVIESDB_API_KEY = "f3c4b92cb91fb79dd85a1566d4bf4126";
const MOVIESDB_API_KEY_V4_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2M0YjkyY2I5MWZiNzlkZDg1YTE1NjZkNGJmNDEyNiIsInN1YiI6IjY0NWIxYTkzNzdkMjNiMDE3MDM4ODI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.35APmgv1z9NHdyrXic8RhUajwchzfQR466DiOVEakak";

  export const APIKEY ="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2M0YjkyY2I5MWZiNzlkZDg1YTE1NjZkNGJmNDEyNiIsInN1YiI6IjY0NWIxYTkzNzdkMjNiMDE3MDM4ODI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.35APmgv1z9NHdyrXic8RhUajwchzfQR466DiOVEakak";

export interface IMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
export interface IMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

interface PeliculasContextProps {
  popularMovies: IMovie[];
}

const PeliculasContext = React.createContext<PeliculasContextProps>({
  popularMovies: [],
});

export const PeliculasContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [popularMovies, setPopularMovies] = React.useState<IMovie[]>([]);
  const getPopularMovies = React.useCallback(async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIESDB_API_KEY}&language=en-US&page=1`
    );
    console.log(response.data.results);
    setPopularMovies(response.data.results);
  }, []);

  React.useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  const contextValue = React.useMemo(
    () => ({
      popularMovies,
    }),
    [popularMovies]
  );

  return (
    <PeliculasContext.Provider value={contextValue}>
      {children}
    </PeliculasContext.Provider>
  );
};

export const usePeliculasContext = () =>
  React.useContext<PeliculasContextProps>(PeliculasContext);