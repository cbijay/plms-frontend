import React from "react";
import AppLayout from "../../layouts/AppLayout";
import clsx from "clsx";
import { Grid, Paper } from "@material-ui/core";
import AppStyle from "../../styles/AppStyle";

function Dashboard() {
  const classes = AppStyle();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <AppLayout>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>Chart</Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>Deposits</Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>Orders</Paper>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default Dashboard;
