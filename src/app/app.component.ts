import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  turnd = "нолик";
  clicks(event: Event): void {
    let elementId: string = (event.target as Element).id;
    console.log(elementId);
    if (this.turnd == "нолик")
    {
      (event.target as Element).textContent = "0";
      this.turnd = "крестик";
    }
    else
    {
      (event.target as Element).textContent = "X";
      this.turnd = "нолик";
    }
  }
  newGame(): void {
  }
}
