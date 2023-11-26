import './Footer.css'


function Footer(){
    return(
        <section className="Footer">
            <h4>Get in Touch</h4>
            <div className="Social-Media-Icons">
                <a href="https://www.instagram.com/bifin_ad_345/"><img className='Social-Icons Instagram' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="instagram"/></a>
                <a href="www.facebook.com"><img className='Social-Icons Facebook' src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook"/></a>
                <a href="https://github.com/BifinJ"><img className='Social-Icons Github' src="https://img.icons8.com/color/48/github--v1.png" alt="github"/></a>
                <a href="https://www.linkedin.com/in/bifin-james-75035b280/"><img className='Social-Icons Linkedin' src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></a>
            </div>
            <p>2023 &copy;Bifin James. All Rights Reserved <br />Designed and Developed By Bifin James</p>
        </section>
    )
}

export default Footer