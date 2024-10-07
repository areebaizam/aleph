// export enum eToggleIconType {
//     ExpandCollapse,
//     ShowHide,
//     ShowHideBottom,
// }
export enum eFeatureRouteURL {
  HOME = "",
  BLOG = "blog",
  CONTACT = "contact",
  // ADMIN_DASHBOARD ="",
  // ADMIN_SETTINGS ="settings",
}

export enum eAppEventToggleType {
  SIDENAV,
  FULLSCREEN,
  THEME,
  // ADMIN_DASHBOARD ="",
  // ADMIN_SETTINGS ="settings",
}

export class BtnNavModel {
  order: number = 0;
  id: number = 0;
  parentId: number | null = null;
  icon: string = '';
  label: string = '';
  url: eFeatureRouteURL = eFeatureRouteURL.HOME;
  children: BtnNavModel[] | null = null;
}


export interface ToggleStateModel {
  type: eAppEventToggleType;
  state: boolean;
}
export interface EventToggleModel extends ToggleStateModel {
  icon: string;
  iconAlt: string;

  // onClickToggleIcon: boolean;
  // onClickToggleState: boolean;
}

// export interface BtnNavModel {
//     order: number;
//     id: number;
//     parentId: number|null;
//     icon: string;
//     label: string;
//     url: string;
//     children: BtnNavModel[]|null;
//   }