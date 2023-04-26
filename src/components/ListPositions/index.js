function ListPositions(props) {
  return (
    <div>
      <label htmlFor={props.label} className="block mb-1 text-xl">
        {props.label}
      </label>
      <select
        onChange={event => props.toAlter(event.target.value)}
        value={props.value}
        className="bg-[#FFF] drop-shadow-xl shadow-black w-full text-xl p-3"
        required
      >
        <option value="" className="text-slate-500">
          Selecione uma posição
        </option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default ListPositions;
