import GenderCounter from './GenderCounter';

import {Link} from "react-router-dom";

export default function Atividade03() {
    return (
        <>
        <h1>Atividade 03</h1>
        <GenderCounter />

        <br />
        <Link to="/">retornar a pagina inicial</Link>
        </>
    );
}
