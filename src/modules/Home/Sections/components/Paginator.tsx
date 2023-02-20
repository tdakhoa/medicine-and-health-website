import { Box, styled } from "@mui/material";

const Paginator = ({ dataLength, activeIndex, handlePageChange }: PaginatorProps) => {
    let dots = [];
    for (let index = 0; index < dataLength; index++) {
        dots.push(
            <DotBox
                key={index}
                sx={activeIndex === index ? { boxShadow: "0 0 0 2px var(--palette-02)", backgroundColor: "white" } : {}}
                onClick={() => handlePageChange(index)}></DotBox>
        );
    }
    return <Box sx={paginator}>{dots.map((dot) => dot)}</Box>;
};

export default Paginator;

interface PaginatorProps {
    dataLength: number;
    activeIndex: number;
    handlePageChange: (index: number) => void;
}

const paginator = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    alignItems: "center",
    position: "absolute",
    bottom: { xs: "-0.5rem", sm: "-4.5rem", lg: "-6rem" },
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "30rem",
    height: "2rem",
    zIndex: 1
};

const DotBox = styled(Box)(({ theme }) => ({
    height: 10,
    width: 10,
    borderRadius: "50%",
    backgroundColor: "var(--palette-02)",
    zIndex: 1,
    transition: "all 1s",
    "&:hover": {
        cursor: "pointer"
    }
}));
