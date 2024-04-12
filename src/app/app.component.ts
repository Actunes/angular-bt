import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { RodapeComponent } from "./rodape/rodape.component";

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
