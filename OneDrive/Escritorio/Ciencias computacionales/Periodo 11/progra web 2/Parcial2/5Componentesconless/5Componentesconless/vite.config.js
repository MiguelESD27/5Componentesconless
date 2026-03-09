import { defineConfig } from "vite";
import purgeCss from "vite-plugin-purgecss";

export default defineConfig(
    {
        base: "/5ComponentesLess/",
        appType: "mpa",
        plugins: [
            purgeCss(),
        ],
        
    }
);