import React, { useEffect } from "react";
import "../App.css";
import User from "../components/User";
import { getUsers } from "../store/asyncAction/getUsers";
import { useAppDispatch, useAppSelector } from "../store/store";

const GitHub = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: any) => state.users);

  const [inputValue, setInputValue] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);

  useEffect(() => {
    if (active === true && inputValue.trim().length > 0) {
      dispatch(getUsers(inputValue));
      setActive(false);
    }
  }, [active]);
  return (
    <div className="github">
      <h2>GITHUB</h2>
      <div>
        <label htmlFor="input">Github username: </label>
        <input
          id="input"
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Github username..."
        />
        <button onClick={() => setActive(!active)}>get</button>
      </div>
      <ul>
        {state.isLoading ? (
          <div>Loading...</div>
        ) : state.isError ? (
          state.isError
        ) : (
          state.users.map((item: any) => <User key={item.id} item={item} />)
        )}
      </ul>
    </div>
  );
};

export default GitHub;
