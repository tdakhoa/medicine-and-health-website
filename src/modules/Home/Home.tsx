import Hero from "./Sections/Hero";
import CardSection from "./Sections/CardCarousel";
import NormalSection from "./Sections/Normal";
import MixSection from "./Sections/Mix";
import News from "./Sections/News";
import AlternateSection from "./Sections/Alternate";
import Layout from "../Layout";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <News />
            {homeData.map((item, i) => {
                const Section = layouts[i % 4];
                return <Section key={i} title={item.title} link={item.link} />;
            })}
        </Layout>
    );
};

export default Home;

const layouts = [NormalSection, AlternateSection, CardSection, MixSection];

const homeData = [
    { title: "Giới thiệu", link: "/introduction", item: [] },
    { title: "Y học \n cổ truyền", link: "/category/traditional-medicine", item: [] },
    {
        title: "Thuốc",
        link: "/category/medicine",
        item: [
            { title: "Thuốc cấm lưu hành", link: "/category/medicine/non-circlating-medicine" },
            { title: "Thuốc khác", link: "/category/medicine/other-medicine" }
        ]
    },
    { title: "Tim mạch", link: "/category/cardiovascular", item: [] },
    {
        title: "Bệnh học",
        link: "/category/pathology",
        item: [
            { title: "Nha khoa", link: "/category/pathology/dental" },
            { title: "Nhi khoa", link: "/category/pathology/pediatric" },
            { title: "Sản khoa", link: "/category/pathology/obstetric" },
            { title: "Nội tiết", link: "/category/pathology/endocrinology" },
            { title: "Ung thư", link: "/category/pathology/cancer" },
            { title: "Tai - Mũi - Họng", link: "/category/pathology/otorhinolaryngology" },
            { title: "Cơ - Xương khớp", link: "/category/pathology/musculoskeletal" },
            { title: "Tâm thần", link: "/category/pathology/psychiatric" },
            { title: "Tiêu hoá", link: "/category/pathology/gastroenterology" }
        ]
    },
    { title: "Thông tin \n y dược", link: "/category/pharmacy-information", item: [] },
    { title: "Pháp luật \n y tế", link: "/category/medical-law", item: [] },
    { title: "Góc bạn đọc", link: "/introduction", item: ["/category/for-you"] }
];

interface Item {
    title: string;
    link: string;
}

interface SectionProps {
    title: string;
    link: string;
    item?: Item[];
}
