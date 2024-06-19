'use client';
import { useRef, useState } from 'react';
import Button from './reusable/Button';
import Modal from './reusable/Modal';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const selectOptions = ['Web Application', 'Mobile Application'];

const HireMeModal = ({ onClose }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const _handleSubmit = async e => {
    e.preventDefault();

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
            toast.success('Thanks for contacting me I will email you soon!');
          },
          error => {
            toast.error(error?.text);
          },
        );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <Modal title="What project are you looking for?" onClose={onClose}>
      <form
        ref={form}
        onSubmit={e => {
          e.preventDefault();
        }}
        className="max-w-xl m-4 text-left">
        <div className="">
          <input
            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Name"
            aria-label="Name"
          />
        </div>
        <div className="mt-6">
          <input
            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="email"
            name="email"
            type="text"
            required=""
            placeholder="Email"
            aria-label="Email"
          />
        </div>
        <div className="mt-6">
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
          <textarea
            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Details"
            placeholder="Project description"></textarea>
        </div>

        <div className="mt-6 pb-4 sm:pb-1">
          <Button
            type="submit"
            loading={loading}
            onClick={_handleSubmit}
            title="Send Request"
            className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
          />
        </div>

        <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
          <Button
            title="Close"
            onClick={onClose}
            className="px-4
									sm:px-6
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
          />
        </div>
      </form>
    </Modal>
  );
};

export default HireMeModal;
