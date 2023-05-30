import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "../store/counterReducer";
import "../App.css";
import { UsersAndCounter } from "../types/types";
const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state: UsersAndCounter) => state.counter);

  return (
    <div className="counter">
      <h2>COUNTER</h2>
      <div>
        <button onClick={() => dispatch(inc())}>+</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(dec())}>-</button>
      </div>
    </div>
  );
};

export default Counter;
