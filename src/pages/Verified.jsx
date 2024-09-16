import React, { useState, useEffect } from "react";


import { ToastContainer, toast } from "react-toastify";

import "./Verified.css"

function VerifyForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientCause, setPatientCause] = useState("");

  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    
    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientEmail("");
    setPatientCause("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };
  
  return (
    <div  className=" formfont ml-4 mr-4  appointment-form-section">
      <h1 className="legal-siteTitle">
        
      </h1>

      <div className="form-container rounded-lg">
        <h2 className="form-title">
          <span>ADD NGO</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Creator's Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Email Address:
            <input
              type="text"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              required
            />
            {formErrors.patientEmail && <p className="error-message">{formErrors.patientEmail}</p>}
          </label>

          <br />
          <label>
            Channel/Page Link:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>



          

          <br />
          <label>
            Select NGO:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">NGO1</option>
              <option value="video">NGO2</option>   
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>
          <br />
          <label>
            Cause for choosing this NGO:
            <input
              type="text"
              value={patientCause}
              onChange={(e) => setPatientCause(e.target.value)}
              required
            />
            {formErrors.patientCause && <p className="error-message">{formErrors.patientCause}</p>}
          </label>


          <br />

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Appointment details has been sent to the patients phone number via SMS.</p>
        </form>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default VerifyForm;