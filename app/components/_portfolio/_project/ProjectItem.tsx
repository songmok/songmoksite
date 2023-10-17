"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IProjectData } from "../../../portfolio/page";
import useMuiMedia from "../../../hook/useMuiMedia";
import Link from "next/link";
const ProjectItem = ({
  data,
  length,
}: {
  data: IProjectData;
  length: number;
}) => {
  const { tablet } = useMuiMedia();
  const title = data.properties.Name.title[0].text.content;
  const siteUrl = data.url;
  // const imgUrl = data.cover?.external?.url || data.cover?.file?.url;
  const gitUrl = data.properties.Git.url;
  const tags = data.properties.Tags.multi_select; // 배열[]
  const start = data.properties.Dated.date.start;
  const end = data.properties.Dated.date.end;
  const desc = data.properties.description.rich_text[0].plain_text;
  const team = data.properties.team?.rich_text[0]?.plain_text;
  const descM = data.properties.descMob?.rich_text[0]?.plain_text;

  const calcDate = (start: string | Date, end: string | Date): number => {
    start = typeof start === "string" ? new Date(start) : start;
    end = typeof end === "string" ? new Date(end) : end;
    const mathDate = Math.abs(end.getTime() - start.getTime());
    const result = mathDate / (1000 * 60 * 60 * 24);
    return result;
  };

  return (
    <div className="project-card my-4">
      <div className="bg-gray-800 dark:bg-slate-100 p-2 rounded-lg h-full relative">
        <Link href={siteUrl} target="_blank">
          <Image
            className="h-80 rounded w-full object-cover object-center mb-10 "
            src={`/img/project/main${length}.png`}
            width={1920}
            priority
            height={1080}
            alt={title}
          />
        </Link>
        <h3 className="tracking-widest dark:text-slate-600 text-xs font-medium title-font mb-4 mt-4">
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
          {!tablet ? (
            <span className="text-base block text-cyan-100 pb-5 dark:text-cyan-900">
              {descM}
            </span>
          ) : (
            <span className="text-base block text-cyan-100 pb-5 dark:text-cyan-900">
              {desc}
            </span>
          )}
          <span className="text-base block text-cyan-100 dark:text-cyan-900">
            {team}
          </span>
        </div>
        <span className="text-xs font-medium absolute text-cyan-100 dark:text-cyan-900 block bottom-4">
          작업기간 : {start} ~ {end} ({calcDate(start, end)}) 일
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
