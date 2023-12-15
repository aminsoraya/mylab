import styles from "@/assets/sass/aboutUs.module.scss";
import Image from "next/image";
import RootContainer from "@/components/shared/container";

const AboutUs = () => {
  return (
    <RootContainer>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.img}>
            <Image src="/img/aboutUs.png" fill />
            <div className={styles.aboutUs}>
              <h2>About Us</h2>
              <p>
                United Auto Sales Ltd would be honored to have you as a friend
                and a customer. We are here to collect best cars available in
                the market and help you to choose the best one based on your
                needs and interests.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </RootContainer>
  );
};

export default AboutUs;
