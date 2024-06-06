import {Link} from "react-router-dom";
import Toolbar from './Toolbar';
import Formulario1 from './Formulario1';
import Formulario2 from './Formulario2';
import Formulario3 from './Formulario3';
import Galeria2 from './Galeria2';
import Lista1 from './Lista1';
import Lista2 from './Lista2';
import Lista3 from './Lista3';
import Lista4 from './Lista4';
import MoveCirculo from './MoveCirculo';
import SelectList from './SelectList';
import ContadorList from './ContadorList';


export default function Atividade04() {
    return (
        <>
        <h1>Atividade 04</h1>
        <Toolbar/>
        <Galeria2/>
        <Formulario1/>
        <Formulario2/>
        <Formulario3/>
       
        <Lista1/>
        <Lista2/>
        <Lista3/>
        <Lista4/>
        <MoveCirculo/>
        <SelectList/>
        <ContadorList/>
        
               
       <br />
       <Link to="/">Retornar para pagina inicial</Link>
       </>

    );
}
