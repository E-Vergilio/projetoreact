import ana from "./Img/Ana-Maria.png";
export default function ListaDeTarefas() {
  return (
    <>
      <h1>Como Ser Uma Grande Apresentadora By Ana Maria Braga</h1>
      <img 
        src={ana}
        alt="Ana Maria Braga Apresentadora" 
        className="foto" 
      />
      <ul>
        <li>Preparação e Pesquisa</li>
        <li>Interação com o Público</li>
        <li>Flexibilidade e Adaptação</li>
      </ul>
    </>
  );
}