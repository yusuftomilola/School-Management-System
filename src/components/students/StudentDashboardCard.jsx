const Card = ({ number, title, url }) => {
  return (
    <div className="rounded-md w-full px-8 pt-5 pb-6 flex  bg-white border-[1px] border-gray-200 justify-between items-start">
      <img src={url} alt={title} width={70} height={70} />

      <div className="flex flex-col">
        <h2 className="font-bold text-[30px] text-[#172B4D]">{number}</h2>

        <p className="text-[#172B4D] text-[12px] font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default Card;
