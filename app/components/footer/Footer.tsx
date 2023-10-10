import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            href="/"
          >
            <span className="ml-3 text-xl">songmok</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 songmok —
            <Link
              href="https://github.com/songmok"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @songmok
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center align-middle sm:justify-start">
            <Link
              className="ml-3 text-gray-500"
              href="https://github.com/songmok"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-5 transform scale-150"
              />
            </Link>
            <Link
              className="ml-3 text-gray-500"
              href="https://ultra-relish-e13.notion.site/0f81e7ec1af1422294b3297c0308c825"
              target="_blank"
            >
              <Image
                src="/img/notion.png"
                alt="Notion icon"
                width={25}
                height={25}
              />
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
