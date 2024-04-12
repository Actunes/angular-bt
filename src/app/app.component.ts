import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";
import { RodapeComponent } from "./components/rodape/rodape.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CabecalhoComponent, RodapeComponent]
})
export class AppComponent {
  title = 'angular-bt';
}
