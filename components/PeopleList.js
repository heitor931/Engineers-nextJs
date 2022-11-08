import React from "react";
import PeopleItem from "./PeopleItem";
import classes from "./PeopleList.module.scss";

const DUMMY_DATA = [
  {
    name: "Heitor",
    code: 1234,
    skill: "Telco engineer",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  },
  {
    name: "Belizandra",
    code: 1245,
    skill: "IP engineer",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Pedro",
    code: 5464,
    skill: "Eletrical technician",
    src: "https://images.unsplash.com/photo-1610631066894-62452ccb927c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
  },
  {
    name: "Maria",
    code: 5564,
    skill: "Lawyer",
    src: "https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Makana",
    code: 55645444,
    skill: "Lawyer",
    src: "https://images.unsplash.com/photo-1667880086296-92a9bee1a3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Mudumane",
    code: 55664,
    skill: "Lawyer",
    src: "https://images.unsplash.com/photo-1667837896876-012372133bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  }

];
const PeopleList = () => {
  const listOfPeople = DUMMY_DATA.map(({ name, code, skill, src }, idx) => {
    return (
      <PeopleItem key={idx} name={name} code={code} skill={skill} src={src} />
    );
  });

  return <div className={classes.container}>{listOfPeople}</div>;
};

export default PeopleList;
