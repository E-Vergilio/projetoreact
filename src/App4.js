let convidado = 0;

function Xicara() {
  convidado = convidado + 1;
  return <h2>Xícara de café para o convidado #{convidado}</h2>;
}

export default function ConjuntoDeCafe() {
  return (
    <>
      <Xicara />
      <Xicara />
      <Xicara />
    </>
  );
}
