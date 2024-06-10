import ElementTitle from "./ElementTitle.tsx";
import SkillItem from './SkillItem.tsx';
import flutterImage from "./assets/skills/flutter.png"
import reactImage from "./assets/skills/react.png"
import nodejsImage from "./assets/skills/nodejs.png"
import mongoImage from "./assets/skills/mongo.png"
import typescriptImage from "./assets/skills/ts.png"
import gitImage from "./assets/skills/git.png"
import jsImage from "./assets/skills/js.png"
export default function SkillsSection() {
  return (
    <section className=" w-4/5 mx-auto mt-16">
      <ElementTitle>Skills And Technologies</ElementTitle>
      <h2 className="font-medium text-gray-400 my-2">
        Here’s my toolbelt for success:
      </h2>
      <div className="grid grid-cols-4">
        <SkillItem imgSrc={flutterImage} title='Flutter'/>
        <SkillItem imgSrc={reactImage} title='React'/>
        <SkillItem imgSrc={nodejsImage} title='Node'/>
        <SkillItem imgSrc={mongoImage} title='Mongo'/>
        <SkillItem imgSrc={typescriptImage} title='Typescript'/>
        <SkillItem imgSrc={jsImage} title='Javascript'/>
        <SkillItem imgSrc={flutterImage} title='MySql'/>
        <SkillItem imgSrc={gitImage} title='Git'/>
      </div>
    </section>
  );
}
