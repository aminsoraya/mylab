"use client";
import { useFormik } from "formik";
import { mutate } from "swr";
import { useContactUs } from "@/hooks/actions/contactUs";
import { toast } from "react-toastify";
import { useAppStore } from "@/hooks/store";
import Input from "../input";
import TextArea from "../textArea";
import Button from "../button";
import Vehicle from "../vehicle";
import { useState } from "react";

const SubmitForm = () => {
  let [frk_midv_id, setFrk_midv_id] = useState(undefined);
  let { domain, baseUrl } = useAppStore();

  const formit = useFormik({
    initialValues: {
      f_name: "",
      l_name: "",
      email: "",
      phone: "",
      message: "",
      frk_midv_id: "",
    },
    onSubmit: async (values, { resetForm }) => {
      let data = { ...values, frk_midv_id };
      let { textus } = await mutate(
        "contactUs",
        useContactUs(data, `${baseUrl}/api/dealerweb/textus/add/${domain}`)
      );
      if (textus) {
        toast.success("Successfully Done");
        resetForm();
      }
    },
  });
  return (
    <div className="bg-gray-dark p-5">
      <h1>Get In Touch</h1>
      <h3>Personal Information</h3>

      <form onSubmit={formit.handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center  justify-between gap-2">
            <Input
              required
              name="f_name"
              value={formit.values.f_name}
              type="text"
              className="w-full"
              placeholder="First Name"
              onChange={formit.handleChange}
            />
            <Input
              value={formit.values.l_name}
              required
              name="l_name"
              type="text"
              placeholder="Last Name"
              className="w-full"
              onChange={formit.handleChange}
            />
          </div>
          <div className="flex items-center  justify-between gap-2">
            <Input
              required
              name="email"
              type="email"
              value={formit.values.email}
              className="w-full"
              placeholder="Email"
              onChange={formit.handleChange}
            />
            <Input
              required
              name="phone"
              value={formit.values.phone}
              type="tel"
              className="w-full"
              placeholder="Phone"
              onChange={formit.handleChange}
            />
          </div>
          <div className="flex items-center gap-2 ">
            <Vehicle callback={(id) => setFrk_midv_id(id)} reset={formit.values.frk_midv_id} name="frk_midv_id" />
          </div>
          <div className="flex items-center gap-2 ">
            <TextArea
              value={formit.values.message}
              required
              name="message"
              className="w-full"
              placeholder="Message"
              onChange={formit.handleChange}
            />
          </div>
          <div className="flex items-center gap-10 ">
            <Button className="w-32 font-bold" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
