"use client";
import React, { useState } from "react";
import Image from "next/image";
import CloneModal from "./CloneModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ICloneData } from "../../../portfolio/page";

export default function CloneItem({ data }: { data: ICloneData }) {
  const gitUrl = data.properties.Git.url;
  const title = data.properties.Name.title[0].plain_text;
  const siteUrl = data.url;
  const imgUrl = data.cover?.file?.url;
  const RepUrl = data.properties.Replit.url;
  const tags = data.properties.Tags.multi_select;
  const RepEmb: string = RepUrl + "?embed=1";

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
      <div className="project-card my-4 w-3/4">
        <div className="bg-gray-100 p-4 rounded-lg ">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
            target="_blank"
            className=""
          >
            <Image
              className="h-40 rounded w-full object-cover object-center mb-14"
              src={imgUrl}
              priority
              width={1920}
              height={960}
              alt={title}
            />
          </a>
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
            <h2 className="text-base text-gray-900 dark:text-slate-600 font-bold mr-3 title-font">
              {title}
            </h2>
            <a
              className="dark:hover:text-slate-500 text-sm block w-1 mr-2"
              href={gitUrl}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
