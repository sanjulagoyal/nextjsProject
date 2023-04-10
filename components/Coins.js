import Image from "next/image";
import styles from "../styles/coins.module.css"

const Coins = ()=>{
    return(
    <div className={styles.hero}>
      <img className={styles.f_coin}
      src="/F Coin.jpg"
      alt="f coin image"
      height= {340}
      width= {340}
      />

      <Image className={styles.arrow_coin}
      src="/Arrow Coin 1.jpg"
      alt="arrow-coin-image"
      height= {228}
      width= {228}
      left= {1143}
      top= {385}
      border-radius={0}
      />

      <Image className={styles.percent_coin}
      src="/Percent Coin 1.jpg"
      alt="percent-coin-image"
      height= {220}
      width= {220}
      left= {119}
      top= {401}
      border-radius={0}
      />

      <Image className={styles.gold_coin}
      src="/Rupee Gold Coin.svg"
      alt="gold-coin-image"
      height= {248}
      width= {248}
      // left= {139.6}
      top= {-9}
      />

      <div className={styles.frame308}>
      <div className={styles.heading}>
        Stress Free Investing
      </div>
      <p className={styles.sub_heading}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
      </p>
      <button className={styles.frame239_2}>Join the Waitlist
        {/* <div className={styles.text_239}>Join the Waitlist</div> */}
      </button>
      </div>
    </div>
    )
}
export default Coins;
