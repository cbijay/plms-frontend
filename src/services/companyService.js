import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getCompany = async () => {
  const res = await axios.get(`${apiUrl}/company`);

  return res;
};

const createUpdateCompany = async (request) => {
  const res = await axios.post(`${apiUrl}/company`, request);

  return res;
};

export const companyService = {
  getCompany,
  createUpdateCompany,
};
