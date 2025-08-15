import facebookIcon from "../../assets/images/facebook-icon.svg";
import instagramIcon from "../../assets/images/instagram-icon.svg";
import twitterIcon from "../../assets/images/twitter-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";

interface SocialShareProps {
  title: string;
  url: string;
}

const SocialShare = ({ title, url }: SocialShareProps) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const socialLinks = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: facebookIcon,
      title: "Share on Facebook",
    },
    {
      href: "",
      icon: instagramIcon,
      title: "Share on Instagram",
    },
    {
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: twitterIcon,
      title: "Share on Twitter",
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: linkedinIcon,
      title: "Share on LinkedIn",
    },
  ];

  return (
    <ul className="flex items-center gap-[2rem]">
      {socialLinks.map((item, idx) => (
        <li key={idx}>
          <a
            href={item.href}
            title={item.title}
            target="_blank"
            rel="noopener noreferrer"
            className="group opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <img
              src={item.icon}
              alt="Icon Image"
              className="size-full object-contain object-center"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialShare;
