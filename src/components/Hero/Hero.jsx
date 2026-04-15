import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <a
          href="mailto:priyanshu00023@gmail.com?subject=Hello&body=Hello"
          target="_blank"
          className={styles.aTag}
        >
          <TypeAnimation
            className={styles.title}
            preRenderFirstString={true}
            sequence={["Hi,", 100, "Hi, I'm Priyanshu Urkade", 500]}
            speed={50}
            repeat={false}
          />{" "}
        </a>

        <div className={styles.roleRow}>
          <span className={styles.role}>Java Backend Developer</span>
          <span className={styles.roleDivider}>|</span>
          <span className={styles.role}>IT Analyst @ HCLTech</span>
        </div>

        <p className={styles.description}>
          I build backend systems that don’t break under load.<br/>
          Currently working on enterprise ServiceNow environments — debugging production issues, optimizing workflows, and maintaining cloud-based systems.
        </p>

        <div className={styles.proofBadge}>
          <span>🧠 Solved <strong>300+</strong> DSA problems</span>
          <span className={styles.proofDivider}>·</span>
          <span>⚙️ Resolved <strong>50+</strong> production issues @ HCLTech</span>
        </div>

        <a
          href="mailto:priyanshu00023@gmail.com?subject=Hello&body=Hello"
          target="_blank"
          className={styles.aTag}
        >
          <TypeAnimation
            className={styles.info}
            sequence={[
              2000,
              "Building scalable backend systems 🚀",
              900,
              "   ",
              100,
              "Open to Backend / Java Developer roles 💼",
              900,
            ]}
            speed={50}
            repeat={false}
          />{" "}
        </a>
        {/* <TypeAnimation
          className={styles.infoo}
          style={{ fontSize: "0.70em" }}
          sequence={[1500, "Open to Backend / Java Developer roles 💼", 900]}
          speed={50}
          repeat={false}
        /> */}

        <div className={styles.buttonGroup}>
          <a
            href="https://1drv.ms/b/s!AjBRftWPAkdHgkdr77SS6In8xVWx?e=yT0Caj"
            target="_blank"
            className={styles.button}
          >
            <span className={styles.button__text}>Download Resume</span>
            <img src={getImageUrl("hero/cone.png")} alt="" className={styles.button__cone} />
            <img src={getImageUrl("hero/torus.png")} alt="" className={styles.button__torus} />
            <img src={getImageUrl("hero/icosahedron.png")} alt="" className={styles.button__icosahedron} />
            <img src={getImageUrl("hero/sphere.png")} alt="" className={styles.button__sphere} />
          </a>
          <a
            href="mailto:priyanshu00023@gmail.com?subject=Hello"
            target="_blank"
            className={`${styles.button} ${styles.buttonSecondary}`}
          >
            <span className={styles.button__text}>Contact Me</span>
          </a>
          <a href="#projects" className={styles.viewProjectsLink}>
            View Projects ↓
          </a>
        </div>
      </div>
      <div className={styles.imgdiv}>
        <img
          src={getImageUrl("hero/bg.png")}
          alt="Hero background image"
          className={styles.heroBg}
        />
        <img
          src={getImageUrl("hero/img.png")}
          alt="Hero overlay image"
          className={`${styles.heroBg} ${styles.overlayImage}`}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
