import { resolve } from "path";
import { defineWindiSetup } from "@slidev/types";

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, "**/*.{md,vue,ts}")],
  }
}));
