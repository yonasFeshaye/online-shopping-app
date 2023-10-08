import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {

          primary: "#3bd34d",

          secondary: "#a3f7e9",

          accent: "#c9d5ff",

          neutral: "#151a23",

          "base-100": "#312b3b",

          info: "#53b6ca",

          success: "#1f7a73",

          warning: "#c29c05",

          error: "#e94454",
          body: {
            "background-color": "#e3e6e6",

          },
        },
      },
    ],
  },
}
export default config
