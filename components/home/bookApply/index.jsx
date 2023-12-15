"use client";
import styles from "@/assets/sass/bookApply.module.scss";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";
import RootContainer from "@/components/shared/container";

const BookApply = () => {
  const imageUrl =
    "/img/2022_bentley_flying_spur_hybrid_5k_7-HD-1-scaled-pqj35bw2yuysg3t40p19etb8ekfo1l8dsc9w53a6q0.jpg";

  return (
    <RootContainer>
      <div className={styles.main}>
        <Row>
          <Col
            lg={4}
            className={`${styles.colImage} d-none d-lg-block`}
            sm={12}
          >
            <Image
              src={imageUrl}
              sizes="(max-width:1200px) 100vw"
              height={400}
              width={370}
              placeholder="empty"
            />
          </Col>
          <Col className={styles.colText} lg={4} md={6} sm={12}>
            <h2>Apply For Financing</h2>
            <p>
              The United Auto Sales Ltd financing application is dedicated to
              exceeding your expectations throughout your visit to our
              dealership. We make every effort to ensure that each customer is
              completely satisfied.
            </p>
            <button>Apply Now</button>
          </Col>
          <Col lg={4} md={6} sm={12} className={styles.colText}>
            <h2>Book An Appointment</h2>
            <p>
              The majority of customers now prefer to be able to book
              appointments quickly and easily online , So we here at United Auto
              Sales Ltd have decided to provide you with the tools needed for
              booking an appointment at the time of your convenience .
            </p>
            <button>Book Now</button>
          </Col>
        </Row>
      </div>
    </RootContainer>
  );
};

export default BookApply;
