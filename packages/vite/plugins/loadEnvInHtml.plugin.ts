import { type Plugin } from "vite";

export const loadEnvInHtmlPlugin = (env: Record<string, string>): Plugin => ({
  name: "load-env-in-html-plugin",
  transformIndexHtml(html) {
    return html.replace(
      /{{\s*([\w\d]+)\s*}}/gi,
      (_, key: string) => env[key] ?? ""
    );
  },
});
