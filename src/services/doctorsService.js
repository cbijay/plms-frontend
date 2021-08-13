import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getDoctors = async () => {
  const res = await axios.get(`${apiUrl}/doctors`);

  return res;
};

const getDoctor = async (doctorId) => {
  const res = await axios.get(`${apiUrl}/doctors/${doctorId}`);

  return res;
};

const createDoctor = async (request) => {
  const res = await axios.post(`${apiUrl}/doctors`, request);

  return res;
};

const updateDoctor = async (doctorId, request) => {
  const res = await axios.put(`${apiUrl}/doctors/${doctorId}`, request);

  return res;
};

const deleteDoctor = async (doctorId) => {
  const res = await axios.delete(`${apiUrl}/doctors/${doctorId}`);
  return res;
};

export const doctorsService = {
  getDoctors,
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
