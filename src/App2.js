function Item({ nome, estáEmpacotado }) {
    return (
      <li className="item">
        {nome} {estáEmpacotado && '✔'}
      </li>
    );
  }
  
  export default function ListaDeItensDeGuardaRoupasFeminino() {
    return (
      <section>
        <h1>Lista de Itens do Guarda-Roupa Feminino</h1>
        <ul>
          <Item
            estáEmpacotado={true}
            nome="Vestidos"
          />
          <Item
            estáEmpacotado={true}
            nome="Sapatos"
          />
          <Item
            estáEmpacotado={false}
            nome="Bolsas"
          />
          <Item
            estáEmpacotado={false}
            nome="Acessórios"
          />
        </ul>
      </section>
    );
  }
  