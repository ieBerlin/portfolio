import ElementTitle from "./ElementTitle.tsx";
import SkillItem from "./SkillItem.tsx";
import flutterImage from "./assets/skills/flutter.png";
import reactImage from "./assets/skills/react.png";
import nodejsImage from "./assets/skills/nodejs.png";
import mongoImage from "./assets/skills/mongo.png";
import typescriptImage from "./assets/skills/ts.png";
import gitImage from "./assets/skills/git.png";
import jsImage from "./assets/skills/js.png";
import mysqlSvg from "./assets/skills/mysql.png";
export default function SkillsSection() {
  return (
    <section className=" w-4/5 mx-auto mt-16">
      <ElementTitle>Skills And Technologies</ElementTitle>
      <h2 className="font-medium text-gray-400 my-2 text-base md:text-lg lg:text-xl rubik-font">
        Here’s my toolbelt for success:
      </h2>

      <div className="grid grid-cols-4">
        <SkillItem
          imgSrc={flutterImage}
          title="Flutter"
          href="https://flutter.dev/"
        />
        <SkillItem
          imgSrc={reactImage}
          title="React"
          href="https://reactjs.org/"
        />
        <SkillItem
          imgSrc={nodejsImage}
          title="Node"
          href="https://nodejs.org/"
        />
        <SkillItem
          imgSrc={mongoImage}
          title="Mongo"
          href="https://www.mongodb.com/"
        />
        <SkillItem
          imgSrc={typescriptImage}
          title="Typescript"
          href="https://www.typescriptlang.org/"
        />
        <SkillItem
          imgSrc={jsImage}
          title="Javascript"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillItem
          imgSrc={mysqlSvg}
          title="MySql"
          href="https://www.mysql.com/"
        />
        <SkillItem imgSrc={gitImage} title="Git" href="https://git-scm.com/" />
      </div>
    </section>
  );
}
