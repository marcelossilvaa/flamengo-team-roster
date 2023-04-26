import './style.css';
import CardPlayer from '../CardPlayer';
import playersJSON from '../../Players.json';

function Position(props) {
  const matchingPlayers = playersJSON.filter(
    player => player.position === props.namePosition
  );

  return (
    <section className="section" style={{ backgroundColor: props.sColor }}>
      <h3 className="title" style={{ borderColor: props.pColor }}>
        {props.namePosition}
      </h3>
      <div className="flex flex-row gap-8 justify-center pt-8 flex-wrap">
        {props.players.map(player => (
          <CardPlayer
            key={player.name}
            bgColor={props.pColor}
            image={player.image}
            name={player.name}
            age={player.age}
            shirtNumber={player.shirtNumber}
          />
        ))}

        {matchingPlayers.map(player => (
          <CardPlayer
            key={player.name}
            bgColor={props.pColor}
            image={player.image}
            name={player.name}
            age={player.age}
            shirtNumber={player.shirtNumber}
          />
        ))}
      </div>
    </section>
  );
}

export default Position;
