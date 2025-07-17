import NavigationDropdown from "../common/NavigationDropdown";
import NavigationLink from "../common/NavigationLink";
import dropdownImg1 from "../../assets/images/dropdown-img-1.webm";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-[3rem]">
        <li>
          <NavigationLink link="/" label="About" />
        </li>
        <li>
          <NavigationDropdown
            title="Services"
            media={dropdownImg1}
            description="Reliable industrial services built for safety, performance, and project success."
            navItems={[
              {
                label: "Field Services",
                link: "/",
                description:
                  "On-site maintenance, repairs, and commissioning by skilled technicians.",
              },
              {
                label: "Consultancy",
                link: "/",
                description:
                  "Expert guidance for equipment, operations, and project planning success.",
              },
              {
                label: "Contruction",
                link: "/",
                description:
                  "Reliable industrial construction delivered safely, efficiently, and on time.",
              },
              {
                label: "Engineering",
                link: "/",
                description:
                  "Tailored engineering solutions focused on reliability, compliance, and performance.",
              },
              {
                label: "Protective Coating",
                link: "/",
                description:
                  "Durable coatings to protect assets in harsh industrial environments.",
              },
              {
                label: "Fire-Proofing",
                link: "/",
                description:
                  "Fire-resistant systems for industrial safety and regulatory compliance assurance.",
              },
              {
                label: "Inspection & Testing",
                link: "/",
                description:
                  "Certified inspections to ensure operational safety, quality, and readiness.",
              },
            ]}
          />
        </li>
        <li>
          <NavigationLink link="/" label="Projects" />
        </li>
        <li>
          <NavigationLink link="/blog" label="Blogs" />
        </li>
        <li>
          <NavigationLink link="/" label="Careers" />
        </li>
        <li>
          <NavigationLink link="/" label="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
