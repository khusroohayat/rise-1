import Blog from "@/pages/Blog";
import Home from "@/pages/Home";
import Post from "@/pages/Post";
import {
  BadgeCheck,
  Ban,
  Briefcase,
  Car,
  FileText,
  Hand,
  History,
  Leaf,
  MessageCircleWarning,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import unitedEnergyLogo from "../assets/images/united-energy.png";
import primeInternationalLogo from "../assets/images/prime-international.png";
import pakistanPetroleumLogo from "../assets/images/pakistan-petroleum.png";
import molGroupLogo from "../assets/images/mol-group.png";
import oilGasDevelopmentLogo from "../assets/images/oil-gas-development.png";
import petroleumExplorationLogo from "../assets/images/petroleum-exploration.png";
import alHajLogo from "../assets/images/al-haj.png";
import dewanPetroleumLogo from "../assets/images/dewan-petroleum.png";
import mariEnergiesLogo from "../assets/images/mari-energies.png";
import cooperServicesLogo from "../assets/images/cooper-services.png";
import teamImg01 from "../assets/images/team-card-01.png";
import teamImg02 from "../assets/images/team-card-02.png";
import teamImg03 from "../assets/images/team-card-03.png";
import teamImg04 from "../assets/images/team-card-04.png";
import teamImg05 from "../assets/images/team-card-05.png";
import teamImg06 from "../assets/images/team-card-06.png";
import facebookIcon from "../assets/images/facebook-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";
import twitterIcon from "../assets/images/twitter-icon.svg";
import linkedinIcon from "../assets/images/linkedin-icon.svg";
import certification01 from "../assets/images/certification-01.svg";
import certification02 from "../assets/images/certification-02.svg";
import certification03 from "../assets/images/certification-03.svg";
import certification04 from "../assets/images/certification-04.svg";
import fieldServicesImg from "../assets/images/field-services-img.png";
import constructionServiceImg from "../assets/images/construction-service-img.png";
import consultancyServiceImg from "../assets/images/consultancy-service-img.png";
import protectiveCoatingServiceImg from "../assets/images/protective-coating-service-img.png";
import engineeringServiceImg from "../assets/images/engineering-service-img.png";
import fireProofingServiceImg from "../assets/images/fire-proofing-service-img.png";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";

// Mobile Navigation Data

export const mobileNavigationLinkData = [
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/",
    label: "Projects",
  },
  {
    link: "/blog",
    label: "Blogs",
  },
  {
    link: "/",
    label: "Careers",
  },
  {
    link: "/",
    label: "Contact",
  },
];

export const servicesAccordionData = [
  {
    label: "Field Services",
    link: "",
  },
  {
    label: "Consultancy",
    link: "",
  },
  {
    label: "Contruction",
    link: "",
  },
  {
    label: "Engineering",
    link: "",
  },
  {
    label: "Protective Coating",
    link: "",
  },
  {
    label: "Fire-Proofing",
    link: "",
  },
  {
    label: "Inspection & Testing",
    link: "",
  },
];

// Page Routes
export const pageRoutes = [
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <Post /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/projects", element: <Projects /> },
  { path: "/resources", element: <Resources /> },
  { path: "/contact", element: <Contact /> },
];

// Services Section Data

