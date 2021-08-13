import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import TechnicianForm from "../../components/forms/TechnicianForm";
import { useSelector, useDispatch } from "react-redux";
import { getTechnician } from "../../store/actions/techniciansAction";

function EditTechnician({ match }) {
  const { technician } = useSelector((state) => state.technicians);
  const dispatch = useDispatch();
  const technicianId = match.params.id;

  useEffect(() => {
    dispatch(getTechnician(technicianId));
  }, [dispatch, technicianId]);

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
                Edit Technician
              </Typography>
              <Divider />

              <TechnicianForm mode="edit" technician={technician} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default EditTechnician;
