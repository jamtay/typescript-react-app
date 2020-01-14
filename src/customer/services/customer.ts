import axios from 'axios';
import { Customer } from "../models/Customer";
const BASE_URL: string = 'http://localhost:3000/api/v1/contact';
axios.defaults.baseURL = BASE_URL;

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await axios.get('');
  return response.data;
};

export const getCustomer = async (id: number): Promise<Customer> => {
  const response = await axios.get(`/${id}`);
  return response.data;
};

export const createNewCustomer = async (customer: Customer): Promise<void> => {
  await axios.post('', customer);
};

export const updateCustomer = async (customer: Customer, id: number): Promise<void> => {
  await axios.put(`/${id}`, customer);
};

export const deleteCustomer = async (id: number): Promise<void> => {
  await axios.delete(`/${id}`);
};


