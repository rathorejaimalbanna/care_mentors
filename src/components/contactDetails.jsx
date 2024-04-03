import React from 'react';
import styles from "../App.module.css";

export default function ContactDetails() {
  return (
    <div className={styles.contactDiv}>
      <div className={styles.contactDetails}>
          <a href="tel:+919899992467">
            <img src="./phone.png" alt="" className={styles.contactIcons} />
          </a>
          <a href="mailto:care.mentors.adm@gmail.com">
            <img src="./gmail.png" alt="" className={styles.contactIcons} />
          </a>
          <a href="https://wa.me/+919899992467">
            <img src="./whatsapp.png" alt="" className={styles.contactIcons} />
          </a>
          <a href="https://www.instagram.com/care_mentors/">
            <img src="./instagram.png" alt="" className={styles.contactIcons} />
          </a>
        </div>
    </div>
  )
}
