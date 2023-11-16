import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isValidMobile = (mobileno) => {
    return /^[6-9]\d{9}$/.test(mobileno);
  };

  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <>
          <span className="text-capitalize">{field}</span> is required field.
        </>
      );
    } else {
      if (field === "email") {
        if (!isValidEmail(value)) return "Invalid Email.";
      } else if (field === "mobile") {
        if (!isValidMobile(value)) return "Invalid Mobile Number.";
      } else {
        return "";
      }
    }
  };

  const handleBlur = (event) => {
    setErrorMsg(validateField(event.target.name, event.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value
    });

    if (name === "mobile") {
      setContactData({
        ...contactData,
        mobile: value.replace(/\D/, "")
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, mobile, email, message } = contactData;
    if (!name || !mobile || !email || !message) {
      setSuccessMsg(false);
      return false;
    }

    setSuccessMsg(true);
    return true;
  };

  return (
    <div id="contact">
      <div className="form">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          {!successMsg ? (
            <>
              <div id="errormessage" className={errorMsg ? "show" : ""}>
                {errorMsg}
              </div>
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={contactData.name || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <input
                  name="mobile"
                  type="text"
                  maxLength={10}
                  className="form-control"
                  placeholder="Mobile"
                  onBlur={handleBlur}
                  value={contactData.mobile || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={contactData.email || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  value={contactData.message || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="3"
                />
              </div>
              <p className="text-right mb-0">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit Now"
                />
              </p>
            </>
          ) : (
            <div className="show" id="sendmessage">
              Thank for your message. We will contact you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
