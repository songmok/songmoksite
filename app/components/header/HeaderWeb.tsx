import Link from "next/link";
import React from "react";
import DarkModeButton from "../../utils/DarkModeButton";

const HeaderWeb = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
      <Link
        className="flex title-font font-medium items-center text-gray-900"
        href="/"
      >
        <h1 className="ml-3 text-xl ">SONGMOK</h1>
      </Link>
      <nav className="ml-auto flex flex-wrap items-center text-base">
        <Link className="mr-5 hover:text-gray-900" href="/">
          Home
        </Link>
        <Link className="mr-5 hover:text-gray-900" href="/stacks">
          Stacks
        </Link>
        <Link className=" mr-5 hover:text-gray-900" href="/portfolio">
          Portfolio
        </Link>
        {/* <Link className=" mr-5 hover:text-gray-900" href="/tistory">
          Tistory
        </Link> */}
        <Link className=" mr-5 hover:text-gray-900" href="/life">
          Life
        </Link>
      </nav>
      <DarkModeButton />
    </div>
  );
};

export default HeaderWeb;
