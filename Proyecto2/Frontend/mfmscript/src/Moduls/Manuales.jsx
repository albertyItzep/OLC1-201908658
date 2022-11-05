import manualTecnico from '../Manual Tecnico.pdf'
import manualUsuario from '../Manual Usuario.pdf'
import gramatica from '../Gramatica.txt'
function Manuales() {
    const openUsuario = () => {
        window.open(manualUsuario);       
    }
    const openTecnico = () => {
        window.open(manualTecnico);       
    }
    const openGramatica = () => {
        window.open(gramatica);       
    }
    return (
        <>
        <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={()=>openUsuario()} href="/" >Manual Usuario</a>
        </li>
        <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={()=>openTecnico()} href="/" >Manual Tecnico</a>
        </li>
        <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={()=>openGramatica()} href="/" >Archivo Gramatica</a>
        </li>
        </>
    );
}
export default Manuales;