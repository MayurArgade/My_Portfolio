import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import SectionWrapper from "./SectionWrapper";

const nameErrors = [
  "Name is too short.",
  "Please enter a valid name.",
];

const emailErrors = [
  "Invalid email address.",
  "Please enter a valid email address.",
];

const messageErrors = [
  "Message is too short.",
  "Please write a longer message.",
];

const EASY_CUBIC_BEZIER = [0.16, 1, 0.3, 1];

function getRandomError(errorsArray) {
  return errorsArray[
    Math.floor(Math.random() * errorsArray.length)
  ];
}

const Contact = () => {
  const form = useRef();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = () => {
    const formData = new FormData(form.current);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    const newErrors = {};

    if (!name || name.length < 2) {
      newErrors.name = getRandomError(nameErrors);
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = getRandomError(emailErrors);
    }

    if (!message || message.length < 10) {
      newErrors.message = getRandomError(messageErrors);
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (fieldName) => {
    if (errors[fieldName]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [fieldName]: "",
      }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_eyyxq5g",
        "template_t2fndcm",
        form.current,
        "oqTv6RpMEdwypkjzC"
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send. Please try again.");
        setLoading(false);
      });
  };

  const inputBaseClass =
    "w-full border-b bg-transparent px-0 py-4 text-base text-white outline-none transition-all duration-300 placeholder:text-neutral-600";

  return (
    <SectionWrapper delay={0.2}>
      <section
        id="contact"
        className="relative min-h-screen overflow-hidden bg-black px-6 py-28 text-white"
      >
        {/* BACKGROUND GRID */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="mx-auto grid h-full max-w-[1450px] grid-cols-4">
            <div className="border-r border-white" />
            <div className="border-r border-white" />
            <div className="border-r border-white" />
            <div />
          </div>
        </div>

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute bottom-[-15rem] right-[-10rem] h-[35rem] w-[35rem] rounded-full bg-blue-500/[0.08] blur-[130px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1450px]">
          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: EASY_CUBIC_BEZIER,
            }}
            className="mb-10 flex items-center justify-between border-b border-white/10 pb-5"
          >
            <div className="flex items-center gap-3 font-mono text-[10px] font-bold tracking-[0.2em] text-neutral-500">
              <span className="text-blue-400">04</span>

              <span>LET'S CONNECT / CONTACT</span>
            </div>

            <div className="hidden items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-neutral-600 sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

              <span>OPEN TO OPPORTUNITIES</span>
            </div>
          </motion.div>

          {/* HEADING */}
          <div className="mb-16">
            <motion.p
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-blue-400"
>
  GET IN TOUCH
</motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: EASY_CUBIC_BEZIER,
              }}
              className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl"
            >
              Let's build something{" "}
              <span className="text-neutral-500">together</span>
              <span className="text-blue-500">.</span>
            </motion.h2>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: EASY_CUBIC_BEZIER,
              }}
              className="flex flex-col justify-between"
            >
              <div>
                <span className="mb-5 block font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                  Have an idea?
                </span>

                <p className="max-w-md text-base leading-8 text-neutral-400">
                  Whether you have a project, collaboration, or
                  just want to talk about{" "}
                  <span className="text-white">
                    web development, AI, technology, or building
                    cool things
                  </span>
                  , my inbox is open.
                </p>
              </div>

              {/* CONTACT INFO */}
              <div className="mt-12 border-t border-white/10 pt-6">
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                  Direct contact
                </p>

                <a
                  href="mailto:your-email@example.com"
                  className="text-sm text-white transition-colors hover:text-blue-400"
                >
                  your-email@example.com ↗
                </a>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: EASY_CUBIC_BEZIER,
              }}
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    ref={form}
                    onSubmit={sendEmail}
                    noValidate
                    initial={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      y: -20,
                    }}
                    className="border-t border-white/10"
                  >
                    {/* NAME */}
                    <div className="relative border-b border-white/10 py-2">
                      <label
                        htmlFor="name"
                        className={`font-mono text-[9px] uppercase tracking-[0.18em] transition-colors ${
                          focusedField === "name"
                            ? "text-blue-400"
                            : "text-neutral-600"
                        }`}
                      >
                        01 / Your Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        onChange={() => handleChange("name")}
                        className={`${inputBaseClass} ${
                          errors.name
                            ? "border-red-400/70"
                            : focusedField === "name"
                            ? "border-blue-400"
                            : "border-white/10"
                        }`}
                      />

                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pb-2 font-mono text-[10px] text-red-400"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div className="relative border-b border-white/10 py-5">
                      <label
                        htmlFor="email"
                        className={`font-mono text-[9px] uppercase tracking-[0.18em] transition-colors ${
                          focusedField === "email"
                            ? "text-blue-400"
                            : "text-neutral-600"
                        }`}
                      >
                        02 / Your Email
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        onChange={() => handleChange("email")}
                        className={`${inputBaseClass} ${
                          errors.email
                            ? "border-red-400/70"
                            : focusedField === "email"
                            ? "border-blue-400"
                            : "border-white/10"
                        }`}
                      />

                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-2 font-mono text-[10px] text-red-400"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>

                    {/* MESSAGE */}
                    <div className="relative border-b border-white/10 py-5">
                      <label
                        htmlFor="message"
                        className={`font-mono text-[9px] uppercase tracking-[0.18em] transition-colors ${
                          focusedField === "message"
                            ? "text-blue-400"
                            : "text-neutral-600"
                        }`}
                      >
                        03 / Your Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Tell me what you're thinking..."
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        onChange={() => handleChange("message")}
                        className={`w-full resize-none border-b bg-transparent px-0 py-4 text-base leading-7 text-white outline-none transition-all duration-300 placeholder:text-neutral-600 ${
                          errors.message
                            ? "border-red-400/70"
                            : focusedField === "message"
                            ? "border-blue-400"
                            : "border-white/10"
                        }`}
                      />

                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-2 font-mono text-[10px] text-red-400"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* SUBMIT */}
                    <div className="flex justify-end pt-8">
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={
                          loading
                            ? {}
                            : {
                                y: -3,
                              }
                        }
                        whileTap={
                          loading
                            ? {}
                            : {
                                scale: 0.97,
                              }
                        }
                        className={`group flex items-center gap-4 rounded-full px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] transition-all ${
                          loading
                            ? "cursor-not-allowed bg-neutral-800 text-neutral-500"
                            : "bg-blue-500 text-black hover:bg-blue-400 hover:shadow-[0_10px_35px_rgba(59,130,246,0.2)]"
                        }`}
                      >
                        <span>
                          {loading
                            ? "Sending..."
                            : "Send Message"}
                        </span>

                        <motion.span
                          animate={
                            loading
                              ? {
                                  rotate: 360,
                                }
                              : {}
                          }
                          transition={
                            loading
                              ? {
                                  repeat: Infinity,
                                  duration: 1,
                                  ease: "linear",
                                }
                              : {}
                          }
                          className="text-base"
                        >
                          {loading ? "◌" : "↗"}
                        </motion.span>
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: EASY_CUBIC_BEZIER,
                    }}
                    className="flex min-h-[420px] flex-col justify-center border-t border-white/10"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/30 bg-blue-400/10 text-2xl text-blue-400">
                      ✓
                    </div>

                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400">
                      Message Sent Successfully
                    </p>

                    <h3 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                      Thanks for reaching out
                      <span className="text-blue-500">.</span>
                    </h3>

                    <p className="mt-5 max-w-md leading-7 text-neutral-400">
                      Your message landed safely in my inbox.
                      I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* FOOTER */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="mt-20 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-600"
          >
            <span className="h-px flex-1 bg-white/10" />

            <p>Thanks for stopping by.</p>

            <span className="h-px flex-1 bg-white/10" />
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Contact;