SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "vivarthanam-gui/": "src/"
  },
  browserConfig: {
    "baseURL": "."
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "vivarthanam-gui": {
      "main": "vivarthanam-gui.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "devexpat/vivarthanam-converter": "github:devexpat/vivarthanam-converter@master",
    "devexpat/vivarthanam-unicode-conversion-maps": "github:devexpat/vivarthanam-unicode-conversion-maps@master",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "vue": "npm:vue@2.2.1"
  },
  packages: {}
});
