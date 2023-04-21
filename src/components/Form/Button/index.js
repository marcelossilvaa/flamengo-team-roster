function Button(props) {
  return (
    <button className="bg-[#E22318] rounded-md font-bold text-white flex w-[167px] justify-center h-[50px] items-center mt-2 hover:bg-white hover:text-[#E22318] hover:duration-500">
      {props.text}
    </button>
  );
}

export default Button;
