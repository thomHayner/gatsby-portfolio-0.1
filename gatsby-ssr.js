const React = require("react")

exports.onRenderBody = ({ setBodyAttributes, pathname, }) => {
  setBodyAttributes({
    style: {
      backgroundColor: '#0a192f',
    },
  });
};
