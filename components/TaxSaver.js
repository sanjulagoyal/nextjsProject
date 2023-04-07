import styles from "../styles/taxSaver.module.css";

const TaxSaver = ()=>{
    return(
        <div className={styles.hero}>
            <div className={styles.frame289}></div>
            <div className={styles.frame275}>
                <div className={styles.frame274}>
                    <div className={styles.text}>Tax Saver</div>
                    <p className={styles.para}>Choose across investments that you can easily withdraw and liquidate in times of need</p>
                    <div className={styles.frame207}>
                        <div className={styles.save}>Save your tax</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaxSaver;