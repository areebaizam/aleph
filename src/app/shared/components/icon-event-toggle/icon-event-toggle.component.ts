import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToggleService } from '@core/services/toggle.service';
import { EventToggleModel } from '@shared/models';

const materialModules = [MatButtonModule, MatIconModule]

@Component({
  selector: 'tap-icon-event-toggle',
  standalone: true,
  imports: [materialModules],
  templateUrl: './icon-event-toggle.component.html',
  styleUrl: './icon-event-toggle.component.scss'
})
export class IconEventToggleComponent implements OnInit {
  data = input.required<EventToggleModel>();
  toggleService = inject(ToggleService);

  state = signal<boolean>(false);
  icon = computed<string>(() => !this.state() ? this.data().icon : this.data().iconAlt);

  ngOnInit(): void {
    this.state.set(this.data().state);
  }

  onToggleIconClicked($event: Event): void {
    $event.stopPropagation();
    this.state.update(state=>!state);
    this.toggleService.handleToggleEvent(this.data().type, this.state());
  }

}
