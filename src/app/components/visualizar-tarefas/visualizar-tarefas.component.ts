import { Component } from '@angular/core';
import { TarefaService } from '../../app-core/services/tarefa-services';
import { Tarefa } from '../../app-core/model/tarefa';
import { NgClass, NgFor, NgIf } from '@angular/common';
declare var $ : any;

@Component({
  selector: 'app-visualizar-tarefas',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './visualizar-tarefas.component.html',
  styleUrl: './visualizar-tarefas.component.scss'
})
export class VisualizarTarefasComponent {

  i: number = 0;

  tarefa: Tarefa [] = []
status: any;
  
  constructor(private tarefaService: TarefaService,
  ){
    this.tarefa = tarefaService.popularTarefaTest()
  }

  addTarefa(){
    this.tarefaService.addTarefa("tarefa" + this.i)

    this.i ++
  }

  openModal() {
   $('#addTarefa').modal('show');
  }

  closeModal(){
    $('#addTarefa').modal('hide')
  }

}
