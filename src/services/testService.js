import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getTests = async () => {
  const res = await axios.get(`${apiUrl}/tests`);

  return res;
};

const getTest = async (testId) => {
  const res = await axios.get(`${apiUrl}/tests/${testId}`);

  return res;
};

const createTest = async (request) => {
  const res = await axios.post(`${apiUrl}/tests`, request);

  return res;
};

const updateTest = async (testId, request) => {
  const res = await axios.put(`${apiUrl}/tests/${testId}`, request);

  return res;
};

const deleteTest = async (testId) => {
  const res = await axios.delete(`${apiUrl}/tests/${testId}`);
  return res;
};

export const testService = {
  getTests,
  getTest,
  createTest,
  updateTest,
  deleteTest,
};
