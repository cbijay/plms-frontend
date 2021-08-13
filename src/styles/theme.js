import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4caf50",
      dark: "#3a993e",
      contrastText: "#fff",
    },
    default: {
      main: "#fff",
      dark: "#eee",
      contrastText: "#333",
    },
  },
});

theme.overrides = {
  MuiAvatar: {
    root: {
      margin: theme.spacing(1),
      minHeight: 80,
      width: 20 + "%",
    },
    colorDefault: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  MuiFormControl: {
    marginNormal: {
      marginTop: 0,
      marginBottom: theme.spacing(3),
    },
  },
  Input: {},
  MuiButton: {
    root: {
      textTransform: "capitalize",
    },
    containedPrimary: {
      backgroundColor: theme.palette.primary.main,
      margin: theme.spacing(0, 0, 3),
    },
  },
  MuiAppBar: {
    root: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  MuiSelect: {
    select: {
      transition: "none !important",
    },
  },
};

export default theme;
