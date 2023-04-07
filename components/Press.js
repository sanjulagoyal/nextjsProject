import styles from "../styles/Press.module.css"
import Image from "next/image";

const Press = () => {
  return (
    <div className={styles.frame100}>
       <div className={styles.frame294}>
        <div className={styles.frame290}>
            <div className={styles.heading}>
                In the press
            </div>
            <p className={styles.subHeading}>Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence.</p>
        </div>
        <div className={styles.frame293}>
            <div className={styles.frame298}>
                <div className={styles.frame295}>
                    <Image className={styles.yourstory}
                    src="/YourStory.jpg"
                    alt="your story logo"
                    height= {102}
                    width= {285}
                    left= {7}
                    top= {48}
                    border-radius= {0}
                    />    
                </div> 
                <div className={styles.frame296}>
                    <Image className={styles.news18}
                    src="/News18.jpg"
                    alt="News 18 logo"
                    height= {116}
                    width= {289}
                    left= {5}
                    top= {34}
                    border-radius= {0}
                    />    
                </div> 
                <div className={styles.frame297}>    
                    <Image className={styles.liveMint}
                    src="/LiveMint.jpg"
                    alt="live mint logo"
                    height= {94}
                    width= {306}
                    left= {-3}
                    top= {56}
                    border-radius= {0} 
                    />             
                </div> 
            </div> 
        </div>
       </div>
    </div>
  )
}

export default Press;
