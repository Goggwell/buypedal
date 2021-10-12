import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if(name && email && message) {
            const serviceId = 'service_m4e1awk';
            const templateId = 'template_3ms0dhe';
            const userId = 'user_Pvf0wgpVtSLKxBxaz7IW8';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <section className="global-signup" data-scroll-section>
            <div className="container">
                <div className="grid">
                    <div className="grid__column grid__column--6 grid__column--centered">
                        <h2 className="global-signup__primary-title" data-scroll>
                            Contact Us
                        </h2>
                        <h3 className="global-signup__secondary-title" data-scroll>
                            Reach out if you have any inquiries regarding BuyPedal, or just want to make conversation!
                        </h3>
                        <div id="contact-form" data-scroll>
                            {emailSent ?
                                <span className='visible'>Thank you for your message, we will be in touch in no time!</span>
                                       :
                                <>
                                    <ul>
                                        <li>
                                            <label for="name"><span>Name <span className="required-star">*</span></span></label>
                                            <input type="text" value={name} onChange={e => setName(e.target.value)} />
                                        </li>
                                        <li>
                                            <label for="mail"><span>Email <span className="required-star">*</span></span></label>
                                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                        </li>
                                        <li>    
                                            <label for="msg"><span>Message <span className="required-star">*</span></span></label>
                                            <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
                                        </li>
                                        <li>    
                                            <button onClick={submit}>Send Message</button>
                                        </li>
                                    </ul>
                                    <span className='invisible'>Thank you for your message, we will be in touch in no time!</span>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
