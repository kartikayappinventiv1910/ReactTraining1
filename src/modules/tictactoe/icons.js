import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case circle:
      return <FaRegCircle />;
      break;
    case cross:
      return <FaTimes />;
      break;
    default:<FaPen />;
      break;
  }
};

export default Icon;