export const servicesData = [
  {
    hashId: "field-services",
    image: fieldServicesImg,
    title: "Field Services",
    description:
      "On-site support to keep your operations running smoothly and safely. We deliver hands-on field expertise, from equipment handling to real-time troubleshooting.",
  },
  {
    hashId: "consultancy",
    image: consultancyServiceImg,
    title: "Consultancy",
    description:
      "Strategic guidance tailored to complex energy projects. Our experts help you navigate project challenges with data-driven, practical solutions.",
  },
  {
    hashId: "construction",
    image: constructionServiceImg,
    title: "Construction",
    description:
      "Efficient project execution with a safety-first mindset.From groundwork to final build, we ensure timelines are met with quality at every level.",
  },
  {
    hashId: "engineering",
    image: engineeringServiceImg,
    title: "Engineering",
    description:
      "Precision-driven designs for high-performance infrastructure. Our engineering services combine innovation and compliance to bring concepts to life.",
  },
  {
    hashId: "protective-coating",
    image: protectiveCoatingServiceImg,
    title: "Protective Coating",
    description:
      "Corrosion-resistant coatings for long-lasting asset protection. We apply advanced coatings that shield your equipment and structures from harsh environments.",
  },
  {
    hashId: "fire-proofing",
    image: fireProofingServiceImg,
    title: "Fire-Proofing",
    description:
      "Life-saving passive fire protection systems. We implement robust fire-proofing solutions that meet safety regulations and reduce risk.",
  },
];

// Experience Section Data

export const experienceData = [
  {
    icon: Briefcase,
    title: "Over 40 Years Combined Experience",
    description:
      "Decades of hands-on expertise delivering industrial, EPC, and field solutions across upstream, midstream, and downstream oil operations.",
  },
  {
    icon: History,
    title: "Consistent On-Time Project Delivery",
    description:
      "We meet project deadlines without delays, using structured planning, real-time coordination, and disciplined execution in all environments.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Quality and HSE Compliance",
    description:
      "We strictly follow ISO and HSE standards to deliver safe, compliant, and reliable engineering services across demanding industrial environments and projects.",
  },
  {
    icon: UsersRound,
    title: "Skilled Team, Field-Tested Experts",
    description:
      "Our expert engineers and technicians are fully equipped to handle critical challenges with precision, dedication, and accountability.",
  },
];

// Why Choose Section Data

export const whyChooseData = [
  {
    title: "ISO-Certified Safety and Quality Standards",
    description:
      "We follow globally recognized ISO and HSE practices to ensure safe, compliant, and consistently high-quality project delivery.",
  },
  {
    title: "Experienced Teams with Proven Field Knowledge",
    description:
      "Our multidisciplinary experts bring hands-on industry experience across oil, gas, and industrial environments — from field to facility.",
  },
  {
    title: "On-Time Execution with Long-Term Reliability",
    description:
      "We plan, manage, and execute projects with precision meeting deadlines and delivering solutions that last beyond handover.",
  },
];

// Trusted Section Data

export const partnersLogo = [
  { src: unitedEnergyLogo, href: "https://uep.com.pk/" },
  { src: primeInternationalLogo, href: "https://www.piogcl.com/" },
  { src: pakistanPetroleumLogo, href: "http://www.ppl.com.pk/" },
  { src: molGroupLogo, href: "https://molpakistan.pk/" },
  { src: oilGasDevelopmentLogo, href: "https://www.ogdcl.com/" },
  { src: petroleumExplorationLogo, href: "https://www.pepl.com.pk/" },
  { src: alHajLogo, href: "https://www.alhajgroup.com/" },
  { src: dewanPetroleumLogo, href: "https://www.dewanpetroleum.com/" },
  { src: mariEnergiesLogo, href: "https://marienergies.com.pk/" },
  { src: unitedEnergyLogo, href: "https://uep.com.pk/" },
  { src: primeInternationalLogo, href: "https://www.piogcl.com/" },
  { src: pakistanPetroleumLogo, href: "http://www.ppl.com.pk/" },
  { src: molGroupLogo, href: "https://molpakistan.pk/" },
  { src: oilGasDevelopmentLogo, href: "https://www.ogdcl.com/" },
  { src: petroleumExplorationLogo, href: "https://www.pepl.com.pk/" },
  { src: alHajLogo, href: "https://www.alhajgroup.com/" },
  { src: dewanPetroleumLogo, href: "https://www.dewanpetroleum.com/" },
  { src: mariEnergiesLogo, href: "https://marienergies.com.pk/" },
  { src: cooperServicesLogo, href: "https://www.cooperservices.com/" },
];

// Team Section Data

