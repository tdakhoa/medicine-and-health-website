import * as React from "react";
import { styled, Tabs as MuiTabs, Tab, Box } from "@mui/material";

import Typography from "../Typography/Typography";
import { cardDataNews, cardDataPopular } from "../../constants";

export default function Tabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Root>
            <Box>
                <MyTabs value={value} onChange={handleChange} centered>
                    <Tab label="Nổi bật" />
                    <Tab label="Gần đây" />
                </MyTabs>
            </Box>
            <TabPanel value={value} index={0} data={cardDataPopular} />
            <TabPanel value={value} index={1} data={cardDataNews} />
        </Root>
    );
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, data, ...other } = props;

    return (
        <Box role="tabpanel" hidden={value !== index} {...other}>
            {value === index && (
                <Box sx={{ p: 0, pt: 3 }}>
                    {data?.map((item, i) => (
                        <div key={i}>
                            <MiniCard title={item.title} date={item.date} img={item.img} />
                            {i != data?.length - 1 ? <Divider /> : null}
                        </div>
                    ))}
                </Box>
            )}
        </Box>
    );
};

const MiniCard = ({ title = "", date = "", img = "", ...props }: MiniCardProps) => {
    return (
        <ImgBox>
            <img src={img} alt="mini card img" />
            <Box>
                <Typography weight="bold" transform="uppercase">
                    {title}
                </Typography>
                <Typography weight="light" size="small" sx={{ fontStyle: "italic" }}>
                    {date}
                </Typography>
            </Box>
        </ImgBox>
    );
};

interface Data {
    title?: string;
    date?: string;
    img?: string;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    data: Data[];
}
interface MiniCardProps {
    title?: string;
    date?: string;
    img?: string;
}

const MyTabs = styled(MuiTabs)(() => ({
    "& .MuiTabs-flexContainer": {
        gap: "1rem"
    },
    "& .MuiTabs-indicator": {
        display: "none"
    },
    "& .MuiTab-root": {
        padding: "0.6rem 2rem ",
        borderRadius: 999,
        textTransform: "initial",
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 700,
        fontSize: "1rem",
        border: "1px solid var(--palette-02)",
        color: "var(--palette-02)"
    },
    "& .Mui-selected": {
        border: "none",
        background: "linear-gradient(90deg, #176076 0.04%, rgba(23, 96, 118, 0.5) 99.96%)",
        color: "white !important"
    }
}));

const Root = styled(Box)(({ theme }) => ({
    width: "100%",
    border: "0.5px solid rgba(23, 96, 118, 0.4)",
    borderRadius: "10px",
    padding: "1.5rem"
}));

const Divider = styled(Box)(({ theme }) => ({
    height: "1px",
    background: "linear-gradient(90deg, rgba(23, 96, 118, 0) 0.04%, rgba(23, 96, 118, 0.6) 55.73%)",
    margin: "1rem 0rem"
}));

const ImgBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "70px",
    display: "flex",
    alignItems: "stretch",
    gap: "1rem",
    "& img": {
        width: "30%",
        objectFit: "cover",
        borderRadius: "10px"
    }
}));
