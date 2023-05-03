import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Position from './components/Position';
import Footer from './components/Footer';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const positions = [
    {
      id: uuidv4(),
      name: 'Goleiros',
      primaryColor: '#D91E2E',
      secondaryColor: '#e29da3',
    },
    {
      id: uuidv4(),
      name: 'Zagueiros',
      primaryColor: '#040D09',
      secondaryColor: '#6e6e6e',
    },
    {
      id: uuidv4(),
      name: 'Laterais',
      primaryColor: '#F2E088',
      secondaryColor: '#e6e2d2',
    },
    {
      id: uuidv4(),
      name: 'Volantes',
      primaryColor: '#8C0303',
      secondaryColor: '#bd8c8c',
    },
    {
      id: uuidv4(),
      name: 'Meio Campistas',
      primaryColor: '#040D09',
      secondaryColor: '#6e6e6e',
    },
    {
      id: uuidv4(),
      name: 'Atacantes',
      primaryColor: '#D91818',
      secondaryColor: '#c28989',
    },
  ];

  const dataPlayers = [
    {
      id: uuidv4(),
      favorite: false,
      position: 'Goleiros',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/1/1681793652.jpg',
      name: 'Santos',
      shirtNumber: '1',
      age: '33',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Goleiros',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/1/1681794035.jpg',
      name: 'Hugo Souza',
      shirtNumber: '45',
      age: '24',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Goleiros',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/1/1681793679.jpg',
      name: 'Matheus Cunha',
      shirtNumber: '25',
      age: '21',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Zagueiros',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/2/1681793122.jpg',
      name: 'Rodrigo Caio',
      shirtNumber: '3',
      age: '29',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Zagueiros',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/2/1681792369.jpg',
      name: 'Léo Pereira',
      shirtNumber: '4',
      age: '27',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Zagueiros',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/2/1681792790.jpg',
      name: 'David Luiz',
      shirtNumber: '23',
      age: '36',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Zagueiros',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/2/1681793171.jpg',
      name: 'Fabrício Bruno',
      shirtNumber: '15',
      age: '27',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Zagueiros',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/2/1681793342.jpg',
      name: 'Pablo',
      shirtNumber: '30',
      age: '31',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Laterais',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/3/1676389656.png',
      name: 'Matheuzinho',
      shirtNumber: '34',
      age: '22',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Laterais',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/3/1681793440.jpg',
      name: 'Varela',
      shirtNumber: '2',
      age: '30',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Laterais',
      image:
        'https://static-img.zz.pt/jogadores/71/742671_20210825233253_wesley.jpg',
      name: 'Wesley',
      shirtNumber: '43',
      age: '19',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Laterais',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/4/1681792841.jpg',
      name: 'Filipe Luís',
      shirtNumber: '16',
      age: '37',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Laterais',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/4/1681792936.jpg',
      name: 'Ayrton Lucas',
      shirtNumber: '6',
      age: '25',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Volantes',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/5/1681794051.jpg',
      name: 'Arturo Vidal',
      shirtNumber: '32',
      age: '35',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Volantes',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/5/1681793036.jpg',
      name: 'Thiago Maia',
      shirtNumber: '8',
      age: '26',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Volantes',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/5/1681793372.jpg',
      name: 'Erick Pulgar',
      shirtNumber: '5',
      age: '29',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Volantes',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/5/1681792999.jpg',
      name: 'Gerson',
      shirtNumber: '20',
      age: '25',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Meio Campistas',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/6/1681792746.jpg',
      name: 'Everton Ribeiro',
      shirtNumber: '7',
      age: '34',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Meio Campistas',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/6/1681793931.jpg',
      name: 'Arrascaeta',
      shirtNumber: '14',
      age: '28',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Meio Campistas',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/6/1681793516.jpg',
      name: 'Victor Hugo',
      shirtNumber: '29',
      age: '18',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Meio Campistas',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/6/1681793484.jpg',
      name: 'Matheus França',
      shirtNumber: '42',
      age: '19',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Atacantes',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/7/1681792471.jpg',
      name: 'Gabigol',
      shirtNumber: '10',
      age: '26',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Atacantes',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/7/1681793086.jpg',
      name: 'Bruno Henrique',
      shirtNumber: '27',
      age: '32',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Atacantes',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/7/1681792684.jpg',
      name: 'Pedro',
      shirtNumber: '9',
      age: '25',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Atacantes',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/7/1681793410.jpg',
      name: 'Marinho',
      shirtNumber: '31',
      age: '32',
    },
    {
      id: uuidv4(),
      favorite: false,
      osition: 'Atacantes',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/7/1681792900.jpg',
      name: 'Everton Cebolinha',
      shirtNumber: '11',
      age: '27',
    },
    {
      id: uuidv4(),
      favorite: false,
      position: 'Atacantes',
      image:
        'https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/7/1681792900.jpg',
      name: 'Everton Cebolinha',
      shirtNumber: '11',
      age: '27',
    },
  ];

  const [players, setPlayers] = useState(dataPlayers);

  function deleteCardPlayer(id) {
    setPlayers(players.filter(player => player.id !== id));
  }

  function resolutionFavorite(id) {
    setPlayers(
      players.map(player => {
        if (player.id === id) player.favorite = !player.favorite;
        return player;
      })
    );
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Form
        positions={positions.map(positions => positions.name)}
        registeredPlayer={player => setPlayers([...players, player])}
      />
      {positions.map((position, index) => (
        <Position
          key={index}
          namePosition={position.name}
          pColor={position.primaryColor}
          sColor={position.secondaryColor}
          players={players.filter(player => player.position === position.name)}
          toDelete={deleteCardPlayer}
          toFavorite={resolutionFavorite}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
