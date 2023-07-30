import NavBarPage from "@/Components/NavBer/NavBar-For-Pc"
import HomePage from "@/Components/Home/HomePage"
import AboutPage from "@/Components/About/aboutPage"
import SkillsPage from "@/Components/Skills/SkillsPage"
import ExperiencePage from "@/Components/Experience/ExperiencePage"

export default function Home() {
  return (
   <div>
    <NavBarPage />
    <HomePage />
    <AboutPage />
    <SkillsPage />
    <ExperiencePage />
    </div>
  )
}
