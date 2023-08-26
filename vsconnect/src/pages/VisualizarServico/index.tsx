//rotas
import { useParams } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";

//axios

import api from "../../utils/api";

function VisualizarServico() {

    const { idservicos } = useParams();

    const [titulo, setTitulo] = useState<string>("");
    const [proposta, setProposta] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [listaSkills, setListaSkills] = useState<string[]>([]);

    function buscarServicoPorID() {
        api.get("servicos/" + idservicos)
        .then((response: any) => {

            setTitulo(response.data.nome)
            setProposta(response.data.valor)
            setDescricao(response.data.descricao)
            setListaSkills(response.data.techs)
            console.log(response)
        })
        .catch((error: any) => console.log(error))
    }

    useEffect(() =>{
        buscarServicoPorID();
    }, [])

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{titulo}</h2>
                        <span>R${proposta} </span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            listaSkills.map((tench: string, index: number) =>{
                                return <span key={index}>{tench}</span>
                            })
                        }
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;