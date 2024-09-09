const Card = ({ number, title, url }) => {
  return (
    <div className="rounded-md w-full px-5 pt-5 pb-3 flex  bg-white shadow-md justify-between items-start">
      <div className="flex flex-col">
        <h2 className="font-bold text-[30px] text-[#172B4D]">{number}</h2>

        <p className="text-[#172B4D] text-[12px] font-semibold">{title}</p>
      </div>

      <img src={url} alt={title} width={50} height={50} />
    </div>
  );
};

export default Card;
