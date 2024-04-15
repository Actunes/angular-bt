import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { VisualizarTarefasComponent } from './components/visualizar-tarefas/visualizar-tarefas.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: 'full'},
    {path: "home", component: PaginaInicialComponent},
    {path: "tasks", component: VisualizarTarefasComponent}
];
