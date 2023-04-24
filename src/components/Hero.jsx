import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="" href="/"  className="hover:cursor-pointer w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/MistryDarshit")}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Sumarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Artificial Intellagence</span>
      </h1>
      <h2 className="desc">
        Simplify Your Reading With Summrize,an Open-Source article summrizer
        that transforms lengthly articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
