import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BtnNavModel } from '@shared/models';

@Component({
  selector: 'tap-btn-nav',
  standalone: true,
  imports: [RouterLinkActive,RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './btn-nav.component.html',
  styleUrl: './btn-nav.component.scss'
})
export class BtnNavComponent {
  data = input.required<BtnNavModel>()
}
