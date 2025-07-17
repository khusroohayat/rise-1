import Blog from "@/pages/Blog";
import Home from "@/pages/Home";
import Post from "@/pages/Post";
import { Briefcase, History, ShieldCheck, UsersRound } from "lucide-react";
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
import constructionImg from "../assets/images/construction-img.jpg";
import engineeringImg from "../assets/images/engineering-img.jpg";
import consultancyImg from "../assets/images/consultancy-img.jpg";
import fieldImg from "../assets/images/field-img.jpg";
import teamImg01 from "../assets/images/team-img-01.avif";
import teamImg02 from "../assets/images/team-img-02.avif";
import teamImg03 from "../assets/images/team-img-03.avif";
import teamImg04 from "../assets/images/team-img-04.avif";
import teamImg05 from "../assets/images/team-img-05.avif";
import teamImg06 from "../assets/images/team-img-06.avif";
import facebookIcon from "../assets/images/facebook-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";
import twitterIcon from "../assets/images/twitter-icon.svg";
import linkedinIcon from "../assets/images/linkedin-icon.svg";

// Mobile Navigation Data

export const mobileNavigationLinkData = [
  {
    link: "/",
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
];

// Services Section Data

export const servicesData = [
  {
    image: fieldImg,
    title: "Field Services",
    description:
      "On-site maintenance, troubleshooting, and commissioning support to keep your equipment running reliably and efficiently under real-world conditions.",
  },
  {
    image: consultancyImg,
    title: "Consultancy",
    description:
      "Expert guidance on operations, equipment selection, and project strategy — tailored to optimize performance, safety, and lifecycle value.",
  },
  {
    image: constructionImg,
    title: "Construction",
    description:
      "Full-scope EPC and industrial construction services delivered with precision, speed, and safety across oil, gas, and energy facilities.",
  },
  {
    image: engineeringImg,
    title: "Engineering",
    description:
      "Designing robust, cost-effective engineering solutions with a focus on functionality, reliability, and compliance for industrial infrastructure projects.",
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
    image: teamImg01,
    roles: ["Managing Director"],
  },
  {
    image: teamImg02,
    roles: ["Head of Field Operations"],
  },
  {
    image: teamImg03,
    roles: ["Lead Process Engineer"],
  },
  {
    image: teamImg04,
    roles: ["EPC Project Manager"],
  },
  {
    image: teamImg05,
    roles: ["HSE & Compliance Officer"],
  },
  {
    image: teamImg06,
    roles: ["Business Development Manager"],
  },
];

// Footer Data

export const companyLinks = [
  {
    link: "",
    label: "About Us",
  },
  {
    link: "",
    label: "Our Team",
  },
  {
    link: "",
    label: "Certifications",
  },
  {
    link: "",
    label: "Careers",
  },
  {
    link: "",
    label: "Contact Us",
  },
];

export const solutionsLinks = [
  {
    link: "",
    label: "Exploration & Production",
  },
  {
    link: "",
    label: "EPC & Plant Construction",
  },
  {
    link: "",
    label: " Maintenance & Field Services",
  },
  {
    link: "",
    label: "Custom Engineering Support",
  },
];

export const resourcesLinks = [
  {
    link: "/blog",
    label: "Blogs",
  },
  {
    link: "",
    label: "Projects",
  },
  {
    link: "",
    label: "Case Studies",
  },
  {
    link: "",
    label: "Company Profile",
  },
];

export const quickLinks = [
  {
    link: "",
    label: "Home",
  },
  {
    link: "",
    label: "Services",
  },
  {
    link: "",
    label: "Projects",
  },
  {
    link: "/blog",
    label: "Blogs",
  },
  {
    link: "",
    label: "Careers",
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
