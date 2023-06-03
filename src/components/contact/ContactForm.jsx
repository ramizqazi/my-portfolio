'use client';
import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const selectOptions = ['Web Application', 'Mobile Application'];

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const _handleSubmit = async e => {
    e.preventDefault();
		console.log(form.current.subject.value)

    try {
      setLoading(true);

      await emailjs
        .sendForm(
          'service_pbridp4',
          'template_rawritw',
          form.current,
          'TloWJwNdu_hrEL2A9',
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          },
        );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          ref={form}
          onSubmit={_handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message">
              Subject
            </label>
            <select
              className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="subject"
              name="subject"
              type="text"
              required=""
              aria-label="Project Category">
              {selectOptions.map(option => (
                <option className="text-normal sm:text-md" key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button
              type="submit"
							loading={loading}
              title="Send Message"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
