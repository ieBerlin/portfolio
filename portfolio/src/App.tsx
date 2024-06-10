import "./index.css";
import Footer from "./Footer.tsx";
import Header from "./Header.jsx";
import SkillsSection from "./SkillsSection.jsx";
import Introduction from "./Introduction.jsx";
export default function App() {
  return (
    <div className="bg-[#24283b]">
      <Header />
      <Introduction />
      <SkillsSection/>
      <Footer />
    </div>
  );
}
