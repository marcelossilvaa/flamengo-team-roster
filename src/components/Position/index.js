import './style.css';
import CardPlayer from '../CardPlayer';

function Position(props) {
  return (
    <section className="section" style={{ backgroundColor: props.sColor }}>
      <h3 className="title" style={{ borderColor: props.pColor }}>
        {props.namePosition}
      </h3>
      <div className="flex flex-row gap-8 justify-center pt-8 flex-wrap">
        {props.players.map(player => (
          <CardPlayer
            image={player.image}
            name={player.name}
            position={player.position}
            age={player.age}
            shirtNumber={player.shirtNumber}
          />
        ))}
      </div>
    </section>
  );
}

export default Position;
