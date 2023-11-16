import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isValidMobile = (cellNumber) => {
    return /^[6-9]\d{9}$/.test(cellNumber);
  };

  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <>
          <span className="text-capitalize">{field}</span> is a required field.
        </>
      );
    } else {
      if (field === "email") {
        if (!isValidEmail(value)) return "Invalid Email.";
      } else if (field === "cellNumber") {
        if (!isValidMobile(value)) return "Invalid Cell Number.";
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

    if (name === "cellNumber") {
      setContactData({
        ...contactData,
        cellNumber: value.replace(/\D/, "")
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, address, city, province, country, cellNumber, email, message } = contactData;
    if (!firstName || !lastName || !address || !city || !province || !country || !cellNumber || !email || !message) {
      setSuccessMsg(false);
      return false;
    }

    setSuccessMsg(true);
    return true;
  };

  return (
    <div id="contact" style={styles.container}>
      <div className="form" style={styles.form}>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
          style={styles.form}
        >
          {!successMsg ? (
            <>
              <div id="errormessage" className={errorMsg ? "show" : ""}>
                {errorMsg}
              </div>
              <div className="form-group">
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={contactData.firstName || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
              </div>
              <div className="form-group">
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={contactData.lastName || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
              </div>
              <div className="form-group">
                <input
                  name="address"
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  value={contactData.address || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
              </div>
              <div className="form-group">
                <input
                  name="city"
                  type="text"
                  className="form-control"
                  placeholder="City"
                  value={contactData.city || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
              </div>
              <div className="form-group">
                <input
                  name="province"
                  type="text"
                  className="form-control"
                  placeholder="Province"
                  value={contactData.province || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
              </div>
              <div className="form-group">
                <input
                  name="country"
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  value={contactData.country || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
              </div>
              <div className="form-group">
                <input
                  name="cellNumber"
                  type="text"
                  maxLength={10}
                  className="form-control"
                  placeholder="Cell Number"
                  onBlur={handleBlur}
                  value={contactData.cellNumber || ""}
                  onChange={handleChange}
                  style={styles.input}
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
                  style={styles.input}
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
                  style={styles.input}
                />
              </div>
              <p className="text-left mb-0">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit Now"
                  style={styles.button}
                />
              </p>
            </>
          ) : (
            <div className="show" id="sendmessage" style={styles.successMessage}>
              Thank you for your message. We will contact you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5',
    textAlign: 'left',
  },
  form: {
    textAlign: 'left',
  },
  input: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  successMessage: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '15px',
    borderRadius: '5px',
  },
};

export default Contact;
