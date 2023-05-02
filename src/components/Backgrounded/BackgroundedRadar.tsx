import BackgroundSkeleton from "./BackgroundSkeleton";

export default function BackgroundedRadar() {
  return (
    <BackgroundSkeleton>
      <h2 className="text-[5.5rem] font-serif leading-[7.3rem] font-bold max-w-[100rem]">
        Радар-детектор и видеорегистратор <span className='text-green'>бесплатно </span> в каждом
        автомобиле.
      </h2>
    </BackgroundSkeleton>
  );
}
