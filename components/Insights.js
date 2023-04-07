import styles from "../styles/Insights.module.css";
import Image from "next/image";

const Insights = ()=>{
    return(
        <div className={styles.hero}>
            <div className={styles.frame287}>
                <div className={styles.frame286}>
                    <p className={styles.text}>Keep Learning. Keep Growing.</p>
                    <p className={styles.subText}>Insights and Strategies for Mastering Your Finances: Stay Up-to-Date with the Latest Trends, Tips, and Techniques to Take Control of Your Money</p>
                </div>
                <div className={styles.frame244}>
                    <div className={styles.frame240}>
                        <div className={styles.frame246}>
                            <Image className={styles.img1}
                            src="/Img1.jpg"
                            alt="picture of plants"
                            height= {203}
                            width= {296}
                            left= {0}
                            top= {0}
                            border-radius= {6}
                            />
                            <div className={styles.frameImage}>
                                <p className={styles.imgHeading}>Save money, the right way</p>
                                <p className={styles.imgText}>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            </div>
                        </div>
                        <div className={styles.frame248}>
                            <p className={styles.date}>24 May 2023</p>
                            <p className={styles.btn}>Read Now</p>
                        </div>
                    </div>
                    <div className={styles.frame241}>
                        <div className={styles.frame246}>
                            <Image className={styles.img1}
                            src="/Img2.jpg"
                            alt="picture of coins"
                            height= {203}
                            width= {296}
                            left= {0}
                            top= {0}
                            border-radius= {6}
                            />
                            <div className={styles.frameImage}>
                                <p className={styles.imgHeading}>Save money, the right way. Second line test</p>
                                <p className={styles.imgText}>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            </div>
                            </div>
                        <div className={styles.frame248}>
                            <p className={styles.date}>24 May 2023</p>
                            <p className={styles.btn}>Read Now</p>
                        </div>
                    </div>
                    <div className={styles.frame242}>
                        <div className={styles.frame246}>
                            <Image className={styles.img1}
                            src="/Img3.jpg"
                            alt="picture of Notes"
                            height= {203}
                            width= {296}
                            left= {0}
                            top= {0}
                            border-radius= {6}
                            />
                            <div className={styles.frameImage}>
                                <p className={styles.imgHeading}>Save money, the right way. Second line test</p>
                                <p className={styles.imgText}>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            </div>
                        </div>
                        <div className={styles.frame248}>
                            <p className={styles.date}>24 May 2023</p>
                            <p className={styles.btn}>Read Now</p>
                        </div>
                    </div>
                    <div className={styles.frame243}>
                    <div className={styles.frame246}>
                            <Image className={styles.img1}
                            src="/Img1.jpg"
                            alt="picture of plants"
                            height= {203}
                            width= {296}
                            left= {0}
                            top= {0}
                            border-radius= {6}
                            />
                            <div className={styles.frameImage}>
                                <p className={styles.imgHeading}>Save money, the right way</p>
                                <p className={styles.imgText}>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            </div>
                        </div>
                        <div className={styles.frame248}>
                            <p className={styles.date}>24 May 2023</p>
                            <p className={styles.btn}>Read Now</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.frame207}>
                <button className={styles.button_div}>More Insights</button>
            </div>

        </div>
    )
}
export default Insights;