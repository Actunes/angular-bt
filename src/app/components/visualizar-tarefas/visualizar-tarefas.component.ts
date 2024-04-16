import { Component } from '@angular/core';
import { TarefaService } from '../../app-core/services/tarefa-services';
declare var $ : any;

@Component({
  selector: 'app-visualizar-tarefas',
  standalone: true,
  imports: [],
  templateUrl: './visualizar-tarefas.component.html',
  styleUrl: './visualizar-tarefas.component.scss'
})
export class VisualizarTarefasComponent {

  i: number = 0;
  
  constructor(private tarefaService: TarefaService,
  ){
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
