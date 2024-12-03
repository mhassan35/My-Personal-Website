import ScrollTopBtn from "@/Components/shared/ScrollTop/ScrollBar"

import HomePage from "./page/Home/page"
import ExperiencePage from "./page/Experience/page"
import AboutPage from "./page/About/page"
import ContactPage from "./page/FormValidate/page"
import SkillsCode from "./page/Skills/page"

export default function Home() {
  return (
   <main>
    <HomePage />
    <SkillsCode />
    <ExperiencePage />
    <AboutPage />
    <ContactPage />
    <ScrollTopBtn />
    </main>
  )
}
