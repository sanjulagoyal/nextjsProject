import styles from "../styles/Footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.frame99}>
        <div className={styles.frame109}>
            <Image className={styles.img} 
            src="/Fixed.svg"
            alt="fixed logo"
            height= {30}
            width= {108.75}
            left= {0}
            top= {0}
            border-radius= {0}
            />
            <p className={styles.para}>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <div className={styles.frame105}>
            <h3 className={styles.heading}>Company</h3>
            <div className={styles.frame102}>
                <div className={styles.about}>About Us</div>
                <div className={styles.career}>Career</div>
                <div className={styles.features}>Features</div>
                <div className={styles.mission}>Mission</div>
                <div className={styles.support}>Need & Support</div>
            </div>
        </div>
        <div className={styles.frame104}>
            <h3 className={styles.invest}>Invest</h3>
            <div className={styles.frame103}>
                <div className={styles.fd}>FD Bazaar</div>
                <div className={styles.savings}>Savings++</div>
                <div className={styles.tax}>Tax Saver</div>
                <div className={styles.income}>Regular Incomes</div>
            </div>
        </div>
        <div className={styles.frame107}>
            <h3 className={styles.text1}>Want to talk?</h3>
            <p className={styles.text2}>Call us and we will solve all your doubts and help you grow your business</p>
            <div className={styles.frame108}>
                <Image className={styles.img2} 
                src="/phone.svg"
                alt="call logo"
                height= {24}
                width= {24}
                left= {0}
                top= {10}
                border-radius= {0} 
                />
                <div className={styles.call}>Call  +91 9876543210</div>
            </div>
        </div>
        <div className={styles.frame101}>
                <Image className={styles.ytlogo} 
                src="/yt.svg"
                alt="you tube logo"
                height= {24}
                width= {24} 
                />
                <Image className={styles.fblogo} 
                src="/fb.svg"
                alt="facebook logo"
                height= {24}
                width= {24}
                left= {48} 
                />
                <Image className={styles.lnlogo} 
                src="/ln.svg"
                alt="linkedin logo"
                height= {24}
                width= {24}
                left= {96} 
                />
        </div>
        <div className={styles.copyright}>© 2023 Fixerra Pvt Ltd</div>
        <hr className={styles.line}></hr>
    </div>
  )
}

export default Footer;