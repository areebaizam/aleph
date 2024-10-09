import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { APP_EVENT_TOGGLE_ICONS, APP_SIDENAV_TOGGLE_ICON } from '@shared/models';
import { eAppEventToggleType, EventToggleModel } from '@shared/models/common.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  #toggleIcons = signal<EventToggleModel[]>(APP_EVENT_TOGGLE_ICONS);
  toggleIcons = computed(this.#toggleIcons);
  #toggleSidenavIcon = signal<EventToggleModel>(APP_SIDENAV_TOGGLE_ICON);
  toggleSidenavIcon = computed(this.#toggleSidenavIcon);
  isSidebarOpen = signal<boolean>(false);
  document = inject(DOCUMENT);
  #darkThemeMediaQuery: MediaQueryList | undefined;
  platformId = inject(PLATFORM_ID);
  isDarkMode = signal<boolean>(false);

  //TODO: Move this to Document Service
  constructor() {
    this.document.addEventListener('fullscreenchange', () => this.updateState(eAppEventToggleType.FULLSCREEN, !!document.fullscreenElement));
    this.document.addEventListener('keydown', this.onKeydown.bind(this));
    this.setThemeParams();
  }

  setThemeParams() {
    if (isPlatformBrowser(this.platformId)) {
      //Todo handle icon base on sys preference
      this.#darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.updateDefaultTheme();
      // Listen for changes in system preference
      this.#darkThemeMediaQuery.addEventListener('change', () => {
        this.updateDefaultTheme();
      });
    }
  }

  updateDefaultTheme() {
    const darkDefault = this.#darkThemeMediaQuery && this.#darkThemeMediaQuery.matches ? true : false;
    this.#toggleIcons.update((icons) =>
      icons.map((icon) =>
        icon.type === eAppEventToggleType.THEME ? { ...icon, isActive: darkDefault } : icon
      )
    );
    this.updateTheme(darkDefault);
  }

  updateTheme(state: boolean) {
    this.isDarkMode.set(state);
    this.document.documentElement.classList.toggle('dark-theme', this.isDarkMode());
  }

  handleToggleEvent(type: eAppEventToggleType, state: boolean): void {
    this.updateState(type, state);
    switch (type) {
      case eAppEventToggleType.SIDENAV:
        this.isSidebarOpen.set(state);
        break;
      case eAppEventToggleType.FULLSCREEN:
        this.toggleFullscreen();
        break;
      case eAppEventToggleType.THEME:
        this.updateTheme(state);
        break;
    }
  }

  private updateState(type: eAppEventToggleType, state: boolean) {
    switch (type) {
      case eAppEventToggleType.SIDENAV:
        this.#toggleSidenavIcon.update((icon) => { return { ...icon, isActive: state }; });
        break;
      default:
        this.#toggleIcons.update((icons) =>
          icons.map((icon) =>
            icon.type === type ? { ...icon, isActive: state } : icon
          )
        );
    }
  }

  // Enter fullscreen mode
  private toggleFullscreen() {
    if (!this.document.fullscreenElement) {
      this.document.documentElement.requestFullscreen();
    }
    else this.document.exitFullscreen();
  }

  //TODO:BUG Handle F11 full screen 
  private onKeydown($event: KeyboardEvent) {
    $event.stopImmediatePropagation();

    if ($event.key === 'F11') {
      this.updateState(eAppEventToggleType.FULLSCREEN, true);
    }
    // Check if the focussed element is editable
    if (this.isActiveElementEditable()) return;

    if ($event.key === 'F' || $event.key === 'f') {
      this.toggleFullscreen();
    }
    else if ($event.key === 'D' || $event.key === 'd') {
      this.handleToggleEvent(eAppEventToggleType.THEME, !this.isDarkMode());
    }
  }

  private isActiveElementEditable(): boolean {
    const activeElement = this.document.activeElement as HTMLElement;
    return activeElement.tagName === 'INPUT' ||
      activeElement.tagName === 'TEXTAREA' ||
      activeElement.isContentEditable;
  }
}
