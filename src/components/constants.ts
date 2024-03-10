export const NavRoutes = {
  HOME: "Home",
  INTERNSHIP: "Internship",
  ABOUT_US: "About us",
  WORKSHOP: "Workshop",
  LOGO_URL: "Image",
  SERVICES: "Services",
  BLOGS: "Blogs",
  CONTACT_US: "Contact us",
  TRAINING: "Course & Training",
  HIGH_SCHOOL: "School & High School",
  UNIVERSITY: "University",
  CUSTOM_DRONES: "Custom Drones",
  DESIGN: "Design & Fabrication",
  PROJ_CONSULT: "Project Consultation",
  CFD_ANALYSIS: "Structure & CFD Analysis",
  PRINTING_SERVICES: "",
  CreateBlogs: "CreateBlogs",
  EditBlogs: "EditBlogs"
} as const;

export const WorkshopNavRoutes = {
  PRINTING_3D: "3D PRINTING",
  MODEL_ROCKETRY: "MODEL ROCKETRY",
  ROBOTICS: "ROBOTICS",
  WATER_ROCKETRY: "WATER ROCKETRY",
  GLIDER: "GLIDER",
  ADDITIVE_MANUFACTURING: "ADDITIVE MANUFACTURING",
  AMATEUR_ROCKETRY: "AMATEUR ROCKETRY",
  AIRCRAFT_DESIGN: "AIRCRAFT DESIGN",
  QUAD_DRONE: "DRONE (QUAD)",
  RC_PLANE: "R C PLANE"
} as const;

export const ServicesNavRoutes = {
  CUSTOM_DRONE: "Custom Drone",
  PRINTING_3D: "3D Printing",
  DESIGN_FABRICATION: "Design And Fabrication",
  STRUCTURAL_ANALYSIS: "Structural Analysis",
  CFD_ANALYSIS: "CFD Analysis",
  PROJECT_CONSULTATION: "Project Consultation"
} as const;

export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  TIMED_OUT: 408,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
} as const;

export const AXIOS_ERROR_CODE = {
  NETWORK_ERROR: "ERR_NETWORK"
} as const;
