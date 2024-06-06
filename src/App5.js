function Receita({ drinkers }) {
    return (
      <ol>
        <li>Ferva {drinkers} xícaras de água.</li>
        <li>Adicione {drinkers} colheres de chá verde.</li>
        <li>Adicione {drinkers} colheres de mel e {drinkers} rodelas de limão.</li>
        <li>Adicione folhas de hortelã a gosto.</li>
        <li>Deixe em infusão por 3-5 minutos e sirva.</li>
      </ol>
    );
  }
  
  export default function App() {
    return (
      <section>
        <h1>Receita de Chá Oriental</h1>
        <h2>Para dois</h2>
        <Receita drinkers={2} />
        <h2>Para uma reunião</h2>
        <Receita drinkers={4} />
      </section>
    );
  }
