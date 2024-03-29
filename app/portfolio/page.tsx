import { TOKEN, DATABASE_ID, DATABASE_ID2 } from "../../config";
import CloneItem from "../components/_portfolio/_clone/CloneItem";
import ProjectItem from "../components/_portfolio/_project/ProjectItem";

export type ICloneData = {
  id: number;
  url: string;
  properties: IProperties;
  RepUrl: string;
  GitUrl: string;
  ReplitUrl: string;
  cover: ICover;
};
export type IProjectData = {
  id: number;
  url: string;
  properties: IProperties;
  GitUrl: string;
  cover: ICover;
};
type ICover = {
  file: { url: string };
  external: {
    url: string;
  };
};
type IProperties = {
  Dated: {
    date: {
      start: string;
      end: string;
    };
  };
  Name: {
    title: {
      text: {
        content: string;
      };
      plain_text: string;
    }[];
  };
  Git: {
    url: string;
  };
  Replit: {
    url: string;
  };
  Tags: {
    multi_select: { id: string; name: string; color: string }[];
  };
  description: {
    rich_text: {
      plain_text: string;
    }[];
  };
  team: {
    rich_text: {
      plain_text: string;
    }[];
  };
  descMob: {
    rich_text: {
      plain_text: string;
    }[];
  };
};
export type ILength = {
  imgLength: number;
};
export default async function Portfolio() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },

    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };
  const p1 = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const p2 = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID2}/query`,
    options
  );
  const projects = await p1.json();
  const projects2 = await p2.json();

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl font-medium skytxt tracking-widest">
          POTFOLIO
        </h1>
        <div className="container relative mt-12">
          <span className="absolute inset-x-0 bottom-0 after:block after:h-1 after:dark:bg-white after:bg-black"></span>
        </div>
      </div>
      <div className="flex flex-col md:block">
        <div className="flex container px-5 mx-auto lg:items-start flex-col items-center">
          <h2 className="dark:text-slate-200 text-slate-800 text-2xl font-medium">
            Main project : {projects.results.length}
          </h2>
        </div>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap justify-center -m-4 ">
            {projects.results.map((v: IProjectData, i: number) => (
              <div key={v.id} className="w-full md:w-1/2 mb-8 p-4">
                <ProjectItem data={v} length={i} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex container px-5 mx-auto lg:items-start flex-col items-center">
          <h2 className="dark:text-slate-200 text-slate-800 text-2xl font-medium">
            Clone project : {projects2.results.length}
          </h2>
        </div>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {projects2.results.map((v: ICloneData, i: number) => (
              <div key={v.id} className="w-full md:w-1/2 mb-8 p-4">
                <CloneItem key={v.id} data={v} length={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
