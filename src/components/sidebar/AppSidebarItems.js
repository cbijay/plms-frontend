import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import {
  Person as PersonIcon,
  Business as BusinessIcon,
  Group as GroupWorkIcon,
  Assignment as AssignmentIcon,
  People as PeopleIcon,
  LocalHospital as LocalHospitalIcon,
  PersonAdd as PersonAddIcon,
  Receipt as ReceiptIcon,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export const AppSidebarItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/company">
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Company" />
    </ListItem>
    <ListItem button component={Link} to="/users">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button component={Link} to="/groups">
      <ListItemIcon>
        <GroupWorkIcon />
      </ListItemIcon>
      <ListItemText primary="Test Group" />
    </ListItem>
    <ListItem button component={Link} to="/tests">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Tests" />
    </ListItem>
    <ListItem button component={Link} to="/doctors">
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <ListItemText primary="Doctors" />
    </ListItem>
    <ListItem button component={Link} to="/technicians">
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Lab Technicians" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Patients" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Billing" />
    </ListItem>
  </div>
);
