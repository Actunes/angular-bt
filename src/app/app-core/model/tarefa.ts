import { Status } from "./status";

export class Tarefa {
    id: number;
    titulo: string;
    dataInicio: string;
    dataConclusao: string;
    status: Status;
    descricao: string;

    constructor(
        id: number,
        titulo: string,
        dataInicio: string,
        dataConclusao: string,
        status: Status,
        descricao: string,
    ){
        this.id = id
        this.titulo = titulo
        this.dataInicio = dataInicio
        this.dataConclusao = dataConclusao
        this.status = status
        this.descricao = descricao
    }

}
