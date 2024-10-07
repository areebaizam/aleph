import { Component, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
//Components
import { BarBottomComponent, BarTopComponent } from '@core/components';
//Services
import { CoreService, ToggleService } from '@core/services';
import { eAppEventToggleType } from '@shared/models/common.model';

const materialModules = [MatSidenavModule, MatToolbarModule]
const components = [BarBottomComponent, BarTopComponent];

@Component({
  selector: 'tap-sidenav',
  standalone: true,
  imports: [RouterOutlet, ...materialModules, ...components],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  coreService = inject(CoreService);
  toggleService = inject(ToggleService);
}
