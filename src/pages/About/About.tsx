import './About.css'

function About() {
    return(
        <section className='About' id='About'>
            <h2 className='Section-Heading'>About</h2>
            <div className='About-Content'>
                <div className='About-left'>
                    <div className='About-left-pic'></div>
                </div>
                <div className='About-right'>
                    <p className='About-Para'>I'm Bifin James, a second-year Computer Science student at Mar Athanasius College of Engineering. Welcome to my world of coding and innovation!</p>
                    <div className='My-Skills'>
                        <h3 className='My-Skills-Heading'>My Skills</h3>
                        <div className='Skills-Percentage'>
                            <div className="Skills">
                                <p>HTML</p>
                                <div className="Skills-level">
                                    <div className="percentage-bg">
                                        <div className="percentage-level HTML">85%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills">
                                <p>CSS</p>
                                <div className="Skills-level">
                                    <div className="percentage-bg">
                                        <div className="percentage-level CSS">80%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills">
                                <p>JavaScript</p>
                                <div className="Skills-level">
                                    <div className="percentage-bg">
                                        <div className="percentage-level JS">70%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills">
                                <p>TypeScript</p>
                                <div className="Skills-level">
                                    <div className="percentage-bg">
                                        <div className="percentage-level TS">70%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills">
                                <p>React</p>
                                <div className="Skills-level">
                                    <div className="percentage-bg">
                                        <div className="percentage-level React">75%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills">
                                <p>Bootstrap</p>
                                <div className="Skills-level">
                                    <div className="percentage-bg">
                                        <div className="percentage-level Bootstrap">85%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills">
                                <p>Tailwind CSS</p>
                                <div className="Skills-level">
                                    <div className="percentage-bg">
                                        <div className="percentage-level Tailwind">80%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills">
                                <p>Java</p>
                                <div className="Skills-level">
                                    <div className="percentage-bg">
                                        <div className="percentage-level Java">90%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills">
                                <p>Python</p>
                                <div className="Skills-level">
                                    <div className="percentage-bg">
                                        <div className="percentage-level Python">90%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills">
                                <p>C</p>
                                <div className="Skills-level">
                                    <div className="percentage-bg">
                                        <div className="percentage-level C">85%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='Download-CV'>Download CV</button>
        </section>
    )
}

export default About