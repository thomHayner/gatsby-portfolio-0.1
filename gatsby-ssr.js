const React = require("react")

exports.onRenderBody = ({ setBodyAttributes, pathname, }) => {
  setBodyAttributes({
    style: {
      backgroundColor: '#0a192f',
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
    },
  });
};
