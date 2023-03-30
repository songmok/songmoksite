import { AboutCss } from "./AboutCss";

const About = () => {
  return (
    <AboutCss>
      <embed
        src={`${process.env.PUBLIC_URL}/pdf/info.pdf`}
        width="100%"
        height="960px"
      />
    </AboutCss>
  );
};

export default About;
