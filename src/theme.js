import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#176076"
        },
        secondary: {
            main: "#176076"
        },
        error: {
            main: "#176076"
        },
        mode: "light"
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Nunito"
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: "Nunito"
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    fontFamily: "Nunito"
                }
            }
        }
    }
});

export default theme;
