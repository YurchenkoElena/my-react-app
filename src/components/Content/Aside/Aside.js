import React from "react";
import {NavLink} from "react-router-dom";
import ClockContainer from "./Clock/ClockContainer";
import CitesContainer from "./Cites/CitesContainer";

const Aside = () => {
  return (
      <aside className="aside">
          <div className="aside-menu">
              <div><NavLink to="/profile">Profile </NavLink></div>
              <div><NavLink to="/messages">Messages</NavLink></div>
              <div><NavLink to="/settings">Settings </NavLink></div>

              <div className="fined-users"><NavLink to="/users">Find users </NavLink></div>

          </div>

          {/*<Clock />*/}
          <ClockContainer />

          <CitesContainer />

      </aside>
  );
};

export default Aside;