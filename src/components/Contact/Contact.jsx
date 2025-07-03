import "./Contact.css";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
export default function Contact() {
  const [confirmation, setConfirmation] = useState("");
  const [confirmationType, setConfirmationType] = useState("success"); // 'success' or 'error'

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    let from_name = data.get("name");
    let from_email = data.get("email");
    let subject = data.get("subject");
    let message = data.get("message");

    // Only send email if all fields are filled
    if (!from_name || !from_email || !subject || !message) {
      setConfirmationType("error");
      setConfirmation("Please fill in all fields before sending your message.");
      setTimeout(() => setConfirmation(""), 4000);
      return;
    }

    const info = {
      service_id: "service_rb8a12f",
      template_id: "template_1ccxzxa",
      user_id: "u8DzCi9CDTx9jlwwT",
      template_params: {
        from_name,
        from_email,
        subject,
        message,
      },
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((resp) => resp.text())
      .then((responseText) => {
        console.log(responseText);
        if (responseText.trim() === "OK") {
          setConfirmationType("success");
          setConfirmation("Your message has been sent! Thank you.");
          evt.target.reset();
        } else {
          setConfirmationType("error");
          setConfirmation("There was an error sending your message. Please try again.");
        }
        setTimeout(() => setConfirmation(""), 4000);
      })
      .catch((err) => {
        console.log(err);
        setConfirmationType("error");
        setConfirmation(
          "There was an error sending your message. Please try again."
        );
        setTimeout(() => setConfirmation(""), 4000);
      });
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      //   variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: false }}
    >
      <motion.div className="contact-head" variants={itemVariants}>
        <p>Contact</p>
      </motion.div>
      <motion.div className="contact-content" variants={containerVariants}>
        <motion.div
          className="social-medias-container"
          variants={containerVariants}
        >
          <motion.div
            className="social-media"
            variants={itemVariants}
            whileHover={{ scale: 1.08, rotate: -2 }}
          >
            <motion.div
              className="social-media-icon"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaWhatsapp />
            </motion.div>
            <div className="social-media-content">
              <p>WhatsApp</p>
              <a className="link" href="https://wa.me/994553845188">
                <p>055 384 51 88</p>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="social-media"
            variants={itemVariants}
            whileHover={{ scale: 1.08, rotate: 2 }}
          >
            <motion.div
              className="social-media-icon"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiMail />
            </motion.div>
            <div className="social-media-content">
              <p>Email</p>
              <a className="link" href="mailto:khesenov4444@gmail.com">
                <p>khesenov4444@gmail.com</p>
              </a>
            </div>
          </motion.div>
        </motion.div>
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              placeholder="Name"
              variants={itemVariants}
            />
            <motion.input
              type="email"
              id="email"
              name="email"
              className="contact-input"
              placeholder="Email"
              variants={itemVariants}
            />
          </motion.div>
          <motion.input
            type="text"
            id="subject"
            name="subject"
            className="contact-input"
            placeholder="Subject"
            variants={itemVariants}
          />
          <motion.textarea
            id="message"
            name="message"
            className="contact-input"
            placeholder="Message"
            cols="0"
            rows="6"
            variants={itemVariants}
          ></motion.textarea>
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 16px 2px var(--secondary-color)",
              backgroundColor: "var(--secondary-color)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="contact-button"
            variants={itemVariants}
          >
            Send message
          </motion.button>
        </motion.form>
      </motion.div>
      {confirmation && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className={`contact-confirmation-modern ${
            confirmationType === "error"
              ? "contact-confirmation-error"
              : "contact-confirmation-success"
          }`}
        >
          {/* <span className="contact-confirmation-icon">
          {confirmationType === "error" ? "❌" : "✔️"}
        </span> */}
          {confirmation}
        </motion.div>
      )}
    </motion.section>
  );
}
