import "./Contact.css";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

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
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    let from_name = data.get("name");
    let from_email = data.get("email");
    let subject = data.get("subject");
    let message = data.get("message");

    const info = {
      service_id: "service_kvsioe4",
      template_id: "template_5sgx5bh",
      user_id: "we4gCtQVB0JdjnOd8",
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
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        alert("Email is sent!");
      })
      .catch((err) => {
        console.log(err);
      });

    evt.target.reset();
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
        <motion.div className="social-medias-container" variants={containerVariants}>
          <motion.div className="social-media" variants={itemVariants} whileHover={{ scale: 1.08, rotate: -2 }}>
            <motion.div className="social-media-icon" whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              <FaWhatsapp />
            </motion.div>
            <div className="social-media-content">
              <p>WhatsApp</p>
              <a className="link" href="https://wa.me/994553845188">
                <p>055 384 51 88</p>
              </a>
            </div>
          </motion.div>
          <motion.div className="social-media" variants={itemVariants} whileHover={{ scale: 1.08, rotate: 2 }}>
            <motion.div className="social-media-icon" whileHover={{ scale: 1.2, rotate: -10 }} transition={{ type: "spring", stiffness: 300 }}>
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
        <motion.form className="contact-form" onSubmit={handleSubmit} variants={containerVariants}>
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
            whileHover={{ scale: 1.08, boxShadow: "0 0 16px 2px var(--secondary-color)", backgroundColor: "var(--secondary-color)" }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="contact-button"
            variants={itemVariants}
          >
            Send message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
