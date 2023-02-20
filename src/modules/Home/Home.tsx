import Hero from "./Sections/Hero";
import CardSection from "./Sections/CardCarousel";
import NormalSection from "./Sections/Normal";
import MixSection from "./Sections/Mix";
import News from "./Sections/News";
import AlternateSection from "./Sections/Alternate";
import Layout from "../Layout";
import { homeData } from "../../constants";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <News />
            {homeData.slice(1, homeData.length - 1).map((item, i) => {
                const Section = layouts[i % 4];
                return <Section key={i} title={item.title} link={item.link} data={item.data} />;
            })}
        </Layout>
    );
};

export default Home;

const layouts = [NormalSection, AlternateSection, CardSection, MixSection];
