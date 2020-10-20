var exec = require("cordova/exec");

exports.loadURL = function (
  url,
  key,
  subject,
  displayName,
  isInvisible,
  success,
  error
) {
  exec(success, error, "JitsiPlugin", "loadURL", [
    url,
    key,
    subject,
    displayName,
    !!isInvisible,
  ]);
};

exports.destroy = function (success, error) {
  exec(success, error, "JitsiPlugin", "destroy", []);
};
