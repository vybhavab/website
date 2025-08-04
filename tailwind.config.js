module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        heroBlob: "heroBlob 60s infinite"
      },
      keyframes:{
        heroBlob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(-50px, -10px) scale(1.1)"
          },
          "66%": {
            transform: "translate(30px, 10px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["emerald", {
      myThemeDark: {
        "primary": "#1EB854",
        "secondary": "#1FD65F",
        "accent": "#D99330",
        "neutral": "#374151",
        "base-100": "#111827",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    }],
    darkTheme: "myThemeDark",
  }
}
