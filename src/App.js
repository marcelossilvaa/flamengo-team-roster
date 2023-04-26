import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Position from './components/Position';

function App() {
  const dataListPositions = [
    {
      name: 'Goleiros',
      primaryColor: '#D91E2E',
      secondaryColor: '#e29da3',
    },
    {
      name: 'Zagueiros',
      primaryColor: '#040D09',
      secondaryColor: '#6e6e6e',
    },
    {
      name: 'Laterais',
      primaryColor: '#F2E088',
      secondaryColor: '#e6e2d2',
    },
    {
      name: 'Volantes',
      primaryColor: '#8C0303',
      secondaryColor: '#bd8c8c',
    },
    {
      name: 'Meio Campistas',
      primaryColor: '#040D09',
      secondaryColor: '#6e6e6e',
    },
    {
      name: 'Atacantes',
      primaryColor: '#D91818',
      secondaryColor: '#c28989',
    },
  ];

  const [players, setPlayers] = useState([]);
  const newPlayer = player => {
    setPlayers([...players, player]);
  };
  return (
    <div className="App">
      <Banner></Banner>
      <Form
        namesListPositions={dataListPositions.map(
          dataListPositions => dataListPositions.name
        )}
        registeredPlayer={player => newPlayer(player)}
      />
      {dataListPositions.map(position => (
        <Position
          key={position.name}
          namePosition={position.name}
          pColor={position.primaryColor}
          sColor={position.secondaryColor}
          players={players.filter(player => player.position === position.name)}
        />
      ))}
    </div>
  );
}

export default App;
