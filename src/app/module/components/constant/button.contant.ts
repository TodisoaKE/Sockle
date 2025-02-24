import { IButton } from "../models/button.model";

export const LoadingButtons: IButton[] = [
    {
        label: 'Loading',
        icon: 'pi pi-check',
        loading: true,
        severity: 'primary',
        size: 'small'
    },
    {
        label: 'Loading',
        icon: 'pi pi-check',
        loading: true,
        severity: 'help',
        size: undefined
    },
    {
        label: 'Loading',
        icon: 'pi pi-check',
        loading: true,
        severity: 'danger',
        size: 'large'
    }
]

export const RaisedButoons: IButton[] = [
    {
        label: 'Raised',
        size: 'small',
        severity: 'primary',
        raised: true
    },
    {
        label: 'Raised',
        size: undefined,
        severity: 'secondary',
        raised: true
    },
    {
        label: 'Raised',
        size: 'large',
        severity: 'info',
        raised: true
    }
]

export const RoundedButtons: IButton[] = [
    {
        label: 'Rounded',
        severity: 'primary',
        size: 'small',
        rounded: true,
    },
    {
        label: 'Rounded',
        severity: 'contrast',
        size: undefined,
        rounded: true,
    },
    {
        label: 'Rounded',
        severity: 'warning',
        size: 'large',
        rounded: true,
    }    
]

export const TextButtons: IButton[] = [
    {
        label: 'Text',
        severity: 'primary',
        size: 'small',
        text: true,
    },
    {
        label: 'Text',
        severity: 'contrast',
        size: undefined,
        text: true,
    },
    {
        label: 'Text',
        severity: 'warning',
        size: 'large',
        text: true,
    }    
]

export const OutlinedButtons: IButton[] = [
    {
        label: 'Outlined',
        severity: 'primary',
        size: 'small',
        outlined: true,
    },
    {
        label: 'Outlined',
        severity: 'contrast',
        size: undefined,
        outlined: true,
    },
    {
        label: 'Outlined',
        severity: 'warning',
        size: 'large',
        outlined: true,
    }    
]