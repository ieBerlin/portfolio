import logoImage from "./assets/1718025457471.jpg";
import ElementTitle from "./ElementTitle.tsx";
export default function Introduction() {
  return (
    <div className=" w-4/5 mx-auto">
      <ElementTitle>
        Who's{" "}
        <span className="bold-roboto-mono-font">Alaa Eddine Ourmassi</span>
      </ElementTitle>
      {/* <main className="my-4 flex flex-row gap-10 items-start mx-auto"> */}
      <main className="my-4 mx-auto flex flex-start gap-10 items-start sm:items-center text-center sm:text-start">
        <div>
          <h3 className="font-medium text-gray-200 text-sm md:text-md lg:text-lg">
            <span className="roboto-mono-font text-start w-full block text-gray-200 text-md md:text-lg lg:text-xl rubik-font">
              {" "}
              Hey there!
            </span>
            I'm{" "}
            <span
              className="bold-roboto-mono-font"
              style={{
                color: "#0284c7",
              }}
            >
              Alaa Eddine Ourmassi
            </span>
            , currently pursuing my Computer Science degree at FSE of Sidi Bel
            Abbès in Algeria.
            <br /> My journey into the world of technology began in the summer
            of 2023, initially focusing on mobile development before
            transitioning into the dynamic realm of web development.
            <br /> I'm deeply passionate about learning new technologies and
            constantly strive to expand my skill set.
            <br /> My goal is to bring innovative ideas to life through
            captivating applications while enhancing existing ones.
            <br /> If you have any exciting project ideas or are looking to
            collaborate, don't hesitate to reach out through my contact
            information below. I'm always open to new opportunities and eager to
            connect!
          </h3>
        </div>
        <img
          className=" float-right cursor-pointer w-28 h-28 rounded-md md:w-60 md:h-60 transition-transform duration-300 alaa-image"
          src={logoImage}
          alt="Profile"
        />
      </main>
    </div>
  );
}
