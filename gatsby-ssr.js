const React = require("react");
const { default: useResizableWindow } = require("./src/hooks/useResizableWindow");

exports.onRenderBody = ({ setBodyAttributes, pathname, }) => {
  setBodyAttributes({
    style: {
      backgroundColor: '#0a192f',
      minHeight: useResizableWindow.height,
      minWidth: useResizableWindow.width,
    },
  });
};
