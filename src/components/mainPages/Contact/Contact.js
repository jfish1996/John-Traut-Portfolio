import React from "react";
import classes from "./Contact.module.css";
// import "../../../App.css";

export default function Contact({ id }) {
  return (
    <div className={classes.contactContainer} id={id}>
      <h1>Lets get in touch</h1>
      <div className={classes.emailContainer}>
        <ul>
          <li className={classes.flex}>
            <img className={classes.icon} src="../assets/png/email.png" />
            Email: jtraut1996@gmail.com
          </li>
          {/* <img className={classes.emailIcon} src="../assets/png/email.png" /> */}
          <li className={classes.flex}>
            <img className={classes.icon} src="../assets/png/phone.png" />
            <p>Phone: 206-240-7591</p>
          </li>
          <li className={classes.flex}>
            <img className={classes.icon} src="../assets/png/git.png" />
            <p>Git: jfish1996</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
