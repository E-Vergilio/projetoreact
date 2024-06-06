import Galeria1 from './Galeria1';
import {Link} from "react-router-dom";
import Comp from './Comp';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
export default function Atividade03() {
    return (
        <>
        <h1>Atividade 03</h1>
        <Galeria1/>
        <Comp/>
        <App/>
        <App1/>
        <App2/>
        <App3/>
        <App4/>
        <App5/>
        <br />
        <Link to="/">Retornar para pagina inicial</Link>
        </>
    );
}
