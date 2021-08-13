import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Create as CreateIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors, deleteDoctor } from "../../store/actions/doctorsAction";
import AppStyle from "../../styles/AppStyle";
import { Link, useHistory } from "react-router-dom";

function Doctors() {
  const classes = AppStyle();
  const { doctors } = useSelector((state) => state.doctors);
  const history = useHistory();
  const dispatch = useDispatch();
  const columns = [
    { headingName: "#" },
    { headingName: "Name" },
    { headingName: "Email" },
    { headingName: "Contact Name" },
    { headingName: "Hopsital/Clinic" },
    { headingName: "Specialization" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const handleEdit = (id) => {
    history.push("edit-doctor/" + id);
  };

  const handleDelete = (id) => {
    dispatch(deleteDoctor(id));
  };

  return (
    <AppLayout>
      <Card>
        <CardContent>
          <Grid container justify="space-between" spacing={10}>
            <Grid item>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                noWrap
              >
                Doctors
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="small"
                component={Link}
                to="/add-doctor"
              >
                <AddIcon />
              </Button>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index}>{column.headingName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.length > 0 ? (
                doctors.map((doctor, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell> {doctor.name} </TableCell>
                    <TableCell> {doctor.email} </TableCell>
                    <TableCell> {doctor.contact} </TableCell>
                    <TableCell> {doctor.hospital_clinic} </TableCell>
                    <TableCell> {doctor.specialization} </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.editButton}
                        onClick={() => handleEdit(doctor.id)}
                      >
                        <CreateIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        onClick={() => handleDelete(doctor.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7}>No record found!!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}

export default Doctors;
