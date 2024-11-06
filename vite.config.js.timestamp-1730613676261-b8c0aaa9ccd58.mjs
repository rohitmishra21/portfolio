import { defineConfig } from "vite"; // सही तरीके से Vite को इंपोर्ट करें
import react from "@vitejs/plugin-react"; // सही तरीके से React प्लगइन को इंपोर्ट करें
import glsl from "vite-plugin-glsl"; // GLSL प्लगइन को सही तरीके से इंपोर्ट करें
import svgr from "vite-plugin-svgr"; // केवल एक बार SVGR प्लगइन इंपोर्ट करें

export default defineConfig({
  plugins: [react(), glsl(), svgr()], // सभी प्लगइन्स का सही उपयोग
});
