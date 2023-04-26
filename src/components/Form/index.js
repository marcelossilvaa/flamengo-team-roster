import CampText from './CampText';
import ListPositions from '../ListPositions';
import Button from './Button';
import { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [shirtNumber, setShirtNumber] = useState('');
  const [image, setImage] = useState('');
  const [position, setPosition] = useState('');

  const toSave = event => {
    event.preventDefault();
    props.registeredPlayer({
      name,
      age,
      image,
      position,
      shirtNumber,
    });
    setName('');
    setAge('');
    setImage('');
    setPosition('');
    setShirtNumber('');
  };

  return (
    <section className="mx-auto max-w-[72rem] w-full max-xl:w-[90%] flex justify-center my-10">
      <form
        className="bg-[#f2f2f2] rounded-2xl px-9 py-9 flex flex-col gap-3 w-[70%] shadow-2xl"
        onSubmit={toSave}
      >
        <h2 className="text-3xl ">Preencha os dados do jogador</h2>
        <CampText
          label="Nome"
          placeholder="Digite o nome"
          value={name}
          toAlter={value => setName(value)}
          type={'text'}
        />
        <CampText
          label="Idade"
          placeholder="Digite a idade"
          value={age}
          toAlter={value => setAge(value)}
          type="number"
        />
        <CampText
          label="Número da Camisa"
          placeholder="Digite o número da camisa"
          value={shirtNumber}
          toAlter={value => setShirtNumber(value)}
          type="number"
        />
        <CampText
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          toAlter={value => setImage(value)}
          type="url"
        />
        <ListPositions
          value={position}
          toAlter={value => setPosition(value)}
          itens={props.namesListPositions}
          label="Posição"
        />
        <Button text="Adicionar Jogador" />
      </form>
    </section>
  );
}

export default Form;
