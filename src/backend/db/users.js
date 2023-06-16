import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "shubham",
    lastName: "soni",
    username: "shubhamsoni",
    password: "ashubhamsoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Aagam",
    lastName: "Doshi",
    username: "AD",
    password: "AD123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Parth",
    lastName: "Thakkar",
    username: "ParthThakkar",
    password: "ParthThakkar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ganesh",
    lastName: "Pardhe",
    username: "GaneshPardhe",
    password: "GaneshPardhe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Akshay",
    lastName: "Zangrukiya",
    username: "Ak",
    password: "Ak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
