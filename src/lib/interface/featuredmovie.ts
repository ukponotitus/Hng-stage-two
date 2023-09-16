// import { StaticImageData } from "next/image";
export interface IFeaturedMovie {
  onClick(props: IFeaturedMovie): unknown;
  poster_path: string;
  release_date: string;
  title: string;
    description:string,
    id: number;
  }

  export interface singleMovieData{
        Home: string,
        Movies: string,
        Tvseries: string,
        upcoming: string,
        descriptionTitle:string,
        description:string,
        logout:string,
        id:number,
  }
  export interface IMissing{
    description: string,
  }
  export interface IFeaturedSingleMovie {
    poster_path: string;
    release_date: string;
    title: string;
      description:string,
      id: number;
    }