/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-extra-light': '#f2f9fd',
        'primary-light': '#c5e3f2',
        'primary-main': '#8ecae6',
        'primary-hover': '#58b2d8',
        'primary-focus': '#3298c5',
        'primary-dark': '#1d6187',
        'primary-extra-dark': '#1c465e',
        'secondary-light': '#fff9c5',
        'secondary-main': '#fff485',
        'secondary-hover': '#ffe746',
        'secondary-focus': '#ffd71b',
        'secondary-dark': '#ffb703',
        'secondary-extra-dark': '#bb6202',
        'success-light': '#f0fe58',
        'success-main': '#c3dc06',
        'success-dark': '#a5be00',
        'warning-light': '#ffc36d',
        'warning-main': '#ff9e32',
        'warning-dark': '#cc4902',
        'error-light': '#ff8b8b',
        'error-main': '#ff4949',
        'error-dark': '#be0000',
      },
    },
  },
  plugins: [],
}
