import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_w16pqzx', 'template_ppl4zm4', form.current, {
                publicKey: 'cQYTDN5st1hmK4Uli',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email Sent !');
                },
                (error) => {
                    console.log('FAILED...', error);
                    alert('Email Failed to Send !');
                },
            );
    };

    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Get In Touch</h1>
                <span className='contactDesc'>
                    Please fill out the form below to discuss any work
                    opportunities.
                </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input
                        type='text'
                        className='name'n
                        placeholder='Your Name'
                        name='from_name'
                    />
                    <input
                        type='email'
                        className='email'n
                        placeholder='Your Email'
                        name='from_email'
                    />
                    <textarea
                        className='msg'n
                        name='message'
                        rows='5'
                        placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
