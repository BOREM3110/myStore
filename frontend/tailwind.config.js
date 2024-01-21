/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22"
      },
      maxWidth: {
        
      container: "1440px"
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      },
      fontFamily: {
        titleFont: "Roboto",
        bodyFont: "Poppins"
      },
      boxShadow:{
        testShadow: "0px 0px 32px 1px rgba(199, 199, 199, 1)",
        
      }
    },
  },
  plugins: [],
}

