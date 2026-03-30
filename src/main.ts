import { mount } from "svelte";
import "./app.css";
import Gallery from "./sweater-vest-suede/vite/Gallery.svelte";

const app = mount(Gallery, {
  target: document.getElementById("app")!,
  props: {
    glob: import.meta.glob("/src/**/*.test.svelte"),
  },
});

export default app;
