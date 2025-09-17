// tailwind.config.js
import { defineConfig } from "tailwindcss"

export default defineConfig({
  theme: {
    extend: {
      fontSize: {
        "course-details-heading-small": ["26px", "36px"],
        "course-details-heading-large": ["36px", "44px"],
        "home-heading-small": ["28px", "34px"],
        "home-heading-large": ["48px", "56px"],
        base: ["15px", "21px"], // renamed from "default" to avoid conflicts
      },
    },
  },
})
