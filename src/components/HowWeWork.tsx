import SectionSkeleton from "./Shared/SectionSkeleton";

const specs: string[] = [
  "Гибкая система оплаты (чем дольше срок аренды автомобиля, тем ниже её стоимость).",
  "Широкий выбор автомобилей от эконом до бизнес-класса.",
  "Особые условия и спецпредложения постоянным клиентам.",
  "По вашему желанию укомплектуем авто дополнительными устройствами.",
  "Подадим и организуем возврат авто в удобное для вас место и время.",
  "Оформление договора аренды и выдача автомобиля клиенту в течение 15 минут.",
];

export default function HowWeWork() {
  return (
    <SectionSkeleton title="Как мы работаем:">
      <ul className="grid grid-cols-3  gap-y-[10rem] gap-x-[8.4rem]  place-items-center counted w-full">
        {specs.map((spec, ix) => (
          <li
            key={spec}
            className="max-w-[33rem] text-[2rem] flex items-start gap-[0.5rem]"
          >
            <span className="text-[15rem] leading-[13rem] text-green">
              {ix + 1}
            </span>{" "}
            {spec}
          </li>
        ))}
      </ul>
    </SectionSkeleton>
  );
}
