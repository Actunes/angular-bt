import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { VisualizarTarefasComponent } from './components/visualizar-tarefas/visualizar-tarefas.component';

export const routes: Routes = [
    {path: "", redirectTo: "pagina-inicial", pathMatch: 'full'},
    {path: "pagina-inicial", component: PaginaInicialComponent},
    {path: "visualizar-tarefas", component: VisualizarTarefasComponent}
];
