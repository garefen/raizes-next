import "./Features.scss";
import Image from "next/image";

export default function Features() {
  return (
    <div className="features">
      <span className="features__eyebrow">Gerir o seu negócio</span>
      <h3 className="features__headline">Tudo que você precisa para o seu negócio</h3>
      <div className="features__wrapper">
        <ul className="features__list">
          <li className="features__item">
            <Image 
              src="/v.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="features__copy">Assessoria Trabalhista</span>
          </li>
          <li className="features__item">
            <Image 
              src="/v.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="features__copy">Assessoria Fiscal</span>
          </li>
          <li className="features__item">
            <Image 
              src="/v.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="features__copy">Abertura de empresas</span>
          </li>
        </ul>
        <ul className="features__list">
          <li className="features__item">
            <Image 
              src="/v.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="features__copy">Imposto de renda para pessoa física</span>
          </li>
          <li className="features__item">
            <Image 
              src="/v.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="features__copy">SPEDS</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
