import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      // Assuming response.data.message is the success message from the server
      if (response.data && response.data.message) {
        toast.success(response.data.message);
      } else {
        toast.error("Unknown response from server");
      }

      // Clearing state after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="container form-component message-form">
        <h2>Send Us A Message</h2>
        <form onSubmit={handleMessage}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <textarea
            rows={7}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button className="sendmsg " type="submit" aria-label="Send Message">
  <svg
    class="send-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fill-opacity="0.4"
      d="m16.066 10.184l-3.89-1.795c-2.154-.994-3.231-1.491-3.725-.982c-.493.509.038 1.572 1.101 3.698c.22.44.33.659.33.895s-.11.456-.33.895c-1.063 2.126-1.594 3.19-1.1 3.698c.493.51 1.57.012 3.725-.982l3.889-1.795c1.698-.784 2.548-1.176 2.548-1.816c0-.64-.85-1.032-2.549-1.816"
    ></path>
    <path
      fill="currentColor"
      d="M8.895 11.684L8.174 9.52a1 1 0 0 0-.707-.654l-1.78-.445a.8.8 0 0 0-.91 1.134l1.111 2.22a.5.5 0 0 1 0 .448l-1.11 2.22a.8.8 0 0 0 .91 1.134l1.78-.445a1 1 0 0 0 .706-.654l.72-2.163a1 1 0 0 0 0-.632"
    ></path>
  </svg>
  Send Message
</button>




          </div>
        </form>
        <img src="/Vector.png" alt="vector" />
      </div>
    </>
  );
};

export default MessageForm;
