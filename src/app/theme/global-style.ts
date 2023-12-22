type Colors = {
    primary: string,
    secondary: string,
    darkGray: string,
    gray: string,
    lightGray: string,
    red: string,
    darkBlue: string,
    blue: string
}

export type Color = keyof Colors;

export const theme = {
    colors: {
        primary: '#0F2944',
        secondary: '#FFFFFF',
        darkGray: '#B3B3B3',
        gray: '#CECECE',
        lightGray: '#F0EFEF',
        red: '#FA7272',
        darkBlue: '#0B0F1A',
        blue: '#0A1F32'
    },
} as const

export default theme;
