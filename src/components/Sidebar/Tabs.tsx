import * as React from "react";
import { styled, Tabs as MuiTabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "../Typography/Typography";

const MyTabs = styled(MuiTabs)(() => ({
  "& .MuiTabs-flexContainer": {
    gap: "1rem",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTab-root": {
    padding: "0.6rem 2rem ",
    borderRadius: 999,
    textTransform: "initial",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: "1rem",
    border: "1px solid var(--palette-02)",
    color: "var(--palette-02)",
  },
  "& .Mui-selected": {
    border: "none",
    background: "linear-gradient(90deg, #176076 0.04%, rgba(23, 96, 118, 0.5) 99.96%)",
    color: "white !important",
  },
}));

export default function Tabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        border: "0.5px solid rgba(23, 96, 118, 0.4)",
        borderRadius: "10px",
        padding: "1rem 0.5rem",
      }}
    >
      <Box>
        <MyTabs value={value} onChange={handleChange} centered>
          <Tab label="Nổi bật" />
          <Tab label="Gần đây" />
        </MyTabs>
      </Box>
      <TabPanel value={value} index={0} data={cardDataPopular} />
      <TabPanel value={value} index={1} data={cardDataNews} />
    </Box>
  );
}

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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, data, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {data?.map((item, i) => (
            <>
              <MiniCard title={item.title} date={item.date} img={item.img} key={i} />
              {i != data?.length - 1 ? (
                <Box
                  sx={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(23, 96, 118, 0) 0.04%, rgba(23, 96, 118, 0.6) 55.73%)",
                    margin: "1rem 0rem",
                  }}
                ></Box>
              ) : null}
            </>
          ))}
        </Box>
      )}
    </div>
  );
}

interface MiniCardProps {
  title?: string;
  date?: string;
  img?: string;
}
const MiniCard = ({ title = "", date = "", img = "", ...props }: MiniCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "70px",
        display: "flex",
        alignItems: "stretch",
        gap: "1rem",
        "& img": { width: "30%", objectFit: "cover", borderRadius: "10px" },
      }}
    >
      <img src={img} alt="mini card img" />
      <Box>
        <Typography weight="bold" sx={{ textTransform: "uppercase" }}>
          {title}
        </Typography>
        <Typography weight="light" size="small" sx={{ fontStyle: "italic" }}>
          {date}
        </Typography>
      </Box>
    </Box>
  );
};

const cardDataPopular = [
  {
    title: "THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ",
    date: "15 Jan 2023",
    img: "https://images.unsplash.com/photo-1666214277730-e9c7e755e5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ",
    date: "15 Jan 2023",
    img: "https://images.unsplash.com/photo-1666214277730-e9c7e755e5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ",
    date: "15 Jan 2023",
    img: "https://images.unsplash.com/photo-1666214277730-e9c7e755e5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ",
    date: "15 Jan 2023",
    img: "https://images.unsplash.com/photo-1666214277730-e9c7e755e5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const cardDataNews = [
  {
    title: "THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ2",
    date: "15 Jan 2023",
    img: "https://images.unsplash.com/photo-1666214277730-e9c7e755e5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ2",
    date: "15 Jan 2023",
    img: "https://images.unsplash.com/photo-1666214277730-e9c7e755e5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ2",
    date: "15 Jan 2023",
    img: "https://images.unsplash.com/photo-1666214277730-e9c7e755e5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ2",
    date: "15 Jan 2023",
    img: "https://images.unsplash.com/photo-1666214277730-e9c7e755e5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];
