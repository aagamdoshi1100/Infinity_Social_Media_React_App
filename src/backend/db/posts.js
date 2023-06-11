import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Trump told his guests that the plan of attack was prepared for him by the Department of Defense and a senior military official, adding that as president he could have declassified the document he was showing.",
    image : "https://c.ndtvimg.com/2021-01/2fdj66ts_donald-trump-bloomberg_625x300_14_January_21.jpg",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: "2023-06-10",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The India Meteorological Department (IMD) said on Saturday that ‘very severe’ cyclonic storm Biparjoy is expected to intensify further in the next twenty-four hours and will move north-northeastwards.",
    image :"https://assets.telegraphindia.com/telegraph/2023/May/1684153138_cyclonenew.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: "2022-12-25",
    updatedAt: formatDate(),
  },
];
