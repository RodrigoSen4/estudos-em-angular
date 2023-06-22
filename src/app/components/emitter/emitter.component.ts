import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent {
  numeroAleatorio = 0;

  onChangeNumber() {
    this.numeroAleatorio = Math.floor(Math.random() * 10);
  }
}
