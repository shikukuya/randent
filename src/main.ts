import { createApp } from "vue";
import "./style.css";
// @ts-ignore
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app")
  .$nextTick(() => {
    // Remove Preload scripts loading
    postMessage({ payload: "removeLoading" }, "*");

    // Use contextBridge
    window.ipcRenderer.on("main-process-message", (_event, message) => {
      console.log(message);
    });
  });
