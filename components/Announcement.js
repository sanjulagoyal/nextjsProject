import Image from "next/image";
import styles from "../styles/announcement.module.css";

const Announcement = ()=>{
    return(
        <div className={styles.frame263}>
        <Image className={styles.img}
        src="/Megaphone.jpg"
        alt="megaphone-photo"
        height= {22.273252487182617}
        width= {29.5}
        left= {1.25}
        top= {4.876708984375}
        border-radius= {0}
        />
        <div className={styles.sbi_fd_rate}>SBI FD rate climbed upto 8.5%</div>
        <div className={styles.take_action}>Take Action</div>
      </div>
    )
}
export default Announcement;