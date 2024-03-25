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
                background: "hsl(var(--background))",
                primary: "hsl(var(--primary))",
            },

            transitionTimingFunction: {
                custom: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            },
        },
    },
    plugins: [],
};
export default config;
