"use client";
import Link from "next/link";
import useMuiMedia from "../../hook/useMuiMedia";
import DarkModeButton from "../../utils/DarkModeButton";
import MobDarkModeButton from "../../utils/MobDarkModeButton";

export default function Header() {
  const { mobile } = useMuiMedia();

  return (
    <header className="text-gray-600 body-font relative">
      {!mobile ? (
        <>
          <div className="container mx-auto  p-5  ">
            <div className="flex justify-between mx-auto items-center mb-10">
              <Link
                className="flex title-font font-medium text-gray-900"
                href="/"
              >
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
              <Link className=" hover:text-gray-900" href="/life">
                Life
              </Link>
            </nav>
          </div>
        </>
      ) : (
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
            <Link className=" mr-5 hover:text-gray-900" href="/life">
              Life
            </Link>
          </nav>
          <DarkModeButton />
        </div>
      )}
    </header>
  );
}
