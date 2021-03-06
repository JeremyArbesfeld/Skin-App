Package.describe({
  name: "camera",
  summary: "Photos with one function call on desktop and mobile.",
  version: "1.1.3",
  git: "https://github.com/meteor/mobile-packages"
});

Cordova.depends({
  "org.apache.cordova.camera":"0.3.4"
});

Package.onUse(function(api) {
  api.export('MeteorCamera');
  api.use(["templating", "session", "ui", "blaze", "less", "reactive-var"]);
  api.addFiles('photo.html');
  api.addFiles('photo.js');
  api.addFiles("camera.less", ["web.browser"]);
  api.addFiles('photo-browser.js', ['web.browser']);
  api.addFiles('photo-cordova.js', ['web.cordova']);
});
