import propTypes from "prop-types";
import { AboutUs } from "./AboutUs";
import Visualization from "./Visualization";

export const DashboardMain = ({ searchParams }) => {
  {
    if (searchParams === "about-us") {
      return <AboutUs />;
    } else if (searchParams === "data-viz") {
      return <Visualization />;
    }
  }
};

DashboardMain.propTypes = {
  searchParams: propTypes.string,
};
