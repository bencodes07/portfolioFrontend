import React from "react";

function Taskbar(props) {
  return (
    <>
      <div className="taskBar">
        <label id="start">
          <span className="label">Start</span>
        </label>
        <div className="taskBarItems"></div>
      </div>
    </>
  );
}

export default Taskbar;
