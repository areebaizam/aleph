import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BtnNavModel } from '@shared/models';

@Component({
  selector: 'tap-btn-navigation',
  standalone: true,
  imports: [RouterLinkActive,RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './btn-navigation.component.html',
  styleUrl: './btn-navigation.component.scss'
})
export class BtnNavigationComponent {
  data = input.required<BtnNavModel>()
}
