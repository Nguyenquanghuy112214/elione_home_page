/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }

      'md': '769px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1281px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1736px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '10px',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1296px',
      }
    },
    extend: {
      backgroundImage: {
        'bees': "url('../public/img/bees.png')",
        "cloud-img": "url('../public/img/bg-section.png')",
        "cloud-item-img": "url('../public/img/bg-item.png')",
        "dots": "url('../public/img/dots.png')",
        "banner1": "url('../public/img/banner2.jpg')",
        "banner2": "url('../public/img/banner1.jpg')",
        "banner3": "url('../public/img/banner3.jpg')",
      },

      dropShadow: {
        'text-banner': 'rgba(0, 0, 0, 0.298039) 0px 5px 0px',
        'text-none': 'unset'

      },
      colors: {
        border: "hsl(var(--border))",
        input: "#ffffff33",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F19AC2",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#26b4d7",
          foreground: "hsl(var(--secondary-foreground))",
        },
        active: {
          DEFAULT: "#6ECFF5",
        },
        banner: {
          DEFAULT: "#30b3d3",
        },
        text_title: {
          DEFAULT: "#26b4d7",
        },
        text_h5: {
          DEFAULT: "#9F9E9E",
        }

      },
      width: {
        "height-banner": '200px'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "bees": {
          '100%': { 'background-position': '-120px' }
        },


        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "bees-fly": "bees 0.1s steps(3) infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
  ],
}