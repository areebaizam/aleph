import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BtnNavModel } from '@shared/models';

@Component({
  selector: 'tap-btn-nav-col',
  standalone: true,
  imports: [RouterLinkActive,RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './btn-nav-col.component.html',
  styleUrl: './btn-nav-col.component.scss'
})
export class BtnNavColComponent {
  data = input.required<BtnNavModel>()

}
