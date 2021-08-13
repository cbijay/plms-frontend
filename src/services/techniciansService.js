import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getTechnicians = async () => {
  const res = await axios.get(`${apiUrl}/technicians`);

  return res;
};

const getTechnician = async (technicianId) => {
  const res = await axios.get(`${apiUrl}/technicians/${technicianId}`);

  return res;
};

const createTechnician = async (request) => {
  const res = await axios.post(`${apiUrl}/technicians`, request);

  return res;
};

const updateTechnician = async (technicianId, request) => {
  const res = await axios.put(`${apiUrl}/technicians/${technicianId}`, request);

  return res;
};

const deleteTechnician = async (technicianId) => {
  const res = await axios.delete(`${apiUrl}/technicians/${technicianId}`);
  return res;
};

export const techniciansService = {
  getTechnicians,
  getTechnician,
  createTechnician,
  updateTechnician,
  deleteTechnician,
};
