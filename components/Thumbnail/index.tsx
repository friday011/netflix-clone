import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { thumbnailUrl } from "../../constants/movie";
import { Movie } from "../../typings";

interface Props {
  item: Movie;
}

const Thumbnail: FC<PropsWithChildren<Props>> = ({ item }) => {
  return (
    <div className="relative h-24 cursor-pointer sm:h-28 md:h-32 aspect-video hover:scale-105">
      <Image
        src={`${thumbnailUrl}${item?.backdrop_path || item?.poster_path}`}
        alt={item?.title}
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
    </div>
  );
};

export default Thumbnail;
