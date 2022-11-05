import { useState } from 'react';
import axios from 'axios'
import ast from '../assets/ast.png';
function AST() {
    const [contador, setContador] = useState(0);
    //const [dot, setDot] = useState(inicialEstado);
    const getAST = async() =>{
        await axios.get('http://127.0.0.1:8000/getAST')
        setContador(contador+1)
    }
    return(<>
            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={()=> getAST()} href="/" data-bs-toggle="modal" data-bs-target="#exampleModal">AST</a>
            </li>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Arbol de Sintaxis Abstracta</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id='graph'>
                            <img src={ast} alt="AST" srcset="" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
    </>);    
}
export default AST;