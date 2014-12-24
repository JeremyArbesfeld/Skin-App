Package.describe({
  name: 'ios-email',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('ios-email-cordova.js', 'web.cordova');
  api.addFiles('ios-email-browser.js', 'web.browser');
	api.export('IosEmail');
});

Cordova.depends ({
	'emailcomposer': '2.0.2'
});
