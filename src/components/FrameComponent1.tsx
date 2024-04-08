import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.cta}>
        <div className={styles.rectangle} />
        <img
          className={styles.undrawMention6k5dIcon}
          loading="lazy"
          alt=""
          src="/undraw-mention-6k5d@2x.png"
        />
        <div className={styles.nA}>
          <div className={styles.frameParent}>
            <div className={styles.titleParent}>
              <h1 className={styles.title}>{`Light, Fast & Powerful`}</h1>
              <div className={styles.body}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
                <p className={styles.musDonecQuam}>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
            <div className={styles.elementbuttonmediumfilled}>
              <div className={styles.bg} />
              <div className={styles.buttonLabel}>Purchase Now</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
