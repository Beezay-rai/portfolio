import classes from "./Language.module.css";
import NET from "../assets/netIcon.png";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import JAVASCRIPT from "../assets/javascript.svg";
import SQLServer from "../assets/sqlSVG.svg";
import REACT from "../assets/react.svg";
import Unreal from "../assets/unreal.svg";
import { Tooltip } from "@mui/material";
  import { nanoid } from "nanoid";
const Language = () => {
  const LanguageIcons = [
    {
      image: NET,
      title: ".NET",
      
    },
    {
      image: HTML,
      title: "HTML 5",
    },
    {
      image: CSS,
      title: "CSS 3",
    },
    {
      image: JAVASCRIPT,
      title: " JAVASCRIPT",
    },
    {
      image: SQLServer,
      title: "SQLServer",
    },
    {
      image: REACT,
      title: "REACT",
    },
    {
      image: Unreal,
      title: "Unreal Engine",
    },
  ];
  return (
    <>
   <div className={classes.text}>
          <h1>
            Programming Languages
          </h1>
          <hr className={classes.horLine}/>
        </div>
      <div className={classes.wrapper}>
        {LanguageIcons.map((icon) => {
          return (
            
              <div className={classes.languageContainer} key={nanoid()} >
                <Tooltip arrow={true} title={icon.title} className={classes.tooltip}>
                  <img src={icon.image} alt="" className={classes.items} />
                </Tooltip>
              </div>
            
          );
        })}
      </div>
    </>
  );
};

export default Language;
