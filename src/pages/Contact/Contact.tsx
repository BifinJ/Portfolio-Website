import './Contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
function Contact(){
    return(
        <section className='Contact' id='Contact'>
            <h2 className="Section-Heading">Contact</h2>
            <div className="Contact-Details-Content">
                <div className="Contact-left">
                    <div className="Contact-Details">
                        <div className='Box'>
                            <FaLocationDot/>
                            <p>Kottayam, Kerala<br />India 686634</p>
                        </div>
                        <div className='Box'>
                            <BsFillTelephoneFill/>
                            <a href="tel:9645228789">
                                <p>+91 9645228789</p>
                            </a>
                        </div>
                        <div className='Box'>
                            <HiMail/>
                            <a href="mailto:jamesbifin@gmail.com">
                                <p>jamesbifin@gmail.com</p>
                            </a>
                        </div>
                        <div className='Box'>
                            <BsGlobe/>
                            <a href="https://bifinj.github.io/">
                                <p>www.bifin.github.io</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Contact-right">
                    <form className="form" action="">
                        <input type="text" name="Name" id="name" placeholder='Name:'/>
                        <input type="email" name="Mail" id="mail" placeholder='E-Mail:'/>
                        <input type="text" name="Subject" id="subject" placeholder='Subject:'/>
                        <textarea name="Message" id="message" rows={7} placeholder='Message:'></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact