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
import clsx from "clsx";
import {
  Add as AddIcon,
  Create as CreateIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getTests, deleteTest } from "../../store/actions/testAction";
import AppStyle from "../../styles/AppStyle";
import { Link, useHistory } from "react-router-dom";

function Tests() {
  const classes = AppStyle();
  const { tests } = useSelector((state) => state.tests);
  const history = useHistory();
  const dispatch = useDispatch();
  const columns = [
    { headingName: "#" },
    { headingName: "Name" },
    { headingName: "Order" },
    { headingName: "Cost" },
    { headingName: "Normal Range" },
    { headingName: "Default Value" },
    { headingName: "Unit" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);

  const handleEdit = (id) => {
    history.push("edit-test/" + id);
  };

  const handleDelete = (id) => {
    dispatch(deleteTest(id));
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
                Tests
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="small"
                component={Link}
                to="/add-test"
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
              {tests.length > 0 ? (
                tests.map((test, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell> {test.name} </TableCell>
                    <TableCell> {test.order} </TableCell>
                    <TableCell> {test.cost} </TableCell>
                    <TableCell> {test.normal_range} </TableCell>
                    <TableCell> {test.default_value} </TableCell>
                    <TableCell> {test.unit} </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={clsx(classes.editButton, classes.button)}
                        onClick={() => handleEdit(test.id)}
                      >
                        <CreateIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        onClick={() => handleDelete(test.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8}>No record found!!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}

export default Tests;
