import { Link } from "react-router-dom";

import images from "../assets/images";

export default function MainScreen() {
  return (
    <div style={styles.mainScreen}>
      <div style={styles.background}>
        <img
          alt="background"
          src={images.background}
          style={styles.backgroundImage}
        />
      </div>
      <div style={styles.content}>
        <Header />
        <div style={styles.body}>
          <Button text="One" navTo="part-one" />
          <Button text="Two" navTo="part-two" />
          <Button text="Three" navTo="part-three" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Button({ navTo, text }) {
  return (
    <Link style={styles.button} to={navTo}>
      <div style={styles.buttonText}>
        <img alt="code" src={images.code} style={styles.codeIcon} />
        <div>{text}</div>
      </div>
      <img
        alt="right arrow"
        src={images.rightArrow}
        style={styles.rightArrow}
      />
    </Link>
  );
}

function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.footerText}>
        {`HAYSTACK | CUSTOM SOFTWARE, WEB & MOBILE APP SOLUTIONS`}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div style={styles.header}>
      <img alt="logo" src={images.hstkLogo} style={styles.hstkLogo} />
      <div style={styles.title}>Take Home Test</div>
      <div style={styles.underline} />
    </div>
  );
}

const styles = {
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: "hidden",
  },
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    flex: 1,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    paddingTop: 36,
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    opacity: 0.95,
    padding: "7px 20px 7px 10px",
    textDecoration: "none",
  },
  buttonText: {
    fontSize: 20,
    color: "#151515",
    alignItems: "center",
    display: "flex",
  },
  codeIcon: {
    width: 36,
  },
  content: {
    maxWidth: 720,
    margin: "auto",
    padding: 36,
  },
  footer: {
    bottom: 36,
    position: "fixed",
    width: "100%",
  },
  footerText: {
    color: "white",
    fontSize: 12,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    width: 300,
  },
  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  hstkLogo: {
    paddingTop: 72,
    width: 290,
  },
  mainScreen: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: "auto",
    background: "#1a1a1a",
  },
  rightArrow: {
    width: 10,
  },
  title: {
    color: "white",
    marginTop: 36,
    fontSize: 12,
  },
  underline: {
    borderBottomColor: "#FFBF00",
    width: "100%",
    height: 3,
    backgroundColor: "#FFBF00",
    marginTop: 36,
  },
};
