export interface ISideBar {
    title: string;
    icon: string;
    url?: string;
    showSubLink?: boolean;
    children: ISideBar[];
}