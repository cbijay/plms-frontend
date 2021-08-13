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
import {
  getTechnicians,
  deleteTechnician,
} from "../../store/actions/techniciansAction";
import AppStyle from "../../styles/AppStyle";
import { Link, useHistory } from "react-router-dom";

function Technicians() {
  const classes = AppStyle();
  const { technicians } = useSelector((state) => state.technicians);
  const history = useHistory();
  const dispatch = useDispatch();
  const columns = [
    { headingName: "#" },
    { headingName: "Name" },
    { headingName: "License No" },
    { headingName: "Specialization" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getTechnicians());
  }, [dispatch]);

  const handleEdit = (id) => {
    history.push("edit-technician/" + id);
  };

  const handleDelete = (id) => {
    dispatch(deleteTechnician(id));
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
                Technicians
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="small"
                component={Link}
                to="/add-technician"
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
              {technicians.length > 0 ? (
                technicians.map((technician, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell> {technician.name} </TableCell>
                    <TableCell> {technician.license_num} </TableCell>
                    <TableCell> {technician.specialization} </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.editButton}
                        onClick={() => handleEdit(technician.id)}
                      >
                        <CreateIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        onClick={() => handleDelete(technician.id)}
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

export default Technicians;
