import logoImage from "./assets/1718025457471.jpg";
import ElementTitle from "./ElementTitle.tsx";
export default function Introduction() {
  return (
    <div className=" w-4/5 mx-auto">
      <ElementTitle>
        Who's <span className="text-aqua">Alaa Eddine Ourmassi</span>
      </ElementTitle>
      <main>
        <div className="my-4 flex flex-row gap-6 md:gap-10 items-start justify-between mx-auto">
          <h3 className="font-medium text-gray-200 text-sm md:text-md lg:text-lg">
          <span className="text-center w-full block text-red-200 text-md md:text-lg lg:text-xl"> Hey there!</span>
            I'm{" "}
            <span
              style={{
                color: "aqua",
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
          <img
            className="cursor-pointer w-28 h-28 rounded-md drop-shadow-lg md:w-60 md:h-60 transition-transform duration-300 alaa-image"
            src={logoImage}
            alt="Profile"
            
          />
        </div>
      </main>
    </div>
  );
}
