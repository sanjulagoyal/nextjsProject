import Image from "next/image";
import styles from "../styles/navbar.module.css";

const Navbar = ()=>{
    return(
      <nav className={styles.navbar}>
      <Image className={styles.fixed_logo}
      src="/Fixed-logo.svg" 
      alt="Fixed-logo" 
      width={108.75}
      left={72}
      height={30} 
      top={25}
      border-radius={0}
      />
      <div className={styles.frame238}>
          <div className={styles.frame237}>
            <div className={styles.frame234}>
              <div className={styles.invest}>Invest</div>
              {/* <select name="investments" id="investments">
                <option id="fd" value="fd">FD Bazaar</option>
                <option id="savings" value="savings">Savings++</option>
                <option id="tax" value="tax">Tax Saver</option>
              </select> */}
              
              <div><Image className={styles.down_arrow}
              src="/downArrow.jpg"
              alt="Dropdown icon"
              height={6}
              width= {12}
              left= {6}
              top= {9}
              />
              </div>
            </div>
          </div>
          <div className={styles.frame235}>
          <div className={styles.blogs}>Blogs</div>
          </div>
          <div className={styles.frame236}>
          <div className={styles.about}>About</div>
          </div>
      </div>
      <div className={styles.frame239}>
        <div className={styles.best_investment}>Best Investment Options
        </div>
      </div>  
      </nav>
    )
}
export default Navbar;