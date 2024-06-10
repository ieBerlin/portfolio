export default function SkillItem({ imgSrc, title }) {
    return (
        <div className={`flex flex-col gap-1 items-center justify-cente p-3 rounded-md`}>
        <img className="h-10" src={imgSrc} alt={title} />
        <h2 className={`font-medium text-md text-gray-300 tracking-wide`}>{title}</h2>
    </div>
    
    );
}
