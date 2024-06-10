import ElementTitle from "./ElementTitle";

export default function CurrentActivities() {
  return (
    <section className="w-4/5 mx-auto">
      <ElementTitle>
          What I'm Currently Doing
      </ElementTitle>
      <main className="py-5 px-4 roboto-mono-font">
        <div className="flex items-start relative">
          <div className=" left-arrow" />
          <h2 className=" text-gray-300 text-sm  lg:text-lg text-start tracking-wide relative pl-5">
            I'm actively mastering Next.js.
          </h2>
        </div>
        <div className="flex items-start relative mt-2">
          <div className=" left-arrow" />
          <h2 className=" text-gray-300 text-sm  lg:text-lg text-start tracking-wide relative pl-5">
            I'm actively mastering Next.js. while refining my expertise through
            hands-on web development projects.
          </h2>
        </div>
      </main>
    </section>
  );
}
