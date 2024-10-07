import { Component } from '@angular/core';
import { HeroComponent } from '@shared/components';

@Component({
  selector: 'tap-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
