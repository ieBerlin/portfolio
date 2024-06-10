import "./index.css";
import Footer from "./Footer.tsx";
import Header from "./Header.jsx";
import SkillsSection from "./SkillsSection.jsx";
import Introduction from "./Introduction.jsx";
import CurrentActivities from "./CurrentActivities.jsx";
export default function App() {
  return (
    <div className="bg-[#080e1c]">
      <Header />
      <Introduction />
      <SkillsSection/>
      <CurrentActivities />
      <Footer />
    </div>
  );
}
