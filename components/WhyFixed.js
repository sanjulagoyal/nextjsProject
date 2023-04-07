import styles from "../styles/whyFixed.module.css";
import Image from "next/image";

const WhyFixed = ()=>{
    return(
        <div className={styles.hero}>
            <div className={styles.frame288}>
                <div className={styles.frame285}>
                    <h1 className={styles.text}>Why Fixed?</h1>
                    <p className={styles.para}>Choose across investments that you can easily withdraw and liquidate in times of need</p>
                </div>
                <div className={styles.frame280}>
                <div className={styles.frame277}>
                    <div className={styles.frame281}>
                        <Image className={styles.frame282} 
                        src="/Frame 282.jpg"
                        alt="Card icon"
                        height= {56}
                        width= {56}
                        left= {0}
                        top= {8}
                        border-radius= {0}
                        
                        />
                        <p className={styles.paraSafe}>Safe investments that beat inflation</p>
                    </div>
                    <hr className={styles.line}></hr>
                    <p className={styles.txt1}>Low risk, High return investments that are easy to understand</p>
                </div>
                <div className={styles.frame278}>
                    <div className={styles.frame281}>
                        <Image className={styles.frame284}
                        src="/Frame 284.jpg"
                        alt="Card icon"
                        height= {56}
                        width= {56}
                        left= {0}
                        top= {8}
                        border-radius= {0}
                        /> 
                        <p className={styles.paraSafe}>Safe investments that protect capital</p>
                    </div>
                    <hr className={styles.line}></hr>
                    <p className={styles.txt1}>Get access to stable and low risk investment options for goals where you cannot afford losses</p>
                </div>
                <div className={styles.frame279}>
                    <div className={styles.frame281}>
                        <Image className={styles.frame283} 
                        src="/Frame 283.jpg" 
                        alt="Card icon"
                        height= {56}
                        width= {56}
                        left= {0}
                        top= {8}
                        border-radius= {0}  
                        />
                        
                        <p className={styles.paraSafe}>Liquid investments to manage emergencies</p>
                    </div>
                    <hr className={styles.line}></hr>
                    <p className={styles.txt1}>Choose across investments that you can easily withdraw and liquidate in times of need</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default WhyFixed;