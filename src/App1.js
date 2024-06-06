function Item({ nome, estaEmpacotado }) {
    return <li className="item">{nome}</li>;
  }
  
  export default function ListaDeMaquiagem() {
    return (
      <section>
        <h1>Lista de Maquiagem</h1>
        <ul>
          <Item 
            estaEmpacotado={true} 
            nome="Base" 
          />
          <Item 
            estaEmpacotado={true} 
            nome="Batom" 
          />
          <Item 
            estaEmpacotado={false} 
            nome="Rímel" 
          />
        </ul>
      </section>
    );
  }
  