export interface IButton {
    label?: string;
    icon?: string;
    outlined?: boolean;
    text?: boolean;
    rounded?: boolean;
    raised?: boolean;
    size?: "small | large";
    disabled?: boolean;
    loading?: boolean;
    isGrouped?: boolean;
}

export interface ISeverityButton {
    severity: "success" | "info" | "warn" | "danger" | "help" | "contrast" | "default";
}