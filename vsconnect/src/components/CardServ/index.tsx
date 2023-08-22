//estilizacao
import { Link } from "react-router-dom";
import "./style.css"


function CardServ(props: any) {
    return (
        <div className="servico">
            <div className="topo_servico">
                <Link to={"/visualizar/servicos/" + props.id}><h3>{props.titulo}</h3></Link>
                <span>{props.proposta}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">
                {
                    props.listaTechs.map((tech: String, indice: number) => {
                        return <span key={indice}>{tech}</span>
                    })
                }
            </div>
        </div>
    );
}

export default CardServ;