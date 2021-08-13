import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getUsers = async () => {
  const res = await axios.get(`${apiUrl}/users`);

  return res;
};

const getUser = async (userId) => {
  const res = await axios.get(`${apiUrl}/users/${userId}`);

  return res;
};

const createUser = async (request) => {
  const res = await axios.post(`${apiUrl}/users`, request);

  return res;
};

const updateUser = async (userId, request) => {
  const res = await axios.put(`${apiUrl}/users/${userId}`, request);

  return res;
};

const deleteUser = async (userId) => {
  const res = await axios.delete(`${apiUrl}/users/${userId}`);
  return res;
};

export const usersService = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
