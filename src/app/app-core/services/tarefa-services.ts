import { Injectable } from "@angular/core";
import { Tarefa } from "../model/tarefa";
import { Status } from "../model/status";

@Injectable({
    providedIn: 'root'
})

export class TarefaService {

    private tarefas: string[] = []
    private tarefasTeste: Tarefa[] = []

    constructor() {        
    }

    addTarefa(tarefa: string) {
        this.tarefas.push(tarefa)
        console.log(`TAREFAS CADASTRADAS: ${this.tarefas}`)
    }

    popularTarefaTest(){
        let status = new Status(0, 'nova')
        let tarefa: Tarefa = new Tarefa(0, 'Estudar angular', '2014', '2024', status, 'Essa tarefa é destina a estudar o framework angular')

        this.tarefasTeste.push(tarefa)
        return this.tarefasTeste

    }

}