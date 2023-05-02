import Image from "next/image";
import SectionSkeleton from "./Shared/SectionSkeleton";

interface IToKnowCard {
  image: string;
  imageAlt: string;
  text: string;
}

const ToKnowCard = ({ image, imageAlt, text }: IToKnowCard) => {
  return (
    <figure className="max-w-[15rem] flex flex-col gap-[5rem] items-center text-center  text-[2rem]">
      <Image
        src={image}
        alt={imageAlt}
        width={70}
        height={70}
        className="h-[7rem]"
      />
      <p>{text}</p>
    </figure>
  );
};

const toKnowCards: IToKnowCard[] = [
  {
    image: "/img/to-know/auto.svg",
    imageAlt: "Иконка автомобиля",
    text: "Все автомобили застрахованы",
  },
  {
    image: "/img/to-know/money.svg",
    imageAlt: "Иконка автомобиля",
    text: "Оплата авансовым методом",
  },
  {
    image: "/img/to-know/clock.svg",
    imageAlt: "Иконка автомобиля",
    text: "Период аренды от суток на любой срок",
  },
  {
    image: "/img/to-know/pin.svg",
    imageAlt: "Иконка автомобиля",
    text: "Возможно предварительное бронирование",
  },
  {
    image: "/img/to-know/oil.svg",
    imageAlt: "Иконка автомобиля",
    text: "Вам выдается чистый и заправленный автомобиль",
  },
];

export default function ToKnow() {
  return (
    <SectionSkeleton title="Что нужно знать о прокате машины?">
      <div className="flex justify-between w-full">
        {toKnowCards.map((card) => (
          <ToKnowCard {...card} key={card.text} />
        ))}
      </div>
    </SectionSkeleton>
  );
}
