import classes from "./Contact.module.css";
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Github from '../assets/gitHubNew.svg';
import Gmail from '../assets/gmail.svg';
import LinkedIn from '../assets/linkedin.svg'
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
const Contact = () => {
  const ContactIcons = [
    {
      image: Facebook,
      title: "Facebook",
      path : 'https://www.facebook.com/bijay.rai.2002',
    },
    {
      image: Instagram,
      title: "Instagram",
      path : 'https://www.instagram.com/beezayrae/',
    },
    {
      image: Github,
      title: "Github",
      path : 'https://github.com/Beezay-rai',
    },
    {
      image: Gmail,
      title: "Mail",
      path : 'mailto:beezayrae@gmail.com',
    },
    {
      image: LinkedIn,
      title: "LinkedIn",
      path : 'https://www.linkedin.com/in/bijay-rai-3b0690278/',
    },
   
  ];
  return (
    <>
   <div className={classes.text}>
          <h1>
            <span></span> Wanna Reach Me Out ?!
          </h1>
          <hr className={classes.horLine}/>
        </div>
      <div className={classes.wrapper}>
        {ContactIcons.map((icon) => {
          return (
            
              <div className={classes.languageContainer}>
                <Tooltip arrow={true} title={icon.title} className={classes.tooltip}>
                <Link to={icon.path} target="_blank">
                <img src={icon.image} alt="" className={classes.items} />
                </Link>
                  
                </Tooltip>
              </div>
            
          );
        })}
      </div>
    </>
  );
};

export default Contact;
