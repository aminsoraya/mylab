import { Formik, Field, Form } from "formik";
import { mutate } from "swr";
import { useContactUs } from "@/hooks/actions/contactUs";
import { useAppStore } from "@/hooks/store";
import { toast } from "react-toastify";
import { useVehicles } from "@/hooks/actions/vehicles";
import useSWR from "swr";

const SubmitForm = () => {
  let { domain, baseUrl, dealerData } = useAppStore();

  let { data: vehicles, isLoading } = useSWR(
    `${baseUrl}/api/dealership/advance/search/vehicles/get/${domain}`,
    useVehicles
  );

  console.log("vehicles ", vehicles);
  return (
    // <div className={styles.form}>
    //   <h2>Get In Touch</h2>
    //   <h4 className={styles.h4}>Personal Information</h4>
    //   <Formik
    //     initialValues={{
    //       f_name: "",
    //       l_name: "",
    //       email: "",
    //       phone: "",
    //       message: "",
    //     }}
    //     onSubmit={async (values, { resetForm }) => {
    //       let { textus } = await mutate(
    //         "contactUs",
    //         useContactUs(
    //           values,
    //           `${baseUrl}/api/dealerweb/textus/add/${domain}`
    //         )
    //       );
    //       textus && toast.success("Successfully Done");
    //       resetForm();
    //     }}
    //   >
    //     <Form>
    //       <Row>
    //         <Col lg={6} className="mb-3">
    //           <Field name="f_name" type="text" placeholder="First Name" />
    //         </Col>
    //         <Col lg={6} className="mb-3">
    //           <Field name="l_name" type="text" placeholder="Last Name" />
    //         </Col>
    //         <Col lg={6} className="mb-3">
    //           <Field name="email" type="text" placeholder="Email" />
    //         </Col>
    //         <Col lg={6} className="mb-3">
    //           <Field name="phone" type="text" placeholder="Phone" />
    //         </Col>
    //         <Col>
    //           <Field
    //             name="desired_mid_vehicle"
    //             placeholder="Desired Mid Vehicle"
    //           />
    //         </Col>
    //         <Col lg={12} className="mb-3">
    //           <Field name="message" as="textarea" placeholder="Message" />
    //         </Col>

    //         <Col>
    //           <button type="submit" className={styles.submit}>
    //             Submit
    //           </button>
    //         </Col>
    //       </Row>
    //     </Form>
    //   </Formik>
    // </div>
    <></>
  );
};

export default SubmitForm;
