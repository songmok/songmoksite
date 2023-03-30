 import { FooterCss } from "./FooterCss";

const Footer = () => {
  function openNewTab(url: string) {
    window.open(url, "_blank");
  }
  return (
    <>
      <FooterCss>
        <div onClick={() => openNewTab("/about")}>이력서 입니다</div>
      </FooterCss>
    </>
  );
};

export default Footer;
