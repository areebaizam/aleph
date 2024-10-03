import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
//Components
import { BarBottomComponent, BarTopComponent } from '@core/components';
//Services
import { CoreService } from '@core/services';

const components = [BarBottomComponent, BarTopComponent];

@Component({
  selector: 'tap-sidenav',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, ...components],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  coreService = inject(CoreService);
}
