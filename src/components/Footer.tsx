import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.rectangle} />
      <div className={styles.footerBar}>
        <div className={styles.footerContent}>
          <div className={styles.div}>©2023 Yourcompany</div>
        </div>
        <div className={styles.landieWrapper}>
          <h2 className={styles.landie}>Landing</h2>
        </div>
        <div className={styles.elementbuttonsmallfilledWrapper}>
          <div className={styles.elementbuttonsmallfilled}>
            <div className={styles.bg} />
            <div className={styles.buttonLabel}>Purchase now</div>
          </div>
        </div>
      </div>
      <div className={styles.buttonBox}>
        <div className={styles.rectangle1} />
        <div className={styles.instagramIcon}>
          <div className={styles.iconSocialInstagramCopyCop}>
            <div className={styles.home}>Home</div>
            <div className={styles.about}>About</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.infoCardWrapper}>
            <div className={styles.infoCard}>
              <img
                className={styles.iconsocialinstagramCopy4}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-4.svg"
              />
              <img
                className={styles.iconsocialinstagramCopy3}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-3@2x.png"
              />
              <img
                className={styles.iconsocialinstagramCopy2}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-2.svg"
              />
              <img
                className={styles.iconsocialinstagramCopy}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy@2x.png"
              />
              <img
                className={styles.iconsocialinstagram}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
