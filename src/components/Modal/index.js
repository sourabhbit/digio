import React, { useEffect } from "react";
import "./styles.css";

export default function Modal(props) {
  useEffect(() => {
    if (props.autoClose) {
      Promise.resolve("success").then(
        setTimeout(() => {
          props?.handleClose();
        }, 3000)
      );
    }
  }, []);
  return (
    <>
      {props.isVisible && (
        <div className="overlay">
          <div className={"ModalWrapper"}>
            <div className="ModalContent">
              <div className="flexCol">
                <div className="flex titleWrapper">
                  <p className="noMargin">{props.title}</p>
                  <button
                    className="closeButton"
                    type="button"
                    onClick={() => props?.handleClose()}
                  >
                    X
                  </button>
                </div>
                <p>{props.subtitle}</p>
                <hr />
                <div className={props.isSuccessfull ? "green" : ""}>
                  {props?.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
