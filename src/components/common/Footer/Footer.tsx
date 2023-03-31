import { FooterCss } from "./FooterCss";

const Footer = () => {
  function openNewTab(url: string) {
    window.open(url, "_blank");
  }
  return (
    <>
      <FooterCss>
        <div onClick={() => openNewTab("/about")}>
          <h2>이력서 입니다!</h2>
        </div>
      </FooterCss>
    </>
  );
};

export default Footer;
