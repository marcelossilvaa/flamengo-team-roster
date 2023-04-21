function CampText(props) {
  const toTyped = event => {
    props.toAlter(event.target.value);
  };

  return (
    <div className="">
      <label htmlFor={props.label} className="block mb-1 text-xl">
        {props.label}
      </label>
      <input
        value={props.value}
        onChange={toTyped}
        type={props.type}
        className="bg-[#FFF] drop-shadow-xl shadow-black w-full text-xl p-3 hover:border-none"
        placeholder={props.placeholder}
        required
      />
    </div>
  );
}

export default CampText;
