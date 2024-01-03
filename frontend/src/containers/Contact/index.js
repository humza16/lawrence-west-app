import React from "react";
import { useSelector } from "react-redux";
const Contact = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h2>Contact:{count}</h2>
    </div>
  );
};

export default Contact;
