 App.info({
  name: 'SkinDecision',
  description: 'An app for skin.',
  author: 'Jeremy Arbesfeld',
  email: 'jarbesfeld@gmail.com',
  website: 'http://skindecision.meteor.com',
  version: '0.0.1'
});

App.setPreference('StatusBarOverlaysWebView', 'false');

App.icons({
  // iOS
  'iphone': 'resources/icons/Icon-60@2x.png',
  'iphone_2x': 'resources/icons/Icon-60@2x.png',
  'ipad': 'resources/icons/Icon-76.png',
  'ipad_2x': 'resources/icons/Icon-76@2x.png',

  // Android
  // 'android_ldpi': 'resources/icons/icon-36x36.png',
  // 'android_mdpi': 'resources/icons/icon-48x48.png',
  // 'android_hdpi': 'resources/icons/icon-72x72.png',
  // 'android_xhdpi': 'resources/icons/icon-96x96.png'
});