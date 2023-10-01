"use client"
import React, { useRef, useState } from 'react';
import  { useFormik }  from 'formik';
import { formSchema } from './validate';
import emailjs from '@emailjs/browser';
import Message from './Message';
import contactImg from '@/Components/Assets/Images/photo-1607706189992-eae578626c86.avif'
import Image from 'next/image';
import { SiUpwork  } from 'react-icons/si';
import { TbBrandFiverr } from 'react-icons/tb';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

// npm install @emailjs/browser



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
  
  // ...
  
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
    <div id='conatctpege' className='w-full pt-60 px-4 '  >
      <div className='max-w-[1240px] m-auto  py-16 w-full ' >
        <h1 className='uppercase text-3xl tracking-widest text-blue-500'>
          Contact Me
        </h1>
        <p className='py-4 font-normal text-2xl'>
            if You Want To Contact Me Put Some Info
        </p>
        <div className='grid lg:grid-cols-5 gap-8'>
        {/* Left */}
          <div className=' col-span-3 lg:col-span-2 w-full h-full shadow-[0px_7px_25px_-6px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl p-4 ' >
            <div className='lg:p-4 h-full' >
              <div>
                <Image className=' rounded-xl hover:scale-105 ease-in duration-300 ' src={contactImg} alt='/' />
              </div>
              <div>
                <h2 className='py-4' >Muhammad Hassan</h2>
                <p>I am A Fornt End Developer</p>
                <p className='py-4 ' >I am a freelancer and work on Fiverr Upwork and other platforms</p>
            </div>
            <div>
                <p className='uppercase pt-8 ' >Contact Me</p>
                <div className=' flex items-center justify-between py-4 ' >
              <Link href="https://www.fiverr.com" target="_blank" >
              <div className=' rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)]  shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300 ' title='Contact With Linkedin' >
              <TbBrandFiverr />
              </div>
              </Link>

                <Link href="https://www.upwork.com" target="_blank" >
            <div className='rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)]  shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300 ' title='Contact With GitHub' >
            <SiUpwork  />
            </div>
            </Link> 
            <Link href="https://www.linkedin.com/in/muhammad-hassan-86b302293" target="_blank">
            <div className=' rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)]  shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300 ' title='Send Massage On Gmail' >
            <FaLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/M-Hassan1" target="_blank" >
            <div className=' rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)]  shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300  ' title='Contact Link' >
            <FaGithub />
              </div>
            </Link>
            </div>
        </div>
        </div>
    </div>
    {/* Right */}
    <div className='col-span-3 w-full h-auto shadow-[0px_7px_25px_-6px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl lg:p-4 ' >
        <div className='p-4' >
            <form ref={form} onSubmit={handleSubmit} >
        
                <div className='grid md:grid-cols-2 gap-4 w-full py-2 ' >
                    <div className=' flex flex-col' >
                    
                        <label className=' uppercase text-sm py-2 ' >First Name</label>
                        <input placeholder='JONH' className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" name="user_firstname" value={values.user_firstname} onChange={handleChange} onBlur={handleBlur}  />
                        { errors.user_firstname && touched.user_firstname ? (<p className='form-error text-red-500 rounded-sm p-2 text-[19px] '>{errors.user_firstname}</p>): null}
                    </div>


                    <div className='flex flex-col' >
                    
                        <label className=' uppercase text-sm py-2 ' >Last Name</label>
                        <input placeholder='DEWEY' className='border-2 rounded-lg p-3 flex border-gray-300 ' type='name' name="user_lastname" value={values.user_lastname} onChange={handleChange} onBlur={handleBlur} />
                        { errors.user_lastname && touched.user_lastname ? (<p className='form-error text-red-500 rounded-sm p-2 text-[19px] '>{errors.user_lastname}</p>): null}
                    </div>
                </div>

                <div className='flex flex-col py-2 ' >
               
                <label className=' uppercase text-sm py-2' >Email</label>
                <input placeholder='example@gmail.com' className='border-2 rounded-lg p-3 flex border-gray-300 ' type="email" name="user_email" value={values.user_email} onChange={handleChange} onBlur={handleBlur} />
                { errors.user_email && touched.user_email ? (<p className='form-error text-red-500 rounded-sm p-2 text-[19px]  '>{errors.user_email}</p>): null}
                </div>


                <div className='flex flex-col py-2 ' >
                
                <label  className=' uppercase text-sm py-2' >Subject</label>
                <input placeholder='SUBJECT' className='border-2 rounded-lg p-3 flex border-gray-300 'type='text' name="user_subject" value={values.user_subject} onChange={handleChange} onBlur={handleBlur} />
                { errors.user_subject && touched.user_subject ? (<p className='form-error text-red-500 rounded-sm p-2 text-[19px] '>{errors.user_subject}</p>): null}
                </div>


                <div className='flex flex-col py-2 ' >
                <label className=' uppercase text-sm py-2' >Massage</label>
                <textarea name="message" placeholder='Massage For Me' className='border-2 rounded-lg p-3 border-gray-300 ' rows={10} value={values.message} onChange={handleChange} onBlur={handleBlur} ></textarea>
                { errors.message && touched.message ? (<p className='form-error text-red-500 rounded-sm p-2 text-[19px] '>{errors.message}</p>): null}
                </div>
                <button type="submit" value="Send" className="btn w-full bg-gray-400 hover:bg-blue-500 p-4 mt-4 rounded-[13px] ">
                    Submit
                    </button>
            </form>
            
            {formSubmitted && <Message />}
        </div>

    </div>

</div>

        </div>
    </div>


)
}

export default ContactPage;
