import './Footer.css'


function Footer(){
    return(
        <section className="Footer">
            <h4>Get in Touch</h4>
            <div className="Social-Media-Icons">
                <img className='Social-Icons Instagram' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="instagram-new"/>
                <img className='Social-Icons Facebook' src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook-new"/>
                <img className='Social-Icons Github' src="https://img.icons8.com/color/48/github--v1.png" alt="github--v1"/>
                <img className='Social-Icons Linkedin' src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
            </div>
            <p>2023 &copy;Bifin James. All Rights Reserved <br />Designed and Developed By Bifin James</p>
        </section>
    )
}

export default Footer