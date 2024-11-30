import { BiLogoGithub } from "react-icons/bi";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.sectionFooter}>
      <p>
        &copy; 2024 -
        <a href="https://github.com/mohammad-mh1" target="_blank">
          <span>Mohammad-MH1</span>
          <BiLogoGithub />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
