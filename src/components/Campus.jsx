import React from "react";
import styles from "../App.module.css";
import FormData from "./form.jsx";
import PhotoDiv from "./photoDiv.jsx";
import UseValue from "./contextApi.jsx";

export default function Campus() {
  const { modal, handleModal } = UseValue();

  return (
    <div className={styles.campusCopy}>
      <div className={styles.campusDiv}>
        {modal && (
          <div className={styles.modalDiv}>
            <button className={styles.modalButton} onClick={handleModal}>
              <img src="./delete.png" alt="" className={styles.delete} />
            </button>
            <div className={styles.formDiv}>
              <FormData />
            </div>
          </div>
        )}
        <div className={styles.photoDiv} onClick={handleModal}>
          <PhotoDiv />
        </div>
        <div className={styles.formDiv}>
          <FormData />
        </div>
      </div>
    </div>
  );
}