export const teamMembers = [
  {
    png: teamImg01,
    roles: ["Managing Director"],
  },
  {
    png: teamImg02,
    roles: ["Head of Field Operations"],
  },
  {
    png: teamImg03,
    roles: ["Lead Process Engineer"],
  },
  {
    png: teamImg04,
    roles: ["EPC Project Manager"],
  },
  {
    png: teamImg05,
    roles: ["HSE & Compliance Officer"],
  },
  {
    png: teamImg06,
    roles: ["Business Development Manager"],
  },
];

// Footer Data

export const aboutLinks = [
  {
    link: "/about#who-we-are",
    label: "Who We Are",
  },
  {
    link: "/about#our-approach",
    label: "Our Approach",
  },
  {
    link: "/about#our-commitment",
    label: "Our Commitment",
  },
  {
    link: "/about#key-policies",
    label: "Key Policies",
  },
  {
    link: "/about#careers",
    label: "Careers",
  },
];

export const servicesLinks = [
  {
    link: "/servces#field-services",
    label: "Field Services",
  },
  {
    link: "/servces#consultancy",
    label: "Consultancy",
  },
  {
    link: "/servces#construction",
    label: "Construction",
  },
  {
    link: "/servces#engineering",
    label: "Engineering",
  },
  {
    link: "/servces#protective-coating",
    label: "Protective Coating",
  },
  {
    link: "/servces#fire-proofing",
    label: "Fire-Proofing",
  },
];

export const preojectsLinks = [
  {
    link: "/projects#completed-projects",
    label: "Completed Projects",
  },
  {
    link: "/projects#ongoing-projects",
    label: "Ongoing Projects",
  },
  {
    link: "/projects#project-highlights",
    label: "Project Highlights",
  },
];

export const resourcesLinks = [
  {
    link: "/blog",
    label: "Blogs",
  },
  {
    link: "/resources#case-studies",
    label: "Case Studies",
  },
  {
    link: "/resources#news-updates",
    label: "News & Updates",
  },
  {
    link: "/resources#white-paper",
    label: "Whitepaper",
  },
];

export const socialLinks = [
  {
    link: "https://www.facebook.com/profile.php?id=100093061615807",
    icon: facebookIcon,
  },
  {
    link: "https://www.instagram.com/riseengservices/",
    icon: instagramIcon,
  },
  {
    link: "https://twitter.com/RiseEngServices",
    icon: twitterIcon,
  },
  {
    link: "https://www.linkedin.com/company/reliable-industrail-solutions-engineering/",
    icon: linkedinIcon,
  },
];

export const certificationsData = [
  {
    img: certification01,
    label: "Occupational health & safety standard",
  },
  {
    img: certification02,
    label: "UKAS-accredited certification",
  },
  {
    img: certification03,
    label: "Quality management standard",
  },
  {
    img: certification04,
    label: "UKAS-accredited certification",
  },
];

