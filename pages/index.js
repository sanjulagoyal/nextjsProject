import Announcement from "@/components/Announcement";
import Coins from "@/components/Coins";
import FdBazaar from "@/components/FdBazaar";
import Insights from "@/components/Insights";
import Savings from "@/components/Savings";
import TaxSaver from "@/components/TaxSaver";
import WhyFixed from "@/components/WhyFixed";
import Navbar from "../components/Navbar";
import Team from "@/components/Team";
import Press from "@/components/Press";
import FollowUs from "@/components/FollowUs";
import Investing from "@/components/Investing";
import Footer from "@/components/Footer";


const index = ()=>{
  return (
      <>
      <Navbar />
      <Announcement />
      <Coins />
      <FdBazaar /> 
      <Savings />
      <TaxSaver />
      <WhyFixed />
      <Insights /> 
      <Team />
      <Press />
      <FollowUs />
      <Investing />
      {/* <Footer /> */}
    </>
  )
}
export default index;