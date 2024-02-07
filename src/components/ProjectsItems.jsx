import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
  TimelineContent,
} from "@mui/lab";

import { Link } from "react-router-dom";
import classes from "./ProjectsItems.module.css";

const ProjectsItems = () => {
  return (
    <div>
      <div className={classes.text}>
        <h1>Projects</h1>
        <hr className={classes.horLine} />
      </div>
      <>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className={classes.box}>
                <Link
                  to={
                    "http://erp-dudhauli.meropalika.com/"
                  }
                  target="_blank"
                  className={classes.projectTitle}
                >
                  <h1 className={classes.title}>Enterprises Resource Planning</h1>
                </Link>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className={classes.box}>
                <Link
                  to={"https://our-library.vercel.app/login"}
                  target="_blank"
                  className={classes.projectTitle}
                >
                  <h1 className={classes.title}>Library Management System</h1>
                </Link>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className={classes.box}>
                <Link
                  to={"https://soluplanningdemo.meropalika.com/"}
                  target="_blank"
                  className={classes.projectTitle}
                >
                  <h1 className={classes.title}>Planning Management System</h1>
                </Link>
              </div>
            </TimelineContent>
          </TimelineItem>

{/* 
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className={classes.box}>
                <Link
                  to={"https://github.com/RoshanDalami/debuginit_cards.git"}
                  target="_blank"
                  className={classes.projectTitle}
                >
                  <h1 className={classes.title}>Customized React Card Components</h1>
                </Link>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className={classes.box}>
                <Link
                  to={"https://github.com/RoshanDalami/DBMS-mini-Project.git"}
                  target="_blank"
                  className={classes.projectTitle}
                >
                  <h1 className={classes.title}>
                    Fifa Player Management System. Mini Project
                  </h1>
                </Link>
              </div>
            </TimelineContent>
          </TimelineItem> */}


        </Timeline>
      </>
    </div>
  );
};

export default ProjectsItems;
