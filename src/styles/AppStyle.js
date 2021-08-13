import { makeStyles } from "@material-ui/core/styles";

const AppStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  button: {
    borderRadius: 50 + "%",
    minWidth: "2em",
    height: "3em",
    margin: 0,
  },
  divider: {
    marginTop: 15,
  },
  editButton: {
    background: "#3f51b5",
    "&:hover": {
      background: "#757de8",
    },
    marginRight: 5,
  },
}));

export default AppStyle;
