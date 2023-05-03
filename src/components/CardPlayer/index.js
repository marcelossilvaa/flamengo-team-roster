import './style.css';
import { MinusCircle, Star } from '@phosphor-icons/react';

function CardPlayer({
  player,
  image,
  name,
  age,
  shirtNumber,
  bgColor,
  toDelete,
  toFavorite,
}) {
  function favorite() {
    toFavorite(player.id);
  }
  return (
    <div className="w-[280px] relative">
      <div className="absolute cursor-pointer p-2 ">
        {player.favorite ? (
          <Star
            size={30}
            className="text-white"
            onClick={favorite}
            weight="fill"
          />
        ) : (
          <Star size={30} className="text-white" onClick={favorite} />
        )}
      </div>
      <div
        className="absolute right-0 cursor-pointer p-2"
        onClick={() => toDelete(player.id)}
      >
        <MinusCircle size={30} className="text-white" />
      </div>
      <div
        className="rounded-t-[10px] flex justify-center shadow-lg shadow-slate-600"
        style={{ backgroundColor: bgColor }}
      >
        <div id="imageCardPlayer">
          <img src={image} className="w-full" alt="" />
        </div>
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
