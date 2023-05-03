import CampText from './CampText';
import ListPositions from '../ListPositions';
import Button from './Button';
import { useState } from 'react';
import { CaretCircleLeft, CaretCircleDown } from '@phosphor-icons/react';

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

  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  function aoMostrarCadastro() {
    setMostrarCadastro(!mostrarCadastro);
  }

  const propsMostrar = {
    size: 30,
    onClick: aoMostrarCadastro,
    color: mostrarCadastro ? '#FFFFFF' : '#888888',
  };

  return (
    <div>
      <div className="bg-black flex justify-center" onClick={aoMostrarCadastro}>
        <div className="w-[700px] flex justify-end gap-4 max-w-6xl h-12 items-center">
          <h1 className="text-xl font-bold text-white ">
            Adicionar novo jogador
          </h1>
          {mostrarCadastro ? (
            <CaretCircleDown
              size={42}
              weight="fill"
              {...propsMostrar}
              className="cursor-pointer"
            />
          ) : (
            <CaretCircleLeft
              size={42}
              weight="fill"
              {...propsMostrar}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      {mostrarCadastro && (
        <section className="mx-auto max-w-[72rem] w-full max-xl:w-[100%] flex justify-center items-center flex-col my-10 sm:">
          <form
            className="bg-[#f2f2f2] rounded-2xl px-3 py-3 flex flex-col gap-3 w-[95%] shadow-2xl sm:px-9 sm:py-9 sm:w-[70%]"
            onSubmit={toSave}
          >
            <h2 className="text-2xl sm:text-3xl">
              Preencha os dados do jogador
            </h2>
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
              itens={props.positions}
              label="Posição"
            />
            <Button text="Adicionar Jogador" />
          </form>
        </section>
      )}
    </div>
  );
}

export default Form;
