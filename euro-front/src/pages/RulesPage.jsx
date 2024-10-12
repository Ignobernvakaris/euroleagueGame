import React from "react";
import Header from "../components/Header";

const RulesPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container text-center">
          <h1>Taisyklės</h1>
          <div 
            style={{ 
              textAlign: 'center', // Tekstas centre
              maxWidth: '800px',   // Ribotas plotis, kad tekstas nebūtų per platus
              margin: '0 auto'     // Centruotas elementas horizontaliai
            }}
          >
            <p>
              Pagrindiniai kriterijai, nuo kurių priklauso surinkti taškai, yra šie:
              <br />
              • Atspėtas laimėtojas: 5 taškai
              <br />
              • Atspėtas taškų skirtumas:
            </p>
            <p>
              Taškų už spėtą skirtumą skyrimo tvarka:
              <br />
              Skirtumas nuo spėto rungtynių nugalėtojo pranašumo / Skiriami taškai:
              <br />
              - Atspėtas tikslus skirtumas: 25 taškai
              <br />
              - 1 taško skirtumas: 18 taškų
              <br />
              - 2 taškų skirtumas: 15 taškų
              <br />
              - 3 taškų skirtumas: 12 taškų
              <br />
              - 4 taškų skirtumas: 10 taškų
              <br />
              - 5 taškų skirtumas: 8 taškai
              <br />
              - 6 taškų skirtumas: 6 taškai
              <br />
              - 7 taškų skirtumas: 4 taškai
              <br />
              - 8 taškų skirtumas: 2 taškai
              <br />
              - 9 taškų skirtumas: 1 taškas
              <br />
              - Didesnis skirtumas: 0 taškų
            </p>
            <p>
              • Atspėtas kiekvienos komandos pelnytų taškų rezultatas:
              <br />
              Taškų už komandų pelnytus taškus skyrimo tvarka:
              <br />
              Skirtumas nuo spėto taškų skaičiaus / Skiriami taškai už komandų pelnytus taškus:
              <br />
              - Atspėtas tikslus pelnytų taškų skaičius: 10 taškų
              <br />
              - 1 taško skirtumas: 9 taškai
              <br />
              - 2 taškų skirtumas: 8 taškai
              <br />
              - 3 taškų skirtumas: 7 taškai
              <br />
              - 4 taškų skirtumas: 6 taškai
              <br />
              - 5 taškų skirtumas: 5 taškai
              <br />
              - 6 taškų skirtumas: 4 taškai
              <br />
              - 7 taškų skirtumas: 3 taškai
              <br />
              - 8 taškų skirtumas: 2 taškai
              <br />
              - 9 taškų skirtumas: 1 taškas
              <br />
              - Didesnis skirtumas: 0 taškų
            </p>
            <p>
              • Svarbios išimtys:
              <br />
              - Taškai yra skiriami už galutinį rezultatą – įskaitant visus pratęsimus.
              <br />
              - Neteisingai spėjus rungtynių nugalėtoją, taškai už komandų pelnytus taškus ir nugalėtojo pranašumą nėra skiriami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
