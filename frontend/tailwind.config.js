export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       boxShadow: {
        left: '0 0 0 10px rgba(0, 0, 0, 0.1)',
        right: '0 10px 0 0 rgba(0, 0, 0, 0.1)',
        top: '10px 0 0 0 rgba(0, 0, 0, 0.1)',
        bottom: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
