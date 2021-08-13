import React from "react";
import { CssBaseline, Box, Container, withStyles } from "@material-ui/core";
import Copyright from "../components/footer/Copyright";
import { Avatar, Typography } from "@material-ui/core";
import theme from "../styles/theme";

const styles = () => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing(3),
  },
});

function AuthLayout({ children, classes }) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar>PLMS</Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          Sign in
        </Typography>

        {children}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default withStyles(styles)(AuthLayout);
