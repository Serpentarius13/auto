import BackgroundSkeleton from "./BackgroundSkeleton";

export default function BackgroundedThreeHours() {
  return (
    <BackgroundSkeleton>
      <div className="flex flex-col  font-serif text-white text-center">
        <h3 className="text-[5.5rem] leading-[7.3rem] ">
          {" "}
          <span className="text-green">3 часа</span> в подарок
        </h3>
        <h4 className='text-[3rem]'> при аренде любого автомобиля</h4>
      </div>

      <p className="text-[1.6rem] absolute text-white bottom-[1.4rem] left-[3.7rem] italic">
        *Акция действует весь срок аренды при возврате автомобиля в рабочее
        время
      </p>
    </BackgroundSkeleton>
  );
}
