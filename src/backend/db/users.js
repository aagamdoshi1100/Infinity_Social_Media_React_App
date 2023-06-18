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
    profileIcon: "https://shorturl.at/avzC3",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "shubham",
    lastName: "soni",
    profileIcon: "https://shorturl.at/avzC3",
    username: "shubhamsoni",
    password: "ashubhamsoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Aagam",
    lastName: "Doshi",
    profileIcon: "https://shorturl.at/avzC3",
    username: "AD",
    password: "AD123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Parth",
    lastName: "Thakkar",
    profileIcon: "https://shorturl.at/avzC3",
    username: "ParthThakkar",
    password: "ParthThakkar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ganesh",
    lastName: "Pardhe",
    profileIcon: "https://shorturl.at/avzC3",
    username: "GaneshPardhe",
    password: "GaneshPardhe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Akshay",
    lastName: "Zangrukiya",
    profileIcon: "https://shorturl.at/avzC3",
    username: "Ak",
    password: "Ak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Parth",
    lastName: "Shah",
    profileIcon: "https://shorturl.at/avzC3",
    username: "ParthShah",
    password: "ParthShah123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
