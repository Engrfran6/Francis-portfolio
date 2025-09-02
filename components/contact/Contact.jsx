"use client";

// import emailjs from "emailjs.com";
import {Loader, Send} from "lucide-react";
import {useRef, useState} from "react";
import {AiOutlineMail} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs";
import {MdSchedule} from "react-icons/md";

function EmailContact() {
  const email = "deulo.dev@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <a
      href={`mailto:${email}`}
      className="flex flex-col items-center bg-black text-white rounded-xl p-8 border border-white/10 hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
      aria-label={`Send email to ${email}`}
      target="_self"
      onClick={(e) => {
        // If user holds Shift, Ctrl, or Cmd, open mail client.
        // Otherwise, prevent default and copy email
        if (!(e.shiftKey || e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          copyToClipboard();
        }
      }}
      role="listitem">
      <AiOutlineMail className="text-2xl mb-2 text-cyan-400" />
      <span className="text-sm font-medium select-none cursor-pointer">{email}</span>

      {copied && (
        <span className="absolute top-2 right-2 text-xs text-green-400 font-semibold select-none">
          Copied!
        </span>
      )}
    </a>
  );
}

const contacts = [
  {
    id: "email",
    component: <EmailContact />,
  },
  {
    id: "calendly",
    icon: <MdSchedule className="text-2xl mb-2" />,
    label: "Schedule a Call",
    link: "https://calendly.com/deulo-careers/meeting-with-francis-u-okpoluaefe",
    ariaLabel: "Schedule a call via Calendly",
  },
  {
    id: "whatsapp",
    icon: <BsWhatsapp className="text-2xl mb-2" />,
    label: "WhatsApp",
    link: "https://api.whatsapp.com/send?phone=2347038689224",
    ariaLabel: "Send WhatsApp message",
  },
];

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // Uncomment and configure emailjs if ready to use
      // await emailjs.sendForm(
      //   "service_k8elero",
      //   "template_komzkjh",
      //   form.current,
      //   "knq7Q0BAOEuhUq-of"
      // );
      setMessage("Message sent successfully!");
      e.target.reset();

      if (form.current?.name) {
        form.current.name.focus();
      }
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
      console.error("Email sending failed", error);
    }

    setIsLoading(false);
  };

  return (
    <section
      className="max-w-4xl mx-auto p-4 md:p-6 grid gap-6 md:grid-cols-[30%_58%] md:gap-x-[12%] mt-10 md:mt-20"
      aria-label="Contact section">
      <div>
        <h2 className="text-2xl text-cyan-400 font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-6">
          I’d love to hear from you! Choose your preferred contact method below or send me a message
          directly.
        </p>

        {/* Contact options */}
        <nav className="grid gap-4" aria-label="Contact options" role="list">
          {contacts.map(({id, icon, label, link, ariaLabel, component}) =>
            component ? (
              <div key={id}>{component}</div>
            ) : (
              <a
                key={id}
                href={link.trim()}
                className="flex flex-col items-center bg-black rounded-xl p-8 border border-white/10 hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                target={link.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noreferrer"
                aria-label={ariaLabel}
                role="listitem">
                <span className="text-cyan-400"> {icon}</span>

                <span className="text-sm font-medium select-none cursor-pointer">{label}</span>
              </a>
            )
          )}
        </nav>
      </div>

      {/* Contact form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        noValidate
        aria-label="Contact form"
        className="relative flex flex-col gap-4 bg-black rounded-xl border border-white/10 p-8">
        <label htmlFor="name" className="sr-only">
          Full name (Optional)
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter fullname (Optional)"
          className="w-full text-white bg-black border-b border-white/10 px-4 py-4 text-base placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          disabled={isLoading}
          autoComplete="name"
        />

        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email"
          required
          className="w-full text-white bg-black border-b border-white/10 px-4 py-4 text-base placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          disabled={isLoading}
          autoComplete="email"
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="8"
          placeholder="Type your message"
          required
          className="w-full text-white bg-black border-b border-white/10 px-4 py-4 text-base placeholder-gray-400 resize-y focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          disabled={isLoading}></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center justify-center gap-2 px-6 py-3 mt-6 border border-gray-500 rounded-md bg-transparent hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500">
          {isLoading ? (
            <>
              Sending... <Loader size={16} className="animate-spin" />
            </>
          ) : (
            <>
              Send <Send size={16} className="text-cyan-400" />
            </>
          )}
        </button>

        {message && (
          <div
            role="alert"
            className={`absolute bottom-1/3 left-1/2 -translate-x-1/2 px-6 py-3 rounded w-max ${
              message.includes("successfully")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}>
            {message}
          </div>
        )}
      </form>
    </section>
  );
}
