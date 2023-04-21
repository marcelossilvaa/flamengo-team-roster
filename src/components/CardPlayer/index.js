function CardPlayer({ image, name, age, shirtNumber }) {
  return (
    <div className="w-[280px]">
      <div className="bg-[#f0f0f0] rounded-t-[10px] flex justify-center shadow-lg shadow-slate-600">
        <img
          src={image}
          className="max-w-[100px] h-[100px] rounded-[50%] bottom-[-50px] relative"
          alt={name}
        />
      </div>
      <div className="bg-[#FFFFFF] shadow-lg shadow-slate-600 pt-[70px] pb-[10px] rounded-b-[10px]">
        <h4 className="text-lg font-bold">{name}</h4>
        <h5 className="text-lg leading-5 px-[16px]">{age} anos</h5>
        <h5 className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/103/103972.png"
            alt=""
            className="w-[50px]"
          />
        </h5>
        <h5 className="text-lg leading-5 relative top-[-34px] font-bold">
          {shirtNumber}
        </h5>
      </div>
    </div>
  );
}

export default CardPlayer;
