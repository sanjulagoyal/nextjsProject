import styles from "../styles/FollowUs.module.css"
import Image from "next/image";

const FollowUs = () => {
  return (
    <div className={styles.frame101}>
        <div className={styles.frame294}>
            <div className={styles.frame290}>
                <p className={styles.heading}>Follow Us</p>
                <p className={styles.sub_heading}>Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence.</p>
            </div>
            <div className={styles.frame293}>
                <div className={styles.frame315}>
                    <Image className={styles.youtube}
                    src="/_YouTube.jpg"
                    alt="You tube logo"
                    height= {80}
                    width= {80}
                    left= {23.5}
                    top= {0}
                    border-radius= {16}                    
                    />
                    <p className={styles.fixed}>@fixedInvestments</p>
                </div>
                <div className={styles.frame316}>
                    <Image className={styles.youtube}
                    src="/_Linkedin.jpg"
                    alt="Linkedin logo"
                    height= {80}
                    width= {80}
                    left= {23.5}
                    top= {0}
                    border-radius= {16}                    
                    />
                    <p className={styles.fixed}>@fixedInvestments</p>
                </div>
                <div className={styles.frame317}>
                    <Image className={styles.youtube}
                    src="/_Telegram.jpg"
                    alt="Telegram logo"
                    height= {80}
                    width= {80}
                    left= {23.5}
                    top= {0}
                    border-radius= {16}                    
                    />
                    <p className={styles.fixed}>@fixedInvestments</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FollowUs;