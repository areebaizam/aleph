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
    {
        order: 2,
        id: 2,
        icon: "phone",
        label: "contact",
        url: eFeatureRouteURL.CONTACT,
    },
] as Array<BtnNavModel>;

export const APP_EVENT_TOGGLE_ICONS = [
    {
        icon: "menu",
        iconAlt: "menu",
        // iconAlt: "menu_open", TODO Handle sidenav icon from opened change event
        state:false,
        type: eAppEventToggleType.SIDENAV,
    },
    {
        icon: "fullscreen",
        iconAlt: "fullscreen_exit",
        state:false,
        type: eAppEventToggleType.FULLSCREEN,
    },
    {
        icon: "dark_mode",
        iconAlt: "light_mode",
        state:false,
        type: eAppEventToggleType.THEME,
    },

] as Array<EventToggleModel>;