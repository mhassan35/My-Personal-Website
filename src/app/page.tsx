import HomePage from "./page/Home/page"
import ExperiencePage from "./page/Experience/page"
import AboutPage from "./page/About/page"
import ContactPage from "./page/FormValidate/page"
import SkillsPage from "./page/Skills/page"

export default function Home() {
  return (
   <main>
    <HomePage />
    <SkillsPage />
    <ExperiencePage />
    <AboutPage />
    <ContactPage />
    </main>
  )
}
