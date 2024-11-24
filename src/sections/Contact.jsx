import { useRef, useState } from "react"
import { useMediaQuery } from "react-responsive";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = ({target: {name, value}}) => {
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send("service_1r4xisi", "template_hm7vklq", {
                from_name: formData.name,
                to_name: 'Aakash',
                from_email: formData.email,
                to_email: 'aakashpavar87@gmail.com',
                message: formData.message
            }, 'zZSbhs2fF5vPLExnP');
            alert('Your Message has been sent !!!');
        } catch (error) {
            console.log('Error Has Occured While Sending Message...', error);
            alert('Something went wrong !!!');
        } finally {
            setLoading(false)
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        }
    }
  return (
    <section className="c-space my-20">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            {!isMobile && <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />}
            <div className="contact-container">
                <h3 className="head-text">Let's Talk</h3>
                <p className="text-lg text-white-600 mt-3">
                    Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help you succeed.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">
                            Full Name
                            <input 
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className="field-input"
                                placeholder="John Doe"
                                required
                            />
                        </span>
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">
                            Email
                            <input 
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="field-input"
                                placeholder="johndoe@example.com"
                                required
                            />
                        </span>
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">
                            Your Message
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="field-input"
                                rows={5}
                                placeholder="Hi, I wanna give you a job..."
                                required
                            />
                        </span>
                    </label>
                    <button disabled={loading} type="submit" className="field-btn">
                        {loading ? "Sending ..." : "Send Message"}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact