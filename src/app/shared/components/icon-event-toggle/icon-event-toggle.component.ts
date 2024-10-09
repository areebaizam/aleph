import { Component, computed, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToggleService } from '@core/services/toggle.service';
import { EventToggleModel } from '@shared/models';

const materialModules = [MatButtonModule, MatIconModule, MatTooltipModule]

@Component({
  selector: 'tap-icon-event-toggle',
  standalone: true,
  imports: [materialModules],
  templateUrl: './icon-event-toggle.component.html',
  styleUrl: './icon-event-toggle.component.scss'
})

export class IconEventToggleComponent {
  data = input.required<EventToggleModel>();
  toggleService = inject(ToggleService);
  icon = computed<string>(() => !this.data().isActive ? this.data().icon : this.data().iconAlt);
  tooltip = computed<string>(() => !this.data().isActive ? this.data().tooltip : this.data().tooltipAlt);

  onToggleIconClicked($event: Event): void {
    $event.stopPropagation();
    this.toggleService.handleToggleEvent(this.data().type, !this.data().isActive);
  }

}
