export default function ElementTitle({ children }) {
  return (
    <div className="flex flex-row gap-4 items-center w-full rubik-font">
      <hr
        className="w-20 md:w-28 border-t "
        style={{ borderTop: "0.1px solid #0284c7" }}
      />
      <h2 className="font-semibold text-gray-300 text-lg md:text-xl lg:text-2xl whitespace-nowrap">
        {children}
      </h2>

      <hr className="w-full" style={{ borderTop: "0.1px solid #0284c7" }} />
    </div>
  );
}