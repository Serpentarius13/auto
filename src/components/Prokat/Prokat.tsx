import SectionSkeleton from "../Shared/SectionSkeleton";
import ProkatCard, { IProkatCard } from "./ProkatCard";

const prokatCards: IProkatCard[] = [
  {
    name: "Renault Logan",
    year: "2018",
    type: "МКПП",
    rating: "5",
    price: "2200",
    image: "/img/prokat/logan.png",
    imageAlt: "Картинка с белым Renault Logan на фоне осеннего леса",
  },
  {
    name: "Renault Logan",
    year: "2018",
    type: "МКПП",
    rating: "5",
    price: "2200",
    image: "/img/prokat/logan.png",
    imageAlt: "Картинка с белым Renault Logan на фоне осеннего леса",
  },
  {
    name: "Renault Logan",
    year: "2018",
    type: "МКПП",
    rating: "5",
    price: "2200",
    image: "/img/prokat/logan.png",
    imageAlt: "Картинка с белым Renault Logan на фоне осеннего леса",
  },
  {
    name: "Renault Logan",
    year: "2018",
    type: "МКПП",
    rating: "5",
    price: "2200",
    image: "/img/prokat/logan.png",
    imageAlt: "Картинка с белым Renault Logan на фоне осеннего леса",
  },
  {
    name: "Renault Logan",
    year: "2018",
    type: "МКПП",
    rating: "5",
    price: "2200",
    image: "/img/prokat/logan.png",
    imageAlt: "Картинка с белым Renault Logan на фоне осеннего леса",
  },
  {
    name: "Renault Logan",
    year: "2018",
    type: "МКПП",
    rating: "5",
    price: "2200",
    image: "/img/prokat/logan.png",
    imageAlt: "Картинка с белым Renault Logan на фоне осеннего леса",
  },
  {
    name: "Renault Logan",
    year: "2018",
    type: "МКПП",
    rating: "5",
    price: "2200",
    image: "/img/prokat/logan.png",
    imageAlt: "Картинка с белым Renault Logan на фоне осеннего леса",
  },
  {
    name: "Renault Logan",
    year: "2018",
    type: "МКПП",
    rating: "5",
    price: "2200",
    image: "/img/prokat/logan.png",
    imageAlt: "Картинка с белым Renault Logan на фоне осеннего леса",
  },
  {
    name: "Renault Logan",
    year: "2018",
    type: "МКПП",
    rating: "5",
    price: "2200",
    image: "/img/prokat/logan.png",
    imageAlt: "Картинка с белым Renault Logan на фоне осеннего леса",
  },
];

export default function Prokat() {
  return (
    <SectionSkeleton title="Автомобили в прокат">
      <div className="grid grid-cols-3 gap-[2rem]">
        {prokatCards.map((card) => (
          <ProkatCard {...card} key={card.name} />
        ))}
      </div>
    </SectionSkeleton>
  );
}
