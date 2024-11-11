'use client';

import {AiOutlineMail} from 'react-icons/ai';
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import './contact.css';
// import emailjs from 'emailjs.com';
import {useRef, useState} from 'react';

import {FaLocationArrow} from 'react-icons/fa';
import Loader from '../loader/Loader';
import MagicButton from '../MagicButton';
import HeaderTitle from '../ui/HeaderTitle';
export default function Contact() {
  const contacts = [
    {
      id: 1,
      contactIcon: <AiOutlineMail />,
      contactTitle: 'email',
      contactMeans: 'deulo.dev@gmail.com',
      contactApi: 'mailto:deulo.dev@gmail.com',
    },

    {
      id: 2,
      contactIcon: <BsLinkedin />,
      contactTitle: 'LinkedIn',
      contactMeans: 'www.linkedin.com/in/deulo',
      contactApi: 'https://www.linkedin.com/in/deulo',
    },

    {
      id: 3,
      contactIcon: <BsWhatsapp />,
      contactTitle: 'Whatsapp',
      contactMeans: '+(234)-703 868 9224',
      contactApi: 'https://api.whatsapp.com/send?phone=2347038689224',
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      await emailjs.sendForm(
        'service_k8elero',
        'template_komzkjh',
        form.current,
        'knq7Q0BAOEuhUq-of'
      );
      setMessage('Message sent successfully!');
      e.target.reset();
    } catch (error) {
      setMessage('Failed to send message. Please try again.');
      console.log('Email sending failed', error);
    }

    setIsLoading(false); // Hide loader
  };

  return (
    <section className="w-full flex flex-col gap- md:gap-10 py-6 ">
      <HeaderTitle title="Get in Touch" />
      <section className="contact_container">
        <div className="contact_apps">
          {contacts.map(({id, contactIcon, contactTitle, contactMeans, contactApi}) => {
            return (
              <div key={id} className="contact_me">
                <div className="flex gap-2 justify-center">
                  <i className="contact_icon">{contactIcon}</i>
                  <h4 className="contact_title">{contactTitle}</h4>
                </div>
                <h5 className="contact_means">{contactMeans}</h5>
                <a href={contactApi} className="contact_api" target="_blank" rel="noreferrer">
                  Send a message
                </a>
              </div>
            );
          })}
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <input
            className="contact_input_field"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className="contact_input_field"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="contact_input_field"
            name="message"
            id=""
            cols="30"
            rows="12"
            placeholder="Your Message"
            required></textarea>

          <MagicButton
            type="submit"
            title="Send message"
            icon={<FaLocationArrow />}
            position="right"
          />

          {isLoading && (
            <div className="loader_container">
              <Loader />
            </div>
          )}
          {message && <div className="message_container">{message}</div>}
        </form>
      </section>
    </section>
  );
}
