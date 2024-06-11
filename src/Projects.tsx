import projectsData from "./data";
import ElementTitle from "./ElementTitle";
export default function Projects() {
  return (
    <section className="w-4/5 mx-auto">
      <ElementTitle>
        I've tackled several smaller projects, such as..
      </ElementTitle>
      <div className="flex flex-col gap-2  mt-3">
        {projectsData &&
          projectsData.map((project, index) => (
            <ProjectComponent
              key={project.id}
              reversed={index % 2 === 0}
              data={project}
            />
          ))}
      </div>
    </section>
  );
}
function ProjectComponent({ data, reversed }) {
  return (
    <div className="border border-gray-200 p-3 md:grid md:grid-cols-2 justify-center gap-3 rounded-md hover:border-sky-600 transition-all">
      {reversed ? (
        <>
          <Image image={data.image} title={data.title} />
          <Description
            title={data.title}
            description={data.description}
            techs={data.techs}
          />
        </>
      ) : (
        <>
          <Description
            title={data.title}
            description={data.description}
            techs={data.techs}
          />
          <Image image={data.image} title={data.title} />
        </>
      )}
    </div>
  );
}
function Image({ image, title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img
        className="rounded-lg w-full sm:w-48 mb-2 md:w-60 sm:mb-0 sm:mr-4 p-2 border-gray-200 border hover:border-sky-600 transition-all"
        src={image}
        alt=""
      />
      <h2 className="text-sky-600 font-bold rubik-font hover:text-white transition-all text-center sm:text-left text-sm sm:text-lg lg:text-xl">
        {title}
      </h2>
    </div>
  );
}
function Description({ title, description, techs }) {
  return (
    <div>
      <h2 className="text-white font-semibold rubik-font hover:text-sky-600 transition-all text-sm sm:text-md lg:text-lg">
        What's {title}
      </h2>
      <p className="text-gray-400 roboto-mono-font  text-sm sm:text-md lg:text-lg">{description}</p>
      {techs && (
        <ul>
          {techs.map((item) => (
            <li
              key={item}
              className="  text-sm sm:text-md lg:text-lg transition-all cursor-pointer rubik-font bg-gray-800 hover:bg-gray-600 inline-block rounded-md m-1 p-1 capitalize text-white"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
