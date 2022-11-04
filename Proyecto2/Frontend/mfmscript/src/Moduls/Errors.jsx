import axios from "axios";
import MUIDataTable from 'mui-datatables'
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
function Errores() {
    const [errors, setErrors] = useState([]);
    const getErrors = async()=>{
        await axios.get('http://127.0.0.1:8000/getErrores').then((response)=>{
            const data = response.data.errors;
            console.log(data);
            setErrors(data);
        })  
    }
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    const columns = [
        {
            name:"tipo",
            label: "TIPO"        
        },
        {
            name:"descripcion",
            label: "Descripcion"        
        },
        {
            name:"linea",
            label: "Linea"        
        },
        {
            name:"columna",
            label: "Columna"        
        }
    ]
    const options = {
        filter: false,
        responsive: 'vertical',
        rowsPerPage: 5,
        selectableRows: 'multiple',
      };
    return(<>
            <li className="nav-item">
                                    <a className="nav-link active" onClick={getErrors} href="/" data-bs-toggle="modal" data-bs-target="#exampleModal1">Tabla de Errores</a>
            </li>
            <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Tabla de errores</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <ThemeProvider theme={darkTheme}>
                                <MUIDataTable 
                                title={"Tabla de Errores"}
                                data={errors}
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
        </>);
}
export default Errores;