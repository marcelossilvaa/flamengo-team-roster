function Banner() {
  return (
    <div className=" w-full  text-center flex justify-center bg-[#E22318] ">
      <div className="max-w-[72rem] mx-auto backdrop:max-xl:w-[90%] flex flex-row items-center py-8 gap-4 sm:gap-14">
        <img
          src="https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-escudo-novo.png"
          className="h-40 sm:h-80"
          alt=""
        />
        <h1 className="text-4xl flex flex-wrap w-48 text-left sm:text-6xl sm:w-80">
          ELENCO DO FLAMENGO EM 2023
        </h1>
      </div>
    </div>
  );
}

export default Banner;
