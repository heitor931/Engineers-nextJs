import { useRouter } from "next/router";
import React from "react";
import { DUMMY_DATA } from "../dummy-data";

const EngineerDetails = (props) => {
  const router = useRouter();
  const engineerId = router.query.engineerId;
  console.log(props.listOfProjects);
  return (
    <div>
      <h1>
        This is the detail page for {props.name}
        <span className="engineer-name">{engineerId}</span>
      </h1>
      <div>
        <h1>List of projects</h1>
        <ul>
          {props.listOfProjects.map((proj, idx) => {
            return <li key={idx}>{proj}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
    const engId = context.params.engineerId
  const listOfProjects = DUMMY_DATA.find((proj) => proj.name === engId)
  return {
    props: {
      listOfProjects: listOfProjects.listOfProjects
    },
    revalidate: 2,
  };
}

export async function getStaticPaths(context) {
  const pathNames = ["Heitor", "Mudumane", "Belizandra", "Makana", "Maria"];
  return {
    paths: pathNames.map((path) => {
      return { params: { engineerId: path } };
    }),

    fallback: false,
  };
}

export default EngineerDetails;
