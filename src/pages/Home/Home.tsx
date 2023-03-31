import { Link } from "react-router-dom";
import { HomeCss } from "./style/HomeCss";
import Header from "../../components/common/Header/Header";
import { SwiperCss } from "./style/SwiperCss";
import { NotionCss } from "./style/NotionCss";
import Footer from "../../components/common/Footer/Footer";
import Slide from "../../components/Slide/Slide";
import notion from "../../assets/images/stacks/notion.png";
const Home = () => {
  return (
    <>
      <HomeCss>
        <Header headerText={""} headerLink={"/"} ngnb={0} />
        <SwiperCss>
          <Slide />
        </SwiperCss>
        <NotionCss>
          <Link
            to="https://ultra-relish-e13.notion.site/0f81e7ec1af1422294b3297c0308c825"
            target="_blank"
          >
            <span>
              <img src={notion} alt="" />
              <h2>노션입니다!</h2>
            </span>
          </Link>
          {/* <Link to="/study">
            <span>STUDY PAGE로 이동하기!</span>
          </Link> */}
        </NotionCss>
        <Footer />
      </HomeCss>
    </>
  );
};

export default Home;
