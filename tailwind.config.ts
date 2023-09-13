import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#BCA580",
                "secondary-normal": "#655A48",
                "secondary-light": "#493E2C",
                "secondary-dark": "#3B372B",
            },
        },
    },
    plugins: [],
};
export default config;
