const About = () => {
  return (
    <>
      <embed
        src={`${process.env.PUBLIC_URL}/pdf/info.pdf`}
        width="100%"
        height="1080px"
        type="application/pdf"
      />
    </>
  );
};

export default About;
