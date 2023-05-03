import './style.css';
import CardPlayer from '../CardPlayer';

function Position({
  players,
  toDelete,
  sColor,
  pColor,
  namePosition,
  toFavorite,
}) {
  return (
    <section className="section" style={{ backgroundColor: sColor }}>
      <h3 className="title" style={{ borderColor: pColor }}>
        {namePosition}
      </h3>
      <div className="flex flex-row gap-8 justify-center pt-8 flex-wrap">
        {players.map((player, index) => {
          return (
            <CardPlayer
              key={index}
              bgColor={pColor}
              image={player.image}
              name={player.name}
              age={player.age}
              shirtNumber={player.shirtNumber}
              toDelete={toDelete}
              player={player}
              toFavorite={toFavorite}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Position;
