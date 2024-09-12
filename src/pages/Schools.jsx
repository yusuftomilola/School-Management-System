import Breadcrumbs from "../components/Breadcrumbs";
import { useContext } from "react";
import SchoolContext from "../contexts/schoolContext";

const Schools = () => {
  const { schoolsData } = useContext(SchoolContext);

  console.log(schoolsData);

  return (
    <div>
      <Breadcrumbs title1={"Schools"} />
    </div>
  );
};

export default Schools;
