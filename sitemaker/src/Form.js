import React from "react";
import "./css/index.css";
import Draggable from "react-draggable";

function Form() {
  return (
    <Draggable bounds="body">
      <div className="form">
        <form>
          <div className="info">
            <h1>Header Info</h1>
            <div className="inputHolder">
              <input placeholder="Title here..." />
            </div>
            <div className="inputHolder">
              <input placeholder="Link one here..." />
            </div>
            <div className="inputHolder">
              <input placeholder="Link two here..." />
            </div>
            <div className="inputHolder">
              <input placeholder="Link three here..." />
            </div>
            <div className="inputHolder">
              <input placeholder="Link four here..." />
            </div>
          </div>
          <button>Add button here.</button>

          {/* <div className="info">
            <h1>Body Info</h1>
            <input placeholder="Photo upload..." />
            <input placeholder="Content here..." />
            <button>Add button here</button>
          </div>
          <div className="info">
            <h1>Footer Info</h1>
            <input placeholder="Address here..." />
            <input placeholder="Phone here..." />
            <input placeholder="email here..." />
            <input placeholder="icon links here..." />
            <button>Add button here</button>
          </div> */}
        </form>
      </div>
    </Draggable>
  );
}
export default Form;
