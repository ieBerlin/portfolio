import { useEffect, useState } from "react";
import IconImage from "./assets/icon.png";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position =
      window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isToped = scrollPosition > 110;

  return (
    <section>
      <div className="container relative mt-3 ml-3">
        <img
          src={IconImage}
          className={`h-20 cursor-pointer logo-image ${isToped ? "moved" : undefined}`}
          alt=""
        />
      </div>
      <main className="my-20">
        <h1 className="font-bold text-xl w-2/3 mx-auto lg:text-2xl xl:text-3xl 2xl:text-4xl text-center text-start">
          <span style={{ color: "aqua" }}>Hey, My name is</span>
          <br />
          <span className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gray-200">
            I'm Alaa Eddine Ourmassi
          </span>
          <br />
          <span className="text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gray-400">
            Software Euthenist
          </span>
          <br />
          <br />
          <span className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500">
            A passionate software developer and computer science student.
          </span>
        </h1>
      </main>
    </section>
  );
}
