import "./Contact.css";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <section id="contact" className="contact">
      <div className="contact-head">
        <p>Contact</p>
      </div>
      <div className="contact-content">
        <div className="social-medias-container">
          <div className="social-media">
            <div className="social-media-icon">
              <FaWhatsapp />
            </div>
            <div className="social-media-content">
              <p>WhatsApp</p>
              <a className="link" href="https://wa.me/994553845188">
                <p>055 384 51 88</p>
              </a>
            </div>
            {/* <a className="link" href="https://wa.me/994553845188">
              Send message
            </a> */}
          </div>
          <div className="social-media">
            <div className="social-media-icon">
              <FiMail />
            </div>
            <div className="social-media-content">
              <p>Email</p>
              <a className="link" href="mailto:khesenov4444@gmail.com">
                <p>khesenov4444@gmail.com</p>
              </a>
            </div>
            {/* <a className="link" href="mailto:khesenov619@gmail.com">
              Send email
            </a> */}
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            id="subject"
            name="subject"
            className="contact-input"
            placeholder="Subject"
          />
          {/* <input type="text" id="message" className="contact-input" placeholder="Message" /> */}
          <textarea
            id="message"
            name="message"
            className="contact-input"
            placeholder="Message"
            cols="0"
            rows="6"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="contact-button"
          >
            Send message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
