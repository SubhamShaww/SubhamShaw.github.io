module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                'top': '0 -2px 6px -1px rgba(0, 0, 0, 0.1), 0 -1px 4px -1px rgba(0, 0, 0, 0.06)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
