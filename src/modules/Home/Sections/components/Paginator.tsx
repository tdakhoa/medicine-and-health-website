import { Box, styled } from "@mui/material";

const paginator = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "-8rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "30rem",
    height: "2rem",
    zIndex: 1
};

const DotBox = styled(Box)(({ theme }) => ({
    height: "1rem",
    width: "1rem",
    borderRadius: "50%",
    backgroundColor: "gray",
    zIndex: "1",
    transition: "all 1s",
    "&:hover": {
        cursor: "pointer"
    }
}));

const hr = {
    position: "absolute",
    width: "100%",
    height: "2px",
    backgroundColor: "gray"
};

interface PaginatorProps {
    dataLength: number;
    activeIndex: number;
    handlePageChange: (index: number) => void;
}

const Paginator = ({ dataLength, activeIndex, handlePageChange }: PaginatorProps) => {
    let dots = [];
    for (let index = 0; index < dataLength; index++) {
        dots.push(
            <DotBox
                key={index}
                sx={activeIndex === index ? { boxShadow: "0 0 0 4px grey", backgroundColor: "white" } : {}}
                onClick={() => handlePageChange(index)}></DotBox>
        );
    }
    return (
        <Box sx={paginator}>
            <Box sx={hr}></Box>
            {dots.map((dot) => dot)}
        </Box>
    );
};

export default Paginator;
