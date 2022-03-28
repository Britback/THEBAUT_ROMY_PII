import React from "react";
import Skiimage from "./images/ski.jpg";
import { Image } from "react-native";
import ticket1 from "./images/ticket1.jpg";
import ticket2 from "./images/ticket2.jpg";
import Logo from "./images/logo.png";

export const Items = [
  {
    id: 1,
    vacName: "Ski 2022",
    date: "21/03/2022 - 26/03/2022",
    collabName: "John, Ana",
    isDone: false,
    vacImage: require("./images/logo.png"),
    ticketsPdf: require("./images/ticket1.jpg"),
  },
  {
    id: 2,
    vacName: "Ski 2021",
    date: "28/03/2021 - 02/04/2021",
    collabName: "John, Fred",
    isDone: true,
    vacImage: require("./images/logo.png"),
    ticketsPdf: [
      require("./images/ticket1.jpg"),
      require("./images/ticket2.jpg"),
    ],
  },
  {
    id: 3,
    vacName: "Bahamas",
    date: "? - ?",
    collabName: "Momo, Fred",
    isDone: false,
    vacImage: require("./images/logo.png"),
    ticketsPdf: [
      require("./images/ticket1.jpg"),
      require("./images/ticket2.jpg"),
    ],
  },
];
