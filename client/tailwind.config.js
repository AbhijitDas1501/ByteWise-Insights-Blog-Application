import { content as _content, plugin as _plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    _content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [_plugin(), require('tailwind-scrollbar')()],
};

export default config;