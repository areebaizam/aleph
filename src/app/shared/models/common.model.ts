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

export interface EventToggleModel {
  icon: string;
  iconAlt: string;
  type: eAppEventToggleType;
  isActive: boolean;
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