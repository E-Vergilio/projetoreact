import Galeria1 from './Galeria1';
import {Link} from "react-router-dom";

export default function Atividade03() {
    return (
        <>
        <h1>Atividade 03</h1>
        <Galeria1/>

        <br />
        <Link to="/">Retornar para pagina inicial</Link>
        </>
    );
}
