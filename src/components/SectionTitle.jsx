
const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="max-w-screen-sm">
            <span className="p-2 px-3 bg-[#ffffff09] bg-opacity-10 rounded-lg">{subTitle}</span>
            <h3 className="text-4xl font-medium text-primary mt-5 leading-tight">{title}</h3>
        </div>
    );
};

export default SectionTitle;