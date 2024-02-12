/* @ts-expect-error "not type for images" */
import Printing3d_image1 from "../../assets/images/xlabs_3dprinting-1.jpeg";
/* @ts-expect-error "not type for images" */
import Printing3d_image2 from "../../assets/images/xlabs_3dprinting-2.jpeg";
/* @ts-expect-error "not type for images" */
import Printing3d_image3 from "../../assets/images/xlabs_3dprinting-3.jpeg";
/* @ts-expect-error "not type for images" */
import Printing3d_image4 from "../../assets/images/xlabs_3dprinting-4.jpeg";
/* @ts-expect-error "not type for images" */
import Printing3d_image5 from "../../assets/images/xlabs_3dprinting-5.jpeg";
/* @ts-expect-error "not type for images" */
import ModelRocketry_image1 from "../../assets/images/xlabs_modelRocketry-1.jpeg";
/* @ts-expect-error "not type for images" */
import ModelRocketry_image2 from "../../assets/images/xlabs_modelRocketry-2.jpeg";
/* @ts-expect-error "not type for images" */
import ModelRocketry_image3 from "../../assets/images/xlabs_modelRocketry-3.jpeg";
/* @ts-expect-error "not type for images" */
import ModelRocketry_image4 from "../../assets/images/xlabs_modelRocketry-4.jpeg";
/* @ts-expect-error "not type for images" */
import ModelRocketry_image5 from "../../assets/images/xlabs_modelRocketry-5.jpeg";
/* @ts-expect-error "not type for images" */
import Robotics_image1 from "../../assets/images/xlabs_robotics-1.jpeg";
/* @ts-expect-error "not type for images" */
import Robotics_image2 from "../../assets/images/xlabs_robotics-2.jpeg";
/* @ts-expect-error "not type for images" */
import Robotics_image3 from "../../assets/images/xlabs_robotics-3.jpeg";
/* @ts-expect-error "not type for images" */
import WaterRocketry_image1 from "../../assets/images/xlabs_waterRocketry-1.png";
/* @ts-expect-error "not type for images" */
import WaterRocketry_image2 from "../../assets/images/xlabs_waterRocketry-2.png";
/* @ts-expect-error "not type for images" */
import WaterRocketry_image3 from "../../assets/images/xlabs_waterRocketry-3.png";
/* @ts-expect-error "not type for images" */
import Glider_image1 from "../../assets/images/xlabs_glider-1.jpeg";
/* @ts-expect-error "not type for images" */
import Glider_image2 from "../../assets/images/xlabs_glider-2.jpeg";
/* @ts-expect-error "not type for images" */
import Glider_image3 from "../../assets/images/xlabs_glider-3.jpeg";

export type TCarouselInfoArrayProps = {
  id: number;
  imageUrl: string;
  title: string;
  body: string;
};

export const printing3dInfoArray: TCarouselInfoArrayProps[] = [
  {
    id: 1,
    imageUrl: Printing3d_image1,
    title: "Introduction to 3D Printing:",
    body: "Explore the evolution and impact of 3D printing technology across diverse industries. Dive into the variety of 3D printers, materials, and processes that shape the world of additive manufacturing"
  },
  {
    id: 2,
    imageUrl: Printing3d_image2,
    title: "CAD Essentials",
    body: "Step into the exciting world of Computer-Aided Design (CAD) with a comprehensive introduction. Learn the fundamental principles of 3D modeling and design, setting the stage for your creative journey."
  },
  {
    id: 3,
    imageUrl: Printing3d_image3,
    title: "Hands-on Design Session with TinkerCAD",
    body: "Experience the ease and accessibility of TinkerCAD, a user-friendly web-based CAD tool, ideal for beginners. Create your own digital designs with intuitive features, making 3D modeling a breeze."
  },
  {
    id: 4,
    imageUrl: Printing3d_image4,
    title: "Printing Fundamentals",
    body: "Gain insights into the critical aspects of preparing your TinkerCAD designs for the 3D printing process. Learn about slicing, layering, and configuring print settings to optimize the quality of your prints."
  },
  {
    id: 5,
    imageUrl: Printing3d_image5,
    title: "Live Printing Demonstration",
    body: "Witness the magic of 3D printing as we conduct a live demonstration, showcasing the transformation of your TinkerCAD designs into tangible objects. Explore various 3D printers and their capabilities."
  }
];

export const modelRocketryInfoArray: TCarouselInfoArrayProps[] = [
  {
    id: 1,
    imageUrl: ModelRocketry_image1,
    title: "Introduction to Rockets and Space Exploration",
    body: "Start with a captivating overview of the history and significance of rocketry. Explore how rockets have played a crucial role in space exploration."
  },
  {
    id: 2,
    imageUrl: ModelRocketry_image2,
    title: "Basics of Aerodynamics",
    body: "Dive into the fundamentals of aerodynamics and its role in rocket design. Learn how aerodynamic principles influence the flight of rockets."
  },
  {
    id: 3,
    imageUrl: ModelRocketry_image3,
    title: "Safety Briefing",
    body: "Prioritize safety with a comprehensive briefing on workshop guidelines. Ensure that all participants understand the importance of adhering to safety measures."
  },
  {
    id: 4,
    imageUrl: ModelRocketry_image4,
    title: "Building Rocket Motors",
    body: "Delve into the mechanics of rocket propulsion. Engage in hands-on activities to construct and assemble your own new rocket motors."
  },
  {
    id: 5,
    imageUrl: ModelRocketry_image5,
    title: "Testing the Rocket Motor",
    body: "Explore the science behind rocket motor testing. Conduct practical tests to understand the performance and capabilities of the constructed rocket motors."
  }
];

export const roboticsInfoArray: TCarouselInfoArrayProps[] = [
  {
    id: 1,
    imageUrl: Robotics_image1,
    title: "Introduction to Arduino",
    body: "Overview of Arduino boards and their capabilities. Explanation of the Arduino IDE (Integrated Development Environment)."
  },
  {
    id: 2,
    imageUrl: Robotics_image2,
    title: "Basic Arduino Programming",
    body: "Understanding the structure of an Arduino sketch. Variables, data types, and basic operations."
  },
  {
    id: 3,
    imageUrl: Robotics_image3,
    title: "Digital and Analog Inputs/Outputs",
    body: "Introduction to digital and analog pins. Writing diffrent codes from control LEDs (digital output) to Object detection through radar"
  }
];

export const waterRocketryInfoArray: TCarouselInfoArrayProps[] = [
  {
    id: 1,
    imageUrl: WaterRocketry_image1,
    title: "Educational Insights",
    body: "Gain valuable insights into aerodynamics and engineering. Learn science behind rocket propulsion. Reinforce theoretical concepts through practical application."
  },
  {
    id: 2,
    imageUrl: WaterRocketry_image2,
    title: "Building Stage",
    body: "Hands-on construction of water rockets. Gain practical skills in assembly and construction on."
  },
  {
    id: 3,
    imageUrl: WaterRocketry_image3,
    title: "Launch",
    body: "Participants launch their self-designed rockets. Experience the thrill of successful rocket launches"
  }
];

export const gliderInfoArray: TCarouselInfoArrayProps[] = [
  {
    id: 1,
    imageUrl: Glider_image1,
    title: "Design Phase",
    body: "Participants will kick off the workshop by learning the fundamentals of aerodynamics and the key principles behind glider design. Through interactive sessions and demonstrations, they will understand how different shapes, wing spans, and control surfaces impact flight performance."
  },
  {
    id: 2,
    imageUrl: Glider_image2,
    title: "Building Stage",
    body: "Armed with newfound knowledge, participants will roll up their sleeves and get creative in the building phase. Using a variety of materials, they'll have the chance to experiment with different designs, ensuring their gliders are not only functional but also uniquely crafted."
  },
  {
    id: 3,
    imageUrl: Glider_image3,
    title: "Launch and Learn",
    body: "The pinnacle of the workshop is the launch phase. Participants will watch in awe as their gliders take flight, putting their creations to the ultimate test."
  }
];
