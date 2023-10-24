import Link from "next/link";
import React from "react";
import MobDarkModeButton from "../../utils/MobDarkModeButton";
import useMuiMedia from "../../hook/useMuiMedia";

const HeaderMob = () => {
  const { mobile } = useMuiMedia();
  return (
    <>
      <div className="container mx-auto  p-5 ">
        <div className="flex justify-between mx-auto items-center mb-10">
          <Link className="flex title-font font-medium text-gray-900" href="/">
            <h1 className="ml-3 text-xl">SONGMOK</h1>
          </Link>
          <MobDarkModeButton />
        </div>
        <nav className="flex flex-wrap items-center text-base text justify-around">
          <Link className="hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-900" href="/stacks">
            Stacks
          </Link>
          <Link className=" hover:text-gray-900" href="/portfolio">
            Portfolio
          </Link>
           <Link className=" mr-5 hover:text-gray-900" href="/tistory">
            Tistory
          </Link> 
          <Link className=" hover:text-gray-900" href="/life">
            Life
          </Link>
        </nav>
      </div>
    </>
  );
};

export default HeaderMob;
