import Relogio  from './Relogio';
import Letreiro  from './Letreiro';
import {Link} from "react-router-dom";

export default function Atividade01() {
    return (
        <>
        <h1>Atividade 01</h1>
        <Relogio />
        <Letreiro />
        <br />
        <Link to="/">Retornar para pagina inicial</Link>
        </>
    );
}
