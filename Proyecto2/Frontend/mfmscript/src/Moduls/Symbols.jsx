import axios from "axios";
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MUIDataTable1 from 'mui-datatables'
export default function Symbols() {

    const [simbolos, setSimbolos] = useState([]);
    const endPoint = "http://127.0.0.1:8000/getSymbol";

    const getSymbolsA = async()=>{
        try {
            await axios.get(endPoint).then((response)=>{
                const data = response.data.prueba
                setSimbolos(data);
            });
        } catch (error) {
            console.log(error);
        }
    }

    const blackTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    const columns = [
        {
            name:"id",
            label: "ID"        
        },
        {
            name:"tipo",
            label: "TIPO"        
        },
        {
            name:"linea",
            label: "Linea"        
        },
        {
            name:"columna",
            label: "Columna"        
        },
    ]
    const options = {
        filter: false,
      };
    return(
        <>
        <li className="nav-item">
            <a className="nav-link active" onClick={getSymbolsA} href="/" data-bs-toggle="modal" data-bs-target="#exampleModal2">Tabla de Simbolos</a>
        </li>
        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Tabla de Simbolos</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ThemeProvider theme={blackTheme}>
                                <MUIDataTable1 
                                data={simbolos}
                                columns={columns}
                                options={options}
                                />
                            </ThemeProvider>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}