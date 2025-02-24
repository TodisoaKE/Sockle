export interface IButton {
    label: string;
    size: 'small' | 'large' | undefined;
    severity: 'success' | 'info' | 'warning' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined;
    icon?: string;
    disabled?: boolean;
    loading?: boolean;
    isGrouped?: boolean;
    raised?: boolean;
    rounded?: boolean;
    text?: boolean;
    outlined?:boolean
}

export interface IAllButton {
    title: string;
    buttonProperty: IButton[]
}