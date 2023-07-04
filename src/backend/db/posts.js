import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:"Mahadev🙏",
    image :"https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
    likes: {
      likeCount: 65,
      likedBy: [],
      dislikedBy: [],
    },
    isBookMarked:false,

    username: "Ak",
    createdAt: "2023-06-25",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I have purchased this mobile as a gift to myself to celebrate the completion of my first project on React.",
    image: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/04/Redmi-Note-11-Pro-Plus-3-scaled.jpeg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    isBookMarked:false,

    username: "AD",
    createdAt: "2023-06-14",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Way to Kerala 🏃‍♀️",
    image : "https://himachaltourpackage.co.in/wp-content/uploads/2020/07/Himachal-Toy-TrainTour-Package-scaled.jpg",
    likes: {
      likeCount: 30,
      likedBy: [],
      dislikedBy: [],
    },
    isBookMarked:false,

    username: "ParthThakkar",
    createdAt: "2023-05-25",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Trump told his guests that the plan of attack was prepared for him by the Department of Defense and a senior military official, adding that as president he could have declassified the document he was showing.",
    image : "https://c.ndtvimg.com/2021-01/2fdj66ts_donald-trump-bloomberg_625x300_14_January_21.jpg",
    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: [],
    },
    isBookMarked:false,

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
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    isBookMarked:false,

    username: "shubhamsoni",
    createdAt: "2022-12-25",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"First Love💖",
    image :"https://images.cnbctv18.com/wp-content/uploads/2022/07/Cricket-Shutterstock-1019x573.jpg?im=FitAndFill,width=1200,height=900",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    isBookMarked:false,

    username: "ParthShah",
    createdAt: "2022-12-25",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"Family Time😍",
    image :"https://www.informedfamilies.org/hubfs/family-dinner-flash-992108418.jpeg",
    likes: {
      likeCount: 45,
      likedBy: [],
      dislikedBy: [],
    },
    isBookMarked:false,

    username: "GaneshPardhe",
    createdAt: "2023-06-25",
    updatedAt: formatDate(),
  },
];
