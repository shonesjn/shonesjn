// Skills Section Logos
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import javascriptLogo from '../assets/javascript.png';
import reactjsLogo from '../assets/reactjs.png';
import reduxLogo from '../assets/redux.png';
import tailwindcssLogo from '../assets/tailwindcss.png';
import materialuiLogo from '../assets/materialui.png';
import bootstrapLogo from '../assets/bootstrap.png';
import nodejsLogo from '../assets/nodejs.png';
import expressLogo from '../assets/express.png';
import mongodbLogo from '../assets/mongodb.png';
import cLogo from '../assets/c.png';
import cppLogo from '../assets/cpp.png';
import javaLogo from '../assets/java.png';
import pythonLogo from '../assets/python.png';
import tensorflowLogo from '../assets/tensorflow.svg';
import gitLogo from '../assets/git.png';
import githubLogo from '../assets/github.png';
import vscodeLogo from '../assets/vscode.png';

import {
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaWifi,
  FaCube,
  FaDiagramProject,
  FaTowerBroadcast,
} from 'react-icons/fa6';
import {
  SiArduino,
  SiEspressif as esp32Logo,
  SiRaspberrypi as raspberryPiLogo,
  SiNvidia as jetsonLogo,
} from 'react-icons/si';

export const Skilldata = [
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "React JS", logo: reactjsLogo },
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "TensorFlow", logo: tensorflowLogo },
      { name: "Arduino IDE", logo: SiArduino },
      { name: "Thingspeak", logo: FaTowerBroadcast },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },
  {
    title: "Topics of Interest",
    skills: [
      { name: "Artificial Intelligence", logo: FaBrain },
      { name: "Machine Learning", logo: FaRobot },
      { name: "IoT", logo: FaWifi },
      { name: "Edge Computing", logo: FaMicrochip },
      { name: "Blockchain", logo: FaCube },
      { name: "Reinforcement Learning", logo: FaDiagramProject },
    ],
  },
  {
    title: "Hardware & Edge Platforms",
    skills: [
      { name: "ESP32", logo: esp32Logo },
      { name: "Raspberry Pi", logo: raspberryPiLogo },
      { name: "Jetson Orin", logo: jetsonLogo },
    ],
  },
];