import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrandComponent } from '@core/components/brand/brand.component';


@Component({
  selector: 'tap-bar-top',
  standalone: true,
  imports: [MatToolbarModule, BrandComponent],
  templateUrl: './bar-top.component.html',
  styleUrl: './bar-top.component.scss'
})
export class BarTopComponent {

}
