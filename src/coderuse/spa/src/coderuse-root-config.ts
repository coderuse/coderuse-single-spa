import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "hello-angular",
  app: () => System.import("hello-angular"),
  activeWhen: ["/hello-angular"]
});

registerApplication({
  name: "hello-react",
  app: () => System.import("hello-react"),
  activeWhen: ["/hello-react"]
});

registerApplication({
  name: "@coderuse/vue",
  app: () => System.import("@coderuse/vue"),
  activeWhen: ["/hello-vue"]
});

start({
  urlRerouteOnly: true,
});
