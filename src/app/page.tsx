
import HomePage from "@/Components/views/Home/HomePage"
import AboutPage from "@/Components/views/About/aboutPage"
import ExperiencePage from "@/Components/views/Experience/ExperiencePage"
import ContactPage from "@/Components/views/form_validate/ContactPage"
import ScrollTopBtn from "@/Components/shared/ScrollTop/ScrollBar"
import Footer from "@/Components/views/Footer/footer"
import SkillsCode from "@/Components/views/Skills/SkillsTop"
import NavBarPage from "@/Components/views/NavBer/NavBarPage"

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
