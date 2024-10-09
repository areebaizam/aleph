import { BtnNavModel, eAppEventToggleType, eFeatureRouteURL, EventToggleModel } from "./common.model";

export const APP_NAV_BTNS = [

    // {
    //     order: 2,
    //     id: 2,
    //     parentId: null,
    //     icon: "group",
    //     label: "admin",
    //     url: eFeatureRouteURL.ADMIN,
    //     // children:[
    //     //     {
    //     //         order: 2,
    //     //         id: 4,
    //     //         parentId: 2,
    //     //         icon: "group",
    //     //         label: "dashboard",
    //     //         url: eFeatureRouteURL.ADMIN_SETTINGS,
    //     //     },
    //     //     {
    //     //         order: 1,
    //     //         id: 3,
    //     //         parentId: 2,
    //     //         icon: "group",
    //     //         label: "admin",
    //     //         url: eFeatureRouteURL.ADMIN_DASHBOARD,
    //     //     },
    //     // ]
    // },
    {
        order: 1,
        id: 1,
        icon: "article",
        label: "blog",
        url: eFeatureRouteURL.BLOG,
        // children:[
        //     {
        //         order: 1,
        //         id: 2,
        //         parentId: 1,
        //         icon: "group",
        //         label: "dashboard",
        //         url: eFeatureRouteURL.ADMIN_SETTINGS,
        //     },
        //     {
        //         order: 2,
        //         id: 6,
        //         parentId: 1,
        //         icon: "group",
        //         label: "admin",
        //         url: eFeatureRouteURL.ADMIN_DASHBOARD,
        //     },
        // ]
    },
    {
        order: 2,
        id: 2,
        icon: "phone",
        label: "contact",
        url: eFeatureRouteURL.CONTACT,
    },
    {
        order: 2,
        id: 2,
        icon: "phone",
        label: "contact",
        url: eFeatureRouteURL.CONTACT,
    },
] as Array<BtnNavModel>;

export const APP_EVENT_TOGGLE_ICONS = [
    // {
    //     icon: "menu",
    //     iconAlt: "menu_open",
    //     isActive: false,
    //     type: eAppEventToggleType.SIDENAV,
    // },
    {
        icon: "fullscreen",
        iconAlt: "fullscreen_exit",
        tooltip:"Full screen (f)",
        tooltipAlt:"Exit full screen (f)",
        isActive: false,
        type: eAppEventToggleType.FULLSCREEN,
    },
    {
        icon: "dark_mode",
        iconAlt: "light_mode",
        tooltip:"Switch to dark mode (d)",
        tooltipAlt:"Switch to light mode (d)",
        isActive: false,
        type: eAppEventToggleType.THEME,
    },

] as Array<EventToggleModel>;

export const APP_SIDENAV_TOGGLE_ICON =
    {
        icon: "menu",
        iconAlt: "menu_open",
        tooltip:"Open menu",
        tooltipAlt:"Close menu",
        isActive: false,
        type: eAppEventToggleType.SIDENAV,
    } as EventToggleModel;