import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

const social = [
  {
    id: 1,
    name: "Github",
    icon: <FaGithub/>,
    link: "https://github.com/HeadEyes"
  },
  {
    id:2,
    name:"LinkedIn",
    icon: <FaLinkedinIn/>,
    link:"https://www.linkedin.com/in/joshua-parada-073a96258/"
  },
  {
    id:3,
    name:"Email",
    icon: <CiMail/>,
    link: "mailto:p.aguilera.joshua@gmail.com"
  }
]

export default social