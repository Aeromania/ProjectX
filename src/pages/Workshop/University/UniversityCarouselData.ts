import { TCarouselInfoArrayProps } from "../School/SchoolCarouselData";
import AdditiveManufacturing_image1 from "../../../assets/images/xlabs_additiveManufacturing-1.jpeg";
import AdditiveManufacturing_image2 from "../../../assets/images/xlabs_additiveManufacturing-2.jpeg";
import AdditiveManufacturing_image3 from "../../../assets/images/xlabs_additiveManufacturing-3.jpeg";
import AdditiveManufacturing_image4 from "../../../assets/images/xlabs_additiveManufacturing-4.jpeg";
import AmateurRocketry_image1 from "../../../assets/images/xlabs_modelRocketry-1.jpeg";
import AmateurRocketry_image2 from "../../../assets/images/xlabs_amateurRocketry-2.png";
import AmateurRocketry_image3 from "../../../assets/images/xlabs_amateurRocketry-3.png";
import AmateurRocketry_image4 from "../../../assets/images/xlabs_amateurRocketry-4.png";
import aircraftDesign_image1 from "../../../assets/images/xlabs_aircraftDesign-1.png";
import aircraftDesign_image2 from "../../../assets/images/xlabs_aircraftDesign-2.jpeg";
import aircraftDesign_image3 from "../../../assets/images/xlabs_aircraftDesign-3.png";
import aircraftDesign_image4 from "../../../assets/images/xlabs_aircraftDesign-4.png";
import aircraftDesign_image5 from "../../../assets/images/xlabs_aircraftDesign-5.jpeg";
import quadDrone_image1 from "../../../assets/images/xlabs_quadDrone-1.jpeg";
import quadDrone_image2 from "../../../assets/images/xlabs_quadDrone-2.jpeg";
import quadDrone_image3 from "../../../assets/images/xlabs_quadDrone-3.png";
import quadDrone_image4 from "../../../assets/images/xlabs_quadDrone-4.png";
import quadDrone_image5 from "../../../assets/images/xlabs_quadDrone-5.jpeg";
import RcPlane_image1 from "../../../assets/images/xlabs_rcplane-1.jpeg";
import RcPlane_image2 from "../../../assets/images/xlabs_rcplane-2.jpeg";
import RcPlane_image3 from "../../../assets/images/xlabs_rcplane-3.jpeg";
import RcPlane_image4 from "../../../assets/images/xlabs_rcplane-4.jpeg";

export const additiveManufacturingInfoArray: TCarouselInfoArrayProps[] = [
  {
    id: 1,
    imageUrl: AdditiveManufacturing_image1,
    title: "Introduction to  CAD",
    body: "SolidWorks is a powerful Computer-Aided Design (CAD) software widely used in the industry for creating precise 3D models. In this section, you'll learn the essentials of SolidWorks, including how to navigate the interface, create sketches, extrude features, add dimensions and constraints, and assemble components. Practical exercises will guide you through designing objects suitable for 3D printing, focusing on best practices for creating printable models with SolidWorks."
  },
  {
    id: 2,
    imageUrl: AdditiveManufacturing_image2,
    title: "Basics of 3D Printing",
    body: "3D printing is an additive manufacturing process that builds objects layer by layer from digital models. We'll cover various 3D printing technologies, including Fused Deposition Modeling (FDM), Stereolithography (SLA), Selective Laser Sintering (SLS), and more, discussing their principles, applications, and advantages. You'll gain insights into key considerations such as material selection, print resolution, support structures, and build volume, essential for successful 3D printing projects."
  },
  {
    id: 3,
    imageUrl: AdditiveManufacturing_image3,
    title: "Introduction to Slicer Software",
    body: "Slicer software is a crucial component of the 3D printing workflow, responsible for converting digital models into printable instructions (G-code). In this segment, you'll be introduced to popular slicer software such as Ultimaker Cura, PrusaSlicer, and Simplify3D. You'll learn how to import 3D models into slicer software, adjust slicing parameters for optimal print quality and speed, generate support structures, and preview the sliced layers before printing."
  },
  {
    id: 4,
    imageUrl: AdditiveManufacturing_image4,
    title: "Post-Processing Techniques",
    body: "While 3D printing offers versatility and complexity, post-processing is often necessary to refine the final appearance and functionality of printed models. We'll explore various post-processing techniques, including sanding, filing, painting, chemical smoothing, and assembly. You'll discover how to troubleshoot common issues such as layer lines, warping, and adhesion problems, and learn effective strategies for enhancing the surface finish and mechanical properties of your printed parts."
  }
];

export const amateurRocketryInfoArray: TCarouselInfoArrayProps[] = [
  {
    id: 1,
    imageUrl: AmateurRocketry_image1,
    title: "Introduction to Rockets and Space Exploration",
    body: "Delve into the history of rocketry, from ancient Chinese fire arrows to modern-day space exploration efforts. Explore the basic principles of rocket propulsion, including Newton's laws of motion and the role of thrust, drag, and gravity. Learn about the different types of rockets, including solid, liquid, and hybrid propulsion systems."
  },
  {
    id: 2,
    imageUrl: AmateurRocketry_image2,
    title: "Introduction to OpenRocket",
    body: "Familiarize participants with OpenRocket, an open-source software tool used for designing and simulating rocket flights. Learn how to create and modify rocket designs, adjust parameters such as mass, thrust, and aerodynamics, and simulate flights under various conditions. Explore the importance of simulation in optimizing rocket performance and predicting flight characteristics."
  },
  {
    id: 3,
    imageUrl: AmateurRocketry_image3,
    title: "Building Rocket Motors",
    body: "Gain hands-on experience in building rocket motors using common materials and propellants. Learn about the different components of a rocket motor, including the casing, nozzle, propellant grain, and igniter. Understand the safety precautions and best practices involved in handling and assembling rocket motors. Explore various propellant formulations and their effects on thrust, burn rate, and efficiency."
  },
  {
    id: 4,
    imageUrl: AmateurRocketry_image4,
    title: "Building Rocket Motors",
    body: "Conduct static tests to evaluate the performance of different motor designs and propellant formulations. Collect data on thrust over time and analyze thrust curves to assess the motor's efficiency and consistency. Discuss the implications of thrust curve analysis on rocket design and optimization."
  }
];

export const aircraftDesignInfoArray: TCarouselInfoArrayProps[] = [
  {
    id: 1,
    imageUrl: aircraftDesign_image1,
    title: "Introduction to Aircraft Design",
    body: "Exploring fundamental principles of aerodynamics, aircraft performance, and design considerations. Understanding the importance of design calculations in determining aircraft specifications such as range, payload capacity, and fuel efficiency. Introduction to key parameters including lift, drag, thrust, and weight, and their influence on aircraft design."
  },
  {
    id: 2,
    imageUrl: aircraftDesign_image2,
    title: "Design Calculations",
    body: "Hands-on sessions focusing on performing essential design calculations such as lift-to-drag ratio, wing loading, and power loading. Utilizing mathematical equations and empirical relationships to estimate aircraft performance characteristics. Incorporating factors like aircraft configuration, airfoil selection, and propulsion systems into design calculations."
  },
  {
    id: 3,
    imageUrl: aircraftDesign_image3,
    title: "CAD Designs",
    body: "Introduction to Computer-Aided Design (CAD) software for aircraft design (e.g., CATIA, SolidWorks, AutoCAD). Practical exercises on translating design specifications into 3D models, ensuring geometric accuracy and manufacturability. Integration of design calculations to refine CAD models and optimize aircraft performance."
  },
  {
    id: 4,
    imageUrl: aircraftDesign_image4,
    title: "Structural Analysis",
    body: "Principles of structural mechanics and materials science applicable to aircraft design. Introduction to Finite Element Analysis (FEA) software for simulating structural behavior under various loading conditions. Performing structural calculations to ensure airframe integrity, considering factors like stress distribution, fatigue, and safety margins."
  },
  {
    id: 5,
    imageUrl: aircraftDesign_image5,
    title: "Computational Fluid Dynamics (CFD) Analysis",
    body: "Understanding fluid dynamics principles and their relevance to aircraft design. Introduction to CFD software packages (e.g., ANSYS Fluent, OpenFOAM) for analyzing airflow around aircraft surfaces. Incorporating design calculations into CFD simulations to optimize aerodynamic performance and assess stability and control."
  }
];

export const quadDroneInfoArray: TCarouselInfoArrayProps[] = [
  {
    id: 1,
    imageUrl: quadDrone_image1,
    title: "Introduction to UAV Systems",
    body: "Learn about the components of UAVs (drones) such as frame, motors, flight controller, etc. Understand how these components work together to enable controlled flight."
  },
  {
    id: 2,
    imageUrl: quadDrone_image2,
    title: "Soldering the Components",
    body: "Gain hands-on experience in soldering wires and electronic parts onto the flight controller. Ensure secure and reliable electrical connections for the UAV."
  },
  {
    id: 3,
    imageUrl: quadDrone_image3,
    title: "Assembling the Components",
    body: "Mount motors onto the frame, attach propellers, and integrate other components like the battery and receiver. Learn the mechanical aspects of drone assembly through guided instruction."
  },
  {
    id: 4,
    imageUrl: quadDrone_image4,
    title: "Introduction to Mission Planner",
    body: "Understand the features and functionalities of Mission Planner software. Learn to connect the drone to Mission Planner, set up waypoints, configure flight parameters, and monitor telemetry data."
  },
  {
    id: 5,
    imageUrl: quadDrone_image5,
    title: "Fly",
    body: "Participate in a hands-on flying session with the assembled and configured drones. Learn piloting basics including takeoff, landing, maneuvering, and safety protocols. Apply knowledge of UAV systems and Mission Planner in real-world flying scenarios."
  }
];

export const RCPlaneInfoArray: TCarouselInfoArrayProps[] = [
  {
    id: 1,
    imageUrl: RcPlane_image1,
    title: "Introduction to Aircraft",
    body: "Participants will begin by gaining an understanding of the basic principles of flight, including lift, thrust, drag, and weight. They will learn about the different components of an aircraft and how they work together to achieve controlled flight."
  },
  {
    id: 2,
    imageUrl: RcPlane_image2,
    title: "Cutting the Foam Sheets",
    body: "Using specialized foam cutting tools, participants will learn how to cut foam sheets into the required shapes and sizes to build the fuselage, wings, tail, and other components of the aircraft. They will learn about different foam types and their suitability for various parts of the plane."
  },
  {
    id: 3,
    imageUrl: RcPlane_image3,
    title: "Assembling the Structure",
    body: "Guided by experienced instructors, participants will assemble the foam components to build the basic structure of the aircraft. They will learn about different joining techniques, such as gluing and taping, to ensure a strong and stable airframe."
  },
  {
    id: 4,
    imageUrl: RcPlane_image4,
    title: "Adding Electronics to the Plane",
    body: "Participants will be introduced to the essential electronic components needed to make their R/C plane fly, including motors, servos, ESCs (Electronic Speed Controllers), batteries, and radio receivers. They will learn how to install and configure these components to control the aircraft's movements."
  },
  {
    id: 5,
    imageUrl: quadDrone_image2,
    title: "Flight Training",
    body: "Under the guidance of experienced instructors, participants will have the opportunity to fly their newly built R/C planes. They will learn the basics of R/C piloting, including takeoff, landing, and maneuvering techniques. Safety protocols and guidelines will be emphasized throughout the flight training process."
  }
];
