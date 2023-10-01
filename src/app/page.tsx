import ScrollTopBtn from "@/Components/shared/ScrollTop/ScrollBar"
import NavBarPage from "@/Components/views/NavBer/NavBarPage"
import HomePage from "@/Components/views/Home/HomePage"
import SkillsCode from "@/Components/views/Skills/SkillsTop"
import ExperiencePage from "@/Components/views/Experience/ExperiencePage"
import AboutPage from "@/Components/views/About/aboutPage"
import ContactPage from "@/Components/views/form_validate/ContactPage"
import Footer from "@/Components/views/Footer/footer"

export default function Home() {
  return (
   <div>
  
    <NavBarPage />
    <HomePage />
    <SkillsCode />
    <ExperiencePage />
    <AboutPage />
    <ContactPage />
    <ScrollTopBtn />
    <Footer />
    </div>
  )
}
