import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm.jsx";

const Appointment = () => {
  return (
    <>
      <Hero
        tittle={"Schedule Your Appointment | We Do Care Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;