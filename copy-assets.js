const cpx = require("cpx")

cpx.copy("src/fonts/*", "lib/src/fonts", {})
cpx.copy("src/styles/*", "lib/src/styles", {})

cpx.copy("src/**/*.css", "lib/src", {})
