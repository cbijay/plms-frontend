import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getGroups = async () => {
  const res = await axios.get(`${apiUrl}/group`);

  return res;
};

const getGroup = async (groupId) => {
  const res = await axios.get(`${apiUrl}/group/${groupId}`);

  return res;
};

const getOnlyGroups = async () => {
  const res = await axios.get(`${apiUrl}/group/only`);

  return res;
};

const getSubGroups = async () => {
  const res = await axios.get(`${apiUrl}/group/sub`);

  return res;
};

const createGroup = async (request) => {
  const res = await axios.post(`${apiUrl}/group`, request);

  return res;
};

const updateGroup = async (groupId, request) => {
  const res = await axios.put(`${apiUrl}/group/${groupId}`, request);

  return res;
};

const deleteGroup = async (groupId) => {
  const res = await axios.delete(`${apiUrl}/group/${groupId}`);
  return res;
};

export const groupService = {
  getGroups,
  getGroup,
  getSubGroups,
  getOnlyGroups,
  createGroup,
  updateGroup,
  deleteGroup,
};
