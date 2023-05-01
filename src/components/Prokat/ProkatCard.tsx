import Image from "next/image";
import Link from "next/link";

export interface IProkatCard {
  image: string;
  imageAlt: string;
  rating: string;
  name: string;
  year: string;
  type: string;
  price: string;
}

export default function ProkatCard({
  image,
  rating,
  name,
  year,
  type,
  price,
  imageAlt,
}: IProkatCard) {
  return (
    <figure className="w-[43rem] max-w-[95%] h-[52rem] p-[1rem] rounded-medium bg-light-gray">
      <Image
        src={image}
        alt={imageAlt}
        width={420}
        height={280}
        className="w-full h-[28rem] rounded-medium object-cover pb-[1.8rem]"
      />

      <div className="w-full flex justify-between pb-[1.8rem]">
        <div className="flex items-center gap-[2.7rem]">
          <h5 className="text-[2.4rem]">{name}</h5>

          <span className="text-[2rem] text-half-black">{year}</span>
          <span className="text-[2rem] text-half-black">{type}</span>
        </div>

        <div className="flex">
          {rating}

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.98L20.21 10.8C20.88 10.22 20.52 9.12001 19.64 9.05001L14.81 8.64001L12.92 4.18001C12.58 3.37001 11.42 3.37001 11.08 4.18001L9.19001 8.63001L4.36001 9.04001C3.48001 9.11001 3.12001 10.21 3.79001 10.79L7.46001 13.97L6.36001 18.69C6.16001 19.55 7.09001 20.23 7.85001 19.77L12 17.27Z"
              fill="#F32424"
            />
          </svg>
        </div>
      </div>

      <span className="text-[3.2rem] font-bold leading-[4.1rem] pb-[4.3rem]">
        от {price} р/сутки
      </span>

      <Link
        href="/"
        className="w-full flex items-center justify-center py-[1rem] text-[3.6rem] text-white bg-green"
      >
        Заказать
      </Link>
    </figure>
  );
}
