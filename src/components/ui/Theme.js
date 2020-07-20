import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
      main: "white"
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "raleway",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      color: "white",
      fontSize: "1rem",
      textTransform: "none",
    }
  },
});
