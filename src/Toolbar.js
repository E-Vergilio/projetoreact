function Botão({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function BotãoDeReprodução({ nomeDoFilme }) {
  function lidarComCliqueParaReproduzir() {
    alert(`Reproduzindo ${nomeDoFilme}!`);
  }

  return (
    <Botão onClick={lidarComCliqueParaReproduzir}>
      Reproduzir "{nomeDoFilme}"
    </Botão>
  );
}

function BotãoDeUpload() {
  return (
    <Botão onClick={() => alert('upload!')}>
      Fazer Upload de Imagem
    </Botão>
  );
}

export default function BarraDeFerramentas() {
  return (
    <div>
      <h1>Toolbar</h1>
      <BotãoDeReprodução nomeDoFilme="Filme" />
      <BotãoDeUpload />
    </div>
  );
}
