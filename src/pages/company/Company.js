import React from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import CompanyForm from "../../components/forms/CompanyForm";

function Company() {
  return (
    <AppLayout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                gutterBottom
              >
                Company
              </Typography>
              <Divider />

              <CompanyForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default Company;
