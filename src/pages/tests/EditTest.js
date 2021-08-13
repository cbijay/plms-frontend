import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import TestForm from "../../components/forms/TestForm";
import { useSelector, useDispatch } from "react-redux";
import { getTest } from "../../store/actions/testAction";

function EditTest({ match }) {
  const { test } = useSelector((state) => state.tests);
  const dispatch = useDispatch();
  const testId = match.params.id;

  useEffect(() => {
    dispatch(getTest(testId));
  }, [dispatch, testId]);

  return (
    <AppLayout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                gutterBottom
              >
                Edit Test
              </Typography>
              <Divider />

              <TestForm mode="edit" test={test} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default EditTest;
