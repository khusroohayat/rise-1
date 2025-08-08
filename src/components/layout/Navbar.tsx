import NavigationDropdown from "../common/NavigationDropdown";
import NavigationLink from "../common/NavigationLink";
import dropdownImg1 from "../../assets/images/dropdown-img-1.webm";
import dropdownImg2 from "../../assets/images/dropdown-img-2.webm";
import dropdownImg3 from "../../assets/images/dropdown-img-3.webm";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-[3rem]">
        <li>
          <NavigationDropdown
            title="About"
            titleLink="/about"
            media={dropdownImg1}
            description="Discover who we are, how we work, and what we stand for."
            navItems={[
              {
                label: "Who We Are",
                link: "/about#who-we-are",
                description:
                  "Get to know the people, purpose, and experience behind RISE Engineering.",
              },
              {
                label: "Our Approach",
                link: "/about#our-approach",
                description:
                  "How we plan, execute, and deliver industrial solutions that work in the real world.",
              },
              {
                label: "Our Commitment",
                link: "/about#our-commitment",
                description:
                  "Our promise to safety, quality, and long-term partnerships with every client.",
              },
              {
                label: "Key Policies",
                link: "/about#key-policies",
                description:
                  "Explore the principles that guide our work — safety, reliability, and integrity.",
              },
              {
                label: "Careers",
                link: "/about#careers",
                description:
                  "Discover opportunities to grow with a team built on experience and trust.",
              },
            ]}
          />
        </li>
        <li>
          <NavigationDropdown
            title="Services"
            titleLink="/services"
            media={dropdownImg2}
            description="Explore the range of solutions we provide across oil and gas."
            navItems={[
              {
                label: "Field Services",
                link: "/services#field-services",
                description:
                  "On-site maintenance, repairs, and commissioning by skilled technicians.",
              },
              {
                label: "Consultancy",
                link: "/services#consultancy",
                description:
                  "Expert guidance for equipment, operations, and project planning success.",
              },
              {
                label: "Contruction",
                link: "/services#construction",
                description:
                  "Reliable industrial construction delivered safely, efficiently, and on time.",
              },
              {
                label: "Engineering",
                link: "/services#engineering",
                description:
                  "Tailored engineering solutions focused on reliability, compliance, and performance.",
              },
              {
                label: "Protective Coating",
                link: "/services#protective-coating",
                description:
                  "Durable coatings to protect assets in harsh industrial environments.",
              },
              {
                label: "Fire-Proofing",
                link: "/services#fire-proofing",
                description:
                  "Fire-resistant systems for industrial safety and regulatory compliance assurance.",
              },
            ]}
          />
        </li>
        <li>
          <NavigationDropdown
            title="Projects"
            titleLink="/projects"
            media={dropdownImg3}
            description="See how we deliver results across complex industrial environments."
            navItems={[
              {
                label: "Completed Projects",
                link: "/projects#completed-projects",
                description:
                  "A showcase of our successfully delivered engineering and maintenance work.",
              },
              {
                label: "Ongoing Projects",
                link: "/projects#ongoing-projects",
                description:
                  "Explore current projects where our teams are actively working on-site.",
              },
              {
                label: "Project Highlights",
                link: "/projects#project-highlights",
                description:
                  "Key milestones, challenges, and achievements from select projects.",
              },
            ]}
          />
        </li>
        <li>
          <NavigationDropdown
            title="Resources"
            titleLink="/resources"
            media={dropdownImg1}
            description="Explore our knowledge base from expert insights to technical documents."
            navItems={[
              {
                label: "Blogs",
                link: "/blog",
                description:
                  "Insights and articles from the world of engineering, EPCC, and oil & gas.",
              },
              {
                label: "Case Studies",
                link: "/resources#case-studies",
                description:
                  "Real-world examples of how RISE delivers results.",
              },
              {
                label: "News & Updates",
                link: "/resources#news-updates",
                description:
                  "The latest project launches, and company milestones from RISE Engineering.",
              },
              {
                label: "Whitepaper",
                link: "/resources#white-paper",
                description:
                  "In-depth technical papers and research on engineering tailored for decision-makers.",
              },
            ]}
          />
        </li>
        <li>
          <NavigationLink link="/contact" label="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
