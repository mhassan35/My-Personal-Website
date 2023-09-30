import NavBarPage from "@/Components/NavBer/NavBar-For-Pc"
import HomePage from "@/Components/Home/HomePage"
import AboutPage from "@/Components/About/aboutPage"
import ExperiencePage from "@/Components/Experience/ExperiencePage"
import ContactPage from "@/Components/form_validate/ContactPage"
import ScrollTopBtn from "@/Components/ScrollTop/ScrollBar"
import Footer from "@/Components/Footer/footer"
import SkillsCode from "@/Components/Skills/SkillsTop"

export default function Home() {
  return (
   <div>
    <NavBarPage />
    <HomePage />
    <AboutPage />
    <SkillsCode />
    <ExperiencePage />
    <ContactPage />
    <ScrollTopBtn />
    <Footer />
    </div>
  )
}
