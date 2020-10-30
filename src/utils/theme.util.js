// Theme colors.
export const theme = {
    white: '#fff',
    gray400: '#bababa',
    gray500: '#8C8A9A',
    gray700: '#818181',
    gray800: '#414042',
    red: '#E14161',
    blue: '#0075FF',
};

// Responsive screen sizes for devices.
const size = {
    mobileXS: '320px',
    mobileS: '414px',
    mobileL: '590px',
    tabletS: '730px',
    tabletM: '786px',
    tabletL: '960px',
    laptopS: '1172px',
    laptopM: '1442px',
};

// Media queries.
export const device = {
    mobileXS: `(max-width: ${size.mobileXS})`,
    mobileS: `(max-width: ${size.mobileS})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptopS: `(max-width: ${size.laptopS})`,
    laptopM: `(max-width: ${size.laptopM})`,
};
