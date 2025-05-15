import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Container, SocialLink,  LineH, LineV } from "./style";

function SocialBar() {
  return (
    <Container>
      <SocialLink
        href="https://github.com/danielcoosta1"
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{
          rest: { scale: 1, color: "#8892b0" },
          hover: { scale: 1.2, color: "#64ffda" },
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaGithub className="icon" />
      </SocialLink>

      <SocialLink
        href="https://www.linkedin.com/in/daniel-correia-costa/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{
          rest: { scale: 1, color: "#8892b0" },
          hover: { scale: 1.2, color: "#64ffda" },
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaLinkedin className="icon" />
      </SocialLink>

      <SocialLink
        href="https://instagram.com/dcc.daniel"
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{
          rest: { scale: 1, color: "#8892b0" },
          hover: { scale: 1.2, color: "#64ffda" },
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaInstagram className="icon" />
      </SocialLink>

      <LineH />
      <LineV />
    </Container>
  );
}

export default SocialBar;
