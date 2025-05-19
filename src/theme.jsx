
const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#1976d2',
                },
                background: {
                    default: '#f5f5f5',
                    paper: '#ffffff',
                },
                text: {
                    primary: '#000000',
                    secondary: '#4f4f4f',
                },
            }
            : {
                primary: {
                    main: '#1976d2',
                },
                background: {
                    default: '#121212',
                    paper: '#1e1e1e',
                },
                text: {
                    primary: '#ffffff',
                    secondary: '#b0b0b0',
                },
            }
        )
    }
});

export default getDesignTokens;
