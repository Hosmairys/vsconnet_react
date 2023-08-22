//estilização
import "./style.css";

//components
import CardServ from "../../components/CardServ";

//Hoots
import { Link } from "react-router-dom"

import { useEffect, useState } from "react";

import api from "../../utils/api";

function ListaServicos() {
    //STATE DEVS
    const [listaServs, setServs] = useState<any[]>([]);

    const [servicos, setservicos] = useState<any[]>(listaServs);

    const [skillDigitado, setskillDigitado] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoSkill(event: any) {
        if (event.target.value === "") {
            listarServicos();
        }
        setskillDigitado(event.target.value);
    };

    function buscarServsPorSkill(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        const servsFiltrados = listaServs.filter((servs: any) => servs.techs.includes(skillDigitado.toLocaleUpperCase()));

        if (servsFiltrados.length === 0) {
            alert("Não tem resultado")
        } else {
            setservicos(servsFiltrados)
        }
    };

    function listarServicos() {
        api.get("servicos")
            .then((response: any) => {
                setservicos(response.data);
                console.log(servicos)
            })
            .catch((error: any) => {
                console.log("Error ao realizar um requisição", error);
            })
    }

    useEffect(() => {
        //executa
        listarServicos();
    }, [])


    return (
        <div>
            <main>
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarServsPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..."
                                        onChange={verificarCampoSkill}
                                        autoComplete="off"
                                    />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                <li>

                                </li>
                                {
                                    servicos.map((servs: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardServ
                                                titulo={servs.nome}
                                                descricao={servs.descricao}
                                                proposta={servs.proposta}
                                                listaTechs={servs.techs}
                                                id={servs.id}
                                            />
                                       
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default ListaServicos;