import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <span className="footer__company">
          Raízes Acessoria Contábil
        </span>
        <div className="footer__address-wrapper">
          <span className="footer__identifier">
            Endereço
          </span>
          <span className="footer__address">
            Av. Cabo Adão Pereira, 247 - Vila Pirituba, São Paulo - SP
          </span>
        </div>
      </div>
    </div>
  );
}
