import { pessoas } from './dat.js';
import { getImageUrl} from './utili.js';

export default function Lista() {
  const itensDaLista = pessoas.map(pessoa =>
    <li key={pessoa.id}>
      <img
        src={getImageUrl(pessoa)}
        alt={pessoa.nome}
      />
      <p>
        <b>{pessoa.nome}:</b>
        {' ' + pessoa.profissao + ' '}
        conhecido por {pessoa.realizacao}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Cientistas</h1>
      <ul>{itensDaLista}</ul>
    </article>
  );
}
