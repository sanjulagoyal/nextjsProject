import styles from "../styles/Team.module.css"
import Image from "next/image";

const Team = () => {
    return(
        <div className={styles.hero}>
            <div className={styles.frame292}>
                <div className={styles.frame291}>
                    <p className={styles.heading}>Meet the Team</p>
                    <p className={styles.sub_heading}>Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence.</p>

                </div>
                <div className={styles.frame261}>
                    <div className={styles.frame262}>
                        <span className={styles.frame259}>
                            <div className={styles.frame256}>
                                <Image className={styles.person1} 
                                src="/Person1.jpg"
                                alt="image of person"
                                height= {282}
                                width= {246}                                
                                />
                                <div className={styles.frame255}>
                                    <div className={styles.frame257}>
                                        <h2 className={styles.imgheading}>
                                            <span>Akshar&nbsp;</span>
                                            <span className={styles.font_small}>Shah</span>
                                        </h2>
                                        <p className={styles.para}>Founder and CEO</p>
                                    </div>
                                    <Image className={styles.linkedIn} 
                                    src="/LinkedIn.jpg"
                                    alt="linkedin logo"
                                    height= {24}
                                    width= {24}
                                    top={27}
                                    />
                                </div>
                            </div>
                        </span>
                        <span className={styles.frameText}>
                            <Image className={styles.quotes}
                            src="/Quotation.jpg"
                            alt="quote-image"
                            height= {60}
                            width= {60}
                            left= {50}
                            top= {110}
                            border-radius= {0}                            
                            />
                            <div className={styles.content}>Our vision is to make safe investments with better returns easily accessibly to all indians</div>
                            <Image className={styles.quotes2}
                            src="/Quotation2.jpg"
                            alt="quote2-image"
                            height= {60}
                            width= {60}
                            left= {998}
                            top= {250}
                            border-radius= {0}                            
                            />
                        </span>
                    </div>
                    <div className={styles.frame260}>
                        <div className={styles.frame256}>
                            <Image className={styles.person1} 
                            src="/Person2.jpg"
                            alt="image of person"
                            height= {282}
                            width= {246}                                
                            />
                            <div className={styles.frame255}>
                                <div className={styles.frame257}>
                                    <h2 className={styles.imgheading}>
                                        <span>Akshar&nbsp;</span>
                                        <span className={styles.font_small}>Shah</span>
                                        </h2>
                                        <p className={styles.para}>Founder and CEO</p>
                                    </div>
                                    <Image className={styles.linkedIn} 
                                    src="/LinkedIn.jpg"
                                    alt="linkedin logo"
                                    height= {24}
                                    width= {24}
                                    top={27}
                                    />
                                </div>
                            </div>
                            <div className={styles.frame256}>
                                <Image className={styles.person1} 
                                src="/Person3.jpg"
                                alt="image of person"
                                height= {282}
                                width= {246}                                
                                />
                                <div className={styles.frame255}>
                                    <div className={styles.frame257}>
                                        <h2 className={styles.imgheading}>
                                            <span>Akshar&nbsp;</span>
                                            <span className={styles.font_small}>Shah</span>
                                        </h2>
                                        <p className={styles.para}>Founder and CEO</p>
                                    </div>
                                    <Image className={styles.linkedIn} 
                                    src="/LinkedIn.jpg"
                                    alt="linkedin logo"
                                    height= {24}
                                    width= {24}
                                    top={27}
                                    />
                                </div>
                            </div>
                            <div className={styles.frame256}>
                                <Image className={styles.person1} 
                                src="/Person4.jpg"
                                alt="image of person"
                                height= {282}
                                width= {246}                                
                                />
                                <div className={styles.frame255}>
                                    <div className={styles.frame257}>
                                        <h2 className={styles.imgheading}>
                                            <span>Akshar&nbsp;</span>
                                            <span className={styles.font_small}>Shah</span>
                                        </h2>
                                        <p className={styles.para}>Founder and CEO</p>
                                    </div>
                                    <Image className={styles.linkedIn} 
                                    src="/LinkedIn.jpg"
                                    alt="linkedin logo"
                                    height= {24}
                                    width= {24}
                                    top={27}
                                    />
                                </div>
                            </div>
                            <div className={styles.frame256}>
                                <Image id={styles.person5} className={styles.person1} 
                                src="/Person5.jpg"
                                alt="image of person"
                                height= {282}
                                width= {246}                                
                                />
                                <div id={styles.ln5} className={styles.frame255}>
                                    <div className={styles.frame257}>
                                        <h2 className={styles.imgheading}>
                                            <span>Akshar&nbsp;</span>
                                            <span className={styles.font_small}>Shah</span>
                                        </h2>
                                        <p className={styles.para}>Founder and CEO</p>
                                    </div>
                                    <Image className={styles.linkedIn} 
                                    src="/LinkedIn.jpg"
                                    alt="linkedin logo"
                                    height= {24}
                                    width= {24}
                                    top={27}
                                    />
                                </div>
                            </div>
                            <div className={styles.frame256}>
                                <Image id={styles.person6} className={styles.person1} 
                                src="/Person6.jpg"
                                alt="image of person"
                                height= {282}
                                width= {246}                                
                                />
                                <div id={styles.ln6} className={styles.frame255}>
                                    <div className={styles.frame257}>
                                        <h2 className={styles.imgheading}>
                                            <span>Akshar&nbsp;</span>
                                            <span className={styles.font_small}>Shah</span>
                                        </h2>
                                        <p className={styles.para}>Founder and CEO</p>
                                    </div>
                                    <Image  className={styles.linkedIn} 
                                    src="/LinkedIn.jpg"
                                    alt="linkedin logo"
                                    height= {24}
                                    width= {24}
                                    top={27}
                                    />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className={styles.frame338}></div>
            <div className={styles.frame337}></div>
        </div>
    )
}
export default Team;