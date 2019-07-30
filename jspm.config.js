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
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17",
      "@jspm/core": "npm:@jspm/core@1.0.4"
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
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "vivarthanam-converter": "npm:vivarthanam-converter@1.0.1",
    "vivarthanam-unicode-conversion-maps": "npm:vivarthanam-unicode-conversion-maps@1.0.0",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "vue": "npm:vue@2.2.1"
  },
  packages: {
    "npm:vivarthanam-converter@1.0.1": {
      "map": {
        "vivarthanam-unicode-conversion-maps": "npm:vivarthanam-unicode-conversion-maps@1.0.0"
      }
    }
  }
});
