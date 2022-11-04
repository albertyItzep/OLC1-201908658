
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { saveAs } from 'file-saver'
import Editor from '@monaco-editor/react';
import FilesArchiv from './FileData'
import axios from 'axios';
function Ejecuciones() {
    //hooks
    const [nombre, setNombre] = useState(0);   // contiene el nombre del documento en uso
    const [largo, setLargo] = useState(1);      // contiene la cantidad de archivos cargados
    const [nombres, setNombres] = useState(["unitled-0"]); // conitene todos los nombres de los archivos para crear los botones
    const [data, setData] = useState([new FilesArchiv("unitled-0","","")]);       // contiene los objetos a ser renderizados por el editor
    const [actual, setActual] = useState({});   // contiene el objeto actual que modificando
    const [valor, setValor] = useState("");
    const [errorsI, setErrorsI] = useState([]);
    const editorRef = useRef(null)

;    //funciones
    const readFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setNombres([...nombres,file.name])
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onload = ()=>{
            setData([...data,new FilesArchiv(file.name,"",fileReader.result)])
            setLargo(largo+1);
        }
        fileReader.error=()=>{
            alert("Error al cargar el documento");
          }
    }
    const addFile= () => {
        setNombres([...nombres,"unitled-"+largo])
        setData([...data,new FilesArchiv("unitled-"+largo,"","")])
        setLargo(largo+1);
    }
    const onActual=(nombre)=>{
        data.forEach((element)=>{
          if(element.nombre === nombre){
            setActual(element);
          }
        })
        console.log(actual)
    }
    const onDelete=(nombre)=>{
        // eliminando nombre
        let tmp2=[]
        nombres.forEach((element,index)=>{
            if(element!== nombre){
                tmp2.push(element);
            }
        });
        setNombres(tmp2);
        //eliminando de data
        let tmp = []
        data.forEach((element,index)=>{
            if(element.nombre !== nombre){
                tmp.push(element)
            }
        });
        setData(tmp)
        //eliminando de actual si existe en el
        if(actual.nombre === nombre){
            setActual({})
        }
    }
    const handleEditorDidMount=(editor,monaco)=>{
        editorRef.current = editor;
    }
    const showValue= ()=>{
        setValor(editorRef.current.getValue())
        setNombre(nombre+1);
    }
    const safeFile = () => {
        setValor(editorRef.current.getValue())
        const blob = new Blob([editorRef.current.getValue()],{ type: 'text/plain;charset=utf-8' });
        let nombreA = actual.nombre;
        saveAs(blob,nombreA);
    }
    useEffect(() => {
        const peticion = async()=>{
            const endPoint = 'http://127.0.0.1:8000/getParse';
            const result = await axios.post(endPoint,{data:valor})
            if(result.data.errors.length>0){
                let datos = result.data.errors;
                let tmp = []
                datos.forEach((element)=>{
                    tmp.push(`>>>>> Error: ${element.tipo} , Descripcion: ${element.descripcion}, en la linea: ${element.linea} y columna: ${element.columna}`)
                })
                setErrorsI(tmp)
            }else{
                setErrorsI([">>>>> Compilacion Exitosa"])
            }
        }
        peticion();
    }, [nombre]);
    return(
        <div>
            <div className="d-flex justify-content-between mt-3">
                <div className="container col-md-3">
                    <input type="file" className="form-control" multiple={false} onChange={(e)=> readFile(e)}/>
                </div>
                <div className="container ">
                    <button className="btn btn-success" onClick={showValue} data-bs-toggle="modal" data-bs-target="#exampleModal3">RUN</button>
                    <button className="btn btn-info  ms-2" onClick={()=> safeFile()}>Guardar</button>
                    <button className="btn btn-dark  ms-2" onClick={()=> addFile()} >+</button>
                </div>
            </div>
            <div className='col-md-8 ms-5 mt-2'>
                <div>
                    {nombres.map((element,index)=>(
                        <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                            <button type="button" class="btn btn-outline-dark" key={index} disabled={actual.nombre === element} onClick={()=>{onActual(element)}}>{element}</button>
                            <button type="button" class="btn btn-outline-dark" key={index+"_Delete"} onClick={()=> onDelete(element)}>x</button>
                        </div>
                    ))}
                </div>
                <div>
                <Editor
                    height='80vh'
                    theme="vs-dark"
                    path={actual.nombre}
                    defaultLanguage ={actual.lenguaje}
                    defaultValue = {actual.valor}
                    options={{
                        minimap:{enabled:false},
                    }}
                    onMount={handleEditorDidMount}
                />
                </div>
            </div>
            <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Consola</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body bg-dark">
                                {errorsI.map((element,index)=>(
                                    <h3 key={index} className="text-bg-dark">{element}</h3>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Ejecuciones;