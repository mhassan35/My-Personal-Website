"use client"
import React, { useRef, useState } from 'react';
import  { useFormik }  from 'formik';
import { formSchema } from './validate';
import emailjs from '@emailjs/browser';
import Message from './Message';



const initialValues = {
    user_firstname: "",
    user_lastname: "",
    user_email: "",
    user_subject: "",
    message: "",
  };


const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null)
  const [formSubmitted, setFormSubmitted] = useState(false);



  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || '';
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || '';
  
  
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
  useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values, action) => {
      if (!serviceId || !templateId || !publicKey) {
        console.error('Missing serviceId, templateId, or publicKey. Please check your environment variables.');
        return;
      }

      if (!form.current) {
        console.error('Form reference is null or undefined.');
        return;
      }

      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      action.resetForm();
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
    },
  });
  

    return (
      <div id="Contact" className="w-full min-h-screen bg-gray-100 flex justify-center items-center px-4 py-20">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 md:p-12">
          <h1 className="text-center text-4xl font-semibold text-indigo-600 mb-4">
            Contact Me
          </h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            If you have any questions or would like to get in touch, feel free to drop a message!
         </p>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input placeholder="John" className="border-2 rounded-lg p-3 mt-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300" type="text" name="user_firstname" value={values.user_firstname}onChange={handleChange} onBlur={handleBlur} />{errors.user_firstname && touched.user_firstname && (
              <p className="text-red-500 text-sm mt-1">{errors.user_firstname}</p>)}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input placeholder="Dewey" className="border-2 rounded-lg p-3 mt-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300" type="text" name="user_lastname" value={values.user_lastname}
              onChange={handleChange} onBlur={handleBlur} /> {errors.user_lastname && touched.user_lastname && (
              <p className="text-red-500 text-sm mt-1">{errors.user_lastname}</p>)}
            </div>
          </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input placeholder="example@gmail.com" className="border-2 rounded-lg p-3 mt-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300" type="email" name="user_email" 
              value={values.user_email} onChange={handleChange} onBlur={handleBlur} />{errors.user_email && touched.user_email && (
                <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>)}
            </div>
            <div className="flex flex-col">
               <label className="text-sm font-medium text-gray-700">Subject</label>
               <input placeholder="Subject" className="border-2 rounded-lg p-3 mt-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300" type="text" name="user_subject" value={values.user_subject}
                onChange={handleChange} onBlur={handleBlur}/>{errors.user_subject && touched.user_subject && (
                <p className="text-red-500 text-sm mt-1">{errors.user_subject}</p>)}
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea placeholder="Your message..."className="border-2 rounded-lg p-3 mt-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300" rows={6} name="message" value={values.message}
                  onChange={handleChange} onBlur={handleBlur}></textarea> {errors.message && touched.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>)}
                  </div>
                <button type="submit" value="Send" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300">
                  Submit
                </button>
          </form>
            {formSubmitted && <Message />}
      </div>
</div>

    
)
}

export default ContactPage;
