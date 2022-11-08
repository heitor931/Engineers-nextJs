import React from "react";
import classes from "./PeopleItem.module.scss";
import Image from "next/image";

const PeopleItem = ({ name, code, skill, src }) => {
  return (
    <div className={classes.container}>
      <div className={classes.badge}>{67}</div>
      <p>
        Name: <span className={classes.span}>{name}</span>
      </p>
      <p>
        code: <span className={classes.span}>{code}</span>
      </p>
      <p>
        skill: <span className={classes.span}>{skill}</span>
      </p>
      <div
        className={classes.images}
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className={classes.votos}><span>👎</span><span>👍</span></div>
    </div>
  );
};

export default PeopleItem;
