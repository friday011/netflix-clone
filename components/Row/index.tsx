import { FC, PropsWithChildren } from "react";
import { Movie } from "../../typings";

interface Props {
  title: string;
  items: Movie[];
}

const Row: FC<PropsWithChildren<Props>> = ({ items, title }) => {
  console.log({ items });

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h2 className="px-12 text-lg font-semibold text-left">{title}</h2>
        <section className="flex items-center">hi</section>
      </div>
    </div>
  );
};

export default Row;
