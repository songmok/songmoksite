"use client";
import React, { useState } from "react";
import Image from "next/image";
import CloneModal from "./CloneModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ICloneData } from "../../../portfolio/page";
import Link from "next/link";

export default function CloneItem({
  data,
  length,
}: {
  data: ICloneData;
  length: number;
}) {
  const gitUrl = data.properties.Git.url;
  const title = data.properties.Name.title[0].plain_text;
  const siteUrl = data.url;
  // const imgUrl = data.cover?.external?.url || data.cover?.file?.url;
  const RepUrl = data.properties.Replit.url;
  const tags = data.properties.Tags.multi_select;
  const desc = data.properties;
  const RepEmb: string = RepUrl + "?embed=1";

  console.log("desc", desc);
  const [ModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CloneModal
        RepEmb={RepEmb}
        RepUrl={RepUrl}
        title={title}
        siteUrl={siteUrl}
        closeModal={closeModal}
        ModalOpen={ModalOpen}
      />
      <div className="project-card my-4">
        <div className="bg-gray-800 dark:bg-slate-100 p-4 rounded-lg h-full relative">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
            target="_blank"
          >
            <Image
              className="h-40 rounded w-full object-cover object-center mb-14"
              src={`/img/project/clone${length}.png`}
              priority
              width={1920}
              height={960}
              alt={title}
            />
          </Link>
          <h3 className="tracking-widest text-indigo-500 dark:text-slate-600 text-xs font-medium title-font mb-4 mt-4">
            {tags.map((item, num) => (
              <span
                key={num}
                className={`tag ${item.color} inline-block py-1 px-2 font-bold uppercase rounded-md bg-purple-500 text-white mr-2`}
              >
                {item.name}
              </span>
            ))}
          </h3>
          <div className="flex items-center">
            <h2 className="text-base whitespace-nowrap text-cyan-300 dark:text-cyan-900 font-bold mr-3 title-font">
              {title}
            </h2>
            <Link
              className="dark:hover:text-slate-500 text-sm block w-1 mr-2"
              href={gitUrl}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5" />
            </Link>
          </div>
          <div className="mt-5 mb-5">
            <span className="text-base block text-cyan-100 pb-5 dark:text-cyan-900">
              {/* {desc} */}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
