import RulesList from "./RulesList";
import RulesSkeleton from "./RulesSkeleton";

const list = ["Возраст не менее 23 лет.", "Стаж вождения не менее двух лет."];

export default function RulesRequirements() {
  return (
    <RulesSkeleton isReverse title="Требования к арендатору">
      <div className="flex flex-col gap-[8.6rem]">
        <RulesList list={list} />
        <p className="text-[2rem] italic max-w-[62rem]">
          *Уважаемые клиенты! Обращаем ваше внимание на то, что в целях
          повышения уровня обслуживания и поддержания автопарка в исправном
          техническом и эстетическом состоянии мы оставляем за собой право
          избирательности своих клиентов, т. е. мы вправе отказать
          потенциальному арендатору в аренде автомобиля без объяснения причин.
          Приносим заранее свои извинения и искренне надеемся на ваше понимание!
        </p>
      </div>
    </RulesSkeleton>
  );
}
