import GenderCounter from './GenderCounter';

import {Link} from "react-router-dom";

export default function Atividade02() {
    return (
        <>
        <h1>Atividade 02</h1>
        <GenderCounter />

        <br />
        <Link to="/">Retornar para pagina inicial</Link>
        </>
    );
}
