import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.navWrapper}>
      <header className={styles.nav}>
        <nav className={styles.iconSocialInstagramCopyCopWrapper}>
          <nav className={styles.iconSocialInstagramCopyCop}>
            <div className={styles.home}>Home</div>
            <div className={styles.about}>About</div>
            <div className={styles.contact}>Contact</div>
          </nav>
        </nav>
        <div className={styles.rectangle} />
        <div className={styles.elementButtonSmallFilled}>
          <h2 className={styles.landie}>Landing</h2>
        </div>
        <div className={styles.footerCopyright}>
          <div className={styles.elementbuttonsmallfilled}>
            <div className={styles.bg} />
            <div className={styles.buttonLabel}>Buy Now</div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent4;
