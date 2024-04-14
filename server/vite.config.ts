import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";
import nodeServerPlugin from "./node-server-plugin";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["/app/style.css"],
          output: {
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
      },
      plugins: [client()],
    };
  } else {
    return {
      plugins: [honox(), nodeServerPlugin()],
      ssr: {
        target: "node",
      },
    };
  }
});
