export default function SkillItem({ imgSrc, title, href }) {
    return (

        <div className="roboto-mono-font">
            <a href={href} className="flex flex-col gap-2 md:gap-3 items-center justify-center text-center p-3 rounded-md">
                <img className="w-8 h-8 md:w-10 md:h-10" src={imgSrc} alt={title} />
                <h2 className="font-medium text-sm md:text-md text-gray-300 tracking-wide">{title}</h2>
            </a>
        </div>

    );
}
