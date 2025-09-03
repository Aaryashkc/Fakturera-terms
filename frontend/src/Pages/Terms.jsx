import React from 'react';

const Terms = ({ language }) => {
  const termsContent = {
    en: {
      title: 'Terms',
      button: 'Close and Go Back',
      text: `
        <p>BY clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.</p>
        <p>You can use the program FOR FREE for 14 days. 123 Fakturera is so easy and self-explanatory that the chance that you will need support is minimal, but if you should need support, we are here for you, with our office manned for the most part of the day. After the trial period, the subscription continues and costs SEK 99 excluding VAT per month, which is billed annually. If you do not want to keep the program, just cancel the trial period by giving notice before 14 days from registration.</p>
        <p>You have of course the right to terminate the use of the program without any costs, by giving us notice per email before 14 days from registration, that you do not want to continue with the program, and you then of course do not pay anything.</p>
        <p>If we do not receive such a notice from you before 14 days from registration, then the order, for natural reasons, cannot be changed. With registration it is meant the date and time when you did choose to press the button Invoice Now.</p>
        <p>Billing is for one year at a time. The price for 123 Fakturera (offer price SEK 99 per month / ordinary price SEK 159 per month) is for the annual fee Start for one year's use of the program. (When using the offer price of SEK 99, the one-year period is calculated from registration.) All prices are excluding. VAT. Offer, Inventory Control, Member invoicing, Multiuser version and English printout are (or can be) additional modules that can be ordered later. Intermediation, as well as invoicing, may take place from K-Soft Sverige AB, Box 2826, 187 28 Täby. In the future, we may choose to cooperate with another company for e.g. intermediation and invoicing. However, the customer relationship is with us. The payment is made to the company from which the invoice comes.</p>
      `,
    },
    sv: {
      title: 'Villkor',
      button: 'Stäng och Gå tillbaka',
      text: `
        <p>Genom att trycka på Fakturera Nu, väljer du att registrera dig enligt den information som du har skrivit in och den text på registreringssidan och villkoren här, och du accepterar samtidigt villkoren här.</p>
        <p>Du kan använda programmet GRATIS i 14 dagar. 123 Fakturera är så enkelt och självförklarande att chansen att du kommer att behöva support är minimal, men om du skulle behöva support, så finns vi här för dig, med vår kontor bemannad för det mesta av dagen. Efter provperioden fortsätter prenumerationen och kostar 99 SEK exklusive moms per månad, vilket faktureras årligen. Om du inte vill behålla programmet, så avbryter du bara provperioden genom att lämna meddelande före 14 dagar från registrering.</p>
        <p>Du har naturligtvis rätt att avsluta användningen av programmet utan kostnader, genom att skicka ett e-postmeddelande till oss före 14 dagar från registrering, att du inte vill fortsätta med programmet, och du betalar då naturligtvis ingenting.</p>
        <p>Om vi inte får ett sådant meddelande från dig före 14 dagar från registrering, så kan beställningen, av naturliga skäl, inte ändras. Med registrering menas datum och tid när du valde att trycka på knappen Fakturera Nu.</p>
        <p>Fakturering sker för ett år i taget. Priset för 123 Fakturera (erbjudandepris 99 SEK per månad / vanligt pris 159 SEK per månad) är för den årliga avgiften Start för ett års användning av programmet. (När du använder erbjudandepriset på 99 SEK, beräknas ett-årsperioden från registreringen.) Alla priser är exklusive. moms. Erbjudande, lagerkontroll, medlemsfakturering, fleranvändarversion och engelsk utskrift är (eller kan vara) ytterligare moduler som kan beställas senare. Förmedling, samt fakturering, kan ske från K-Soft Sverige AB, Box 2826, 187 28 Täby. I framtiden, kan vi välja att samarbeta med ett annat företag för t.ex. förmedling och fakturering. Dock, kundrelationen är med oss. Betalningen görs till det företag från vilket fakturan kommer.</p>
      `,
    },
  };

  return (
    <div className="terms-page">
      <div className="terms-container container-7xl">
        <h1 className="terms-title">{termsContent[language].title}</h1>
        <button className="back-button">{termsContent[language].button}</button>
        <div className="terms-content-box" dangerouslySetInnerHTML={{ __html: termsContent[language].text }}></div>
      </div>
    </div>
  );
};
export default Terms;
