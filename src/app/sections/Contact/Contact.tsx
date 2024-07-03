import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <h3 className="contact__headline">Entre em contato conosco</h3>
      <p className="contact__copy">
       Ligue para nosso responsável e contrate nossos serviços
      </p>
      <div className="contact__cta">
        <a href="tel:11999999999">(11) 9 9999-9999</a>
      </div>
    </div>
  );
}