export const keyPoliciesData = [
  {
    icon: Ban,
    title: "Substance Abuse Policy",
    description:
      "We maintain a strict zero-tolerance policy towards the use of drugs and alcohol in the workplace. RISE Engineering prioritizes safety and productivity by promoting a substance-free environment across all operations.",
    link: "https://www.risengineering.org/documents/RISE-HSEQ-06_Sustainability_Policy.pdf",
    color: "#3A53A1",
  },
  {
    icon: Car,
    title: "Driving and Safety Policy",
    description:
      "All employees and contractors operating vehicles or machinery must adhere to strict safety protocols. We ensure that driving practices meet legal, operational, and environmental safety standards at all times.",
    link: "https://www.risengineering.org/documents/RISE-HSEQ-04_Driving_safety_Policy.pdf",
    color: "#63A079",
  },
  {
    icon: BadgeCheck,
    title: "Quality Policy",
    description:
      "RISE Engineering is committed to delivering consistent, high-quality outcomes across all projects. We follow industry best practices and continuous improvement models to meet and exceed client expectations.",
    link: "https://www.risengineering.org/documents/RISE-HSEQ-03_Quality_Policy.pdf",
    color: "#9B81B0",
  },
  {
    icon: ShieldCheck,
    title: "HSE Policy",
    description:
      "Our Health, Safety, and Environmental policy ensures that all activities are conducted with minimal risk to people, property, and the planet. Safety is ingrained in our culture and operations.",
    link: "https://www.risengineering.org/documents/RISE-HSEQ-02_HSE_Policy.pdf",
    color: "#719EB3",
  },
  {
    icon: MessageCircleWarning,
    title: "Grievance Handling and Conflict Resolution policy",
    description:
      "We promote an open and respectful workplace where employees can voice concerns without fear. Our policy ensures timely, fair, and confidential resolution of all grievances and conflicts.",
    link: "https://www.risengineering.org/documents/RISE-AHR-13_Grievance_handling_conflict_resolution_Policy.pdf",
    color: "#E68B30",
  },
  {
    icon: FileText,
    title: "Employee Code of Conduct",
    description:
      "All employees are expected to uphold the values of integrity, professionalism, and respect. This code outlines ethical behavior and accountability across all roles and responsibilities.",
    link: "https://www.risengineering.org/documents/RISE-AHR-12_Employee_Code_of_Conduct.pdf",
    color: "#8DB6B8",
  },
  {
    icon: Scale,
    title: "Equal Opportunity and Anti-Discrimination Policy",
    description:
      "We are committed to fostering an inclusive workplace where all individuals are treated fairly, regardless of race, gender, religion, or background. Equal opportunity is a cornerstone of our culture.",
    link: "https://www.risengineering.org/documents/RISE-AHR-11_Equal_Opportunity_anti_discrimination_policy.pdf",
    color: "#8DB6B8",
  },
  {
    icon: Hand,
    title: "Anti-Harassment and Bullying Policy",
    description:
      "RISE Engineering provides a safe and respectful work environment free from harassment, bullying, or intimidation. All reports are taken seriously and handled with sensitivity and discretion.",
    link: "https://www.risengineering.org/documents/RISE-AHR-10_Anti_Harassment_Bullying_policy.pdf",
    color: "#3A53A1",
  },
  {
    icon: Leaf,
    title: "Sustainability Policy",
    description:
      "We integrate sustainable practices into our engineering and construction processes. From resource optimization to eco-friendly materials, we aim to minimize our environmental footprint while maximizing value.",
    link: "https://www.risengineering.org/documents/Health-Policy.pdf",
    color: "#E68B30",
  },
];

// Faqs Accordion Data

export const faqsAccordionData = [
  {
    value: "item-1",
    title: "What industries do you serve?",
    content: `We serve a range of sectors including oil & gas, energy, construction, and infrastructure development.`,
  },
  {
    value: "item-2",
    title: "What is EPCC contracting?",
    content: `EPCC stands for Engineering, Procurement, Construction & Commissioning — a complete project delivery model where we handle every phase from design to launch.`,
  },
  {
    value: "item-3",
    title: "Do you provide custom engineering solutions?",
    content: `Yes, we offer tailor-made engineering services to meet the specific requirements of each project.`,
  },
  {
    value: "item-4",
    title: "How do you ensure project quality and safety?",
    content: `We follow rigorous QA/QC protocols, HSE standards, and regular inspections to ensure compliance and safety across all stages.`,
  },
  {
    value: "item-5",
    title: "Can you assist with post-project support?",
    content: `Absolutely. We offer post-deployment support such as maintenance, optimization, and technical consultancy.`,
  },
  {
    value: "item-6",
    title: "Where are your services available?",
    content: `Our operations extend locally and regionally, depending on the project scope and client needs.`,
  },
  {
    value: "item-7",
    title: "Do you handle government or large-scale industrial projects?",
    content: `Yes, we have the capability and experience to manage complex, high-scale government and industrial contracts.`,
  },
];
