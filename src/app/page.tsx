import NavBarPage from "@/Components/NavBer/NavBar-For-Pc"
import HomePage from "@/Components/Home/HomePage"
import AboutPage from "@/Components/About/aboutPage"
import SkillsPage from "@/Components/Skills/SkillsPage"
import ExperiencePage from "@/Components/Experience/ExperiencePage"
import ContactPage from "@/Components/form_validate/ContactPage"
import ScrollTopBtn from "@/Components/ScrollTop/ScrollBar"

export default function Home() {
  return (
   <div>
    <NavBarPage />
    <HomePage />
    <AboutPage />
    <SkillsPage />
    <ExperiencePage />
    <ContactPage />
    <ScrollTopBtn />
    </div>
  )
}
