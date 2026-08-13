import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailAddress = "shonesajanstjohns@ieee.org";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    toast.success("Email copied to clipboard! 📋", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(form.current);
    const name = formData.get("user_name") || formData.get("from_name") || "";
    const email = formData.get("user_email") || formData.get("from_email") || "";
    const subject = formData.get("subject") || "Portfolio Inquiry";
    const message = formData.get("message") || "";

    const handleSuccess = () => {
      setIsSending(false);
      setFormSubmitted(true);
      if (form.current) form.current.reset();
      toast.success("Message sent directly to shonesajanstjohns@ieee.org! ✅", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
      setTimeout(() => setFormSubmitted(false), 5000);
    };

    const handleFailure = (err) => {
      setIsSending(false);
      console.error("Error sending message:", err);
      toast.error("Failed to send message. Please check your connection and try again.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
    };

    // 1. Try EmailJS
    try {
      await emailjs.sendForm(
        "service_cpkmip8",
        "template_2q766j5",
        form.current,
        "UY_gyFEgm63flonDY"
      );
      handleSuccess();
    } catch (emailjsErr) {
      console.warn("EmailJS failed, switching to background API fallback...", emailjsErr);

      // 2. Direct background API fallback to IEEE Mail
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _captcha: "false",
          }),
        });

        if (response.ok) {
          handleSuccess();
        } else {
          handleFailure(emailjsErr);
        }
      } catch (fetchErr) {
        handleFailure(fetchErr);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactCards = [
    {
      id: "email",
      icon: <FaEnvelope className="text-2xl text-purple-400" />,
      title: "Email Address",
      value: emailAddress,
      action: (
        <button
          onClick={handleCopyEmail}
          type="button"
          className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 transition-all duration-300 active:scale-95 cursor-pointer"
          title="Copy Email to Clipboard"
        >
          {copied ? (
            <>
              <FaCheck className="text-green-400" /> Copied
            </>
          ) : (
            <>
              <FaCopy /> Copy
            </>
          )}
        </button>
      ),
      link: `mailto:${emailAddress}`,
    },
    {
      id: "linkedin",
      icon: <FaLinkedin className="text-2xl text-blue-400" />,
      title: "LinkedIn Profile",
      value: "linkedin.com/in/shone-sajan",
      action: (
        <a
          href="https://www.linkedin.com/in/shone-sajan/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 transition-all duration-300"
        >
          Connect <FaExternalLinkAlt size={10} />
        </a>
      ),
      link: "https://www.linkedin.com/in/shone-sajan/",
    },
    {
      id: "github",
      icon: <FaGithub className="text-2xl text-gray-300" />,
      title: "GitHub Repository",
      value: "github.com/shonesjn",
      action: (
        <a
          href="https://github.com/shonesjn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 border border-white/20 transition-all duration-300"
        >
          Visit <FaExternalLinkAlt size={10} />
        </a>
      ),
      link: "https://github.com/shonesjn",
    },
    {
      id: "location",
      icon: <FaMapMarkerAlt className="text-2xl text-pink-400" />,
      title: "Availability Status",
      value: "Open for Remote & On-site",
      action: (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Active
        </span>
      ),
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-5 sm:px-10 lg:px-20 overflow-hidden text-white flex flex-col justify-center items-center"
    >
      <ToastContainer />

      {/* Background Animated Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/15 blur-[140px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/15 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-2xl mx-auto mb-16"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-xs font-bold uppercase tracking-[4px] mb-3 inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md"
        >
          Contact & Connect
        </motion.p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
          Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">Extraordinary</span>
        </h2>

        <p className="text-gray-400 mt-4 text-base sm:text-lg leading-relaxed font-normal">
          Interested in working together or have a question? Reach out through any channel below or drop me a direct message!
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
      </motion.div>

      {/* Main Grid Content */}
      <div className="relative z-10 w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Staggered Glassmorphic Cards (5 cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-5 flex flex-col justify-between gap-4"
        >
          {contactCards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group relative p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.05] shadow-lg shadow-black/40 transition-all duration-300 flex items-center justify-between gap-4"
            >
              {/* Card glowing backdrop on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300 shrink-0">
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">{card.title}</p>
                  {card.link ? (
                    <a
                      href={card.link}
                      target={card.id !== "email" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-200 group-hover:text-purple-300 transition-colors truncate block mt-0.5"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-gray-200 mt-0.5 truncate">{card.value}</p>
                  )}
                </div>
              </div>

              <div className="shrink-0">
                {card.action}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side: Professional Glass Contact Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-950/20 flex flex-col justify-between"
        >
          {/* Form accent glow */}
          <div className="absolute top-0 right-0 -z-10 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

          <div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              Send a Message 
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Got a proposal or inquiry? Fill out the details below to reach me directly.
            </p>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-12 px-6 text-center rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-200"
                >
                  <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/40 text-2xl">
                    <FaCheck />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Delivered!</h4>
                  <p className="text-sm text-gray-300">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={form}
                  onSubmit={sendEmail}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {/* EmailJS destination targets */}
                  <input type="hidden" name="to_email" value={emailAddress} />
                  <input type="hidden" name="to_name" value="Shone Sajan" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="e.g. John Doe"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.06] transition-all duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.06] transition-all duration-300 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Opportunity / Hello"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.06] transition-all duration-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Share your thoughts or project details..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.06] transition-all duration-300 text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: isSending ? 1 : 1.02 }}
                    whileTap={{ scale: isSending ? 1 : 0.98 }}
                    className={`w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.55)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2 ${
                      isSending ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSending ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;