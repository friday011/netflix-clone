import { useState, useEffect } from "react";

type scrollYType = boolean;

const useScrollY = () => {
  const [scroll, setScroll] = useState<scrollYType>(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
};

export default useScrollY;
