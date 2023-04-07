import styles from "../styles/fdBazaar.module.css";
const FdBazaar = () => {
    return(
        <div className={styles.hero}>
            <div className={styles.frame289}></div>
            <div className={styles.frame271}>
                 <div className={styles.frame270}>
                    <div className={styles.FD}>FD Bazaar</div>
                    <p className={styles.korem}>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <div className={styles.button_div}>
                    <div className={styles.Button}>Explore FDs</div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default FdBazaar;