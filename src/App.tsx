import "./index.css";
import Footer from "./Footer.tsx";
import Header from "./Header.jsx";
import Introduction from './Introduction.tsx';
import Projects from './Projects.tsx';
import SkillsSection from './SkillsSection.tsx';
import CurrentActivities from './CurrentActivities.tsx';
export default function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Projects />
      <SkillsSection />
      <CurrentActivities />
      <Footer />
    </>
  );
}
