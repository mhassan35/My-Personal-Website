"use client"
import React from 'react';



const initialValues = {
    user_firstname: "",
    user_lastname: "",
    user_email: "",
    user_subject: "",
    message: "",
  };


const ContactPage = () => {
    return (
      <div id="Contact" className="w-full min-h-screen bg-gray-100 flex justify-center items-center px-4 py-20">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 md:p-12">
          <h1 className="text-center text-4xl font-semibold text-indigo-600 mb-4">
            Contact Me
          </h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            If you have any questions or would like to get in touch, feel free to drop a message!
         </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input placeholder="John" className="border-2 rounded-lg p-3 mt-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300" type="text" name="user_firstname" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input placeholder="Dewey" className="border-2 rounded-lg p-3 mt-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300" type="text" name="user_lastname" 
            />
            </div>
          </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input placeholder="example@gmail.com" className="border-2 rounded-lg p-3 mt-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300" type="email" name="user_email" 
              />
            </div>
            <div className="flex flex-col">
               <label className="text-sm font-medium text-gray-700">Subject</label>
               <input placeholder="Subject" className="border-2 rounded-lg p-3 mt-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300" type="text" name="user_subject" 
                />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea placeholder="Your message..."className="border-2 rounded-lg p-3 mt-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300" rows={6} name="message" 
                  ></textarea> 
                  </div>
                <button type="submit" value="Send" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300">
                  Submit
                </button>
          </form>
      </div>
</div>

    
)
}

export default ContactPage;
