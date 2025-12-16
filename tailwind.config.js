/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: 'rgb(var(--primary-blue) / <alpha-value>)',
                },
                accent: {
                    yellow: 'rgb(var(--accent-yellow) / <alpha-value>)',
                }
            }
        },
    },
    plugins: [],
}
