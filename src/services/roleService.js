import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getRoles = async () => {
  const res = await axios.get(`${apiUrl}/roles`);

  return res;
};

export const roleService = {
  getRoles,
};
