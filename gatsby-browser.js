// const React = require("react")
// const Layout = require("./src/components/layout")

// // Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }

// // Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }


////////////////////////////////////////////////////////////////////////////////


//// THIS IS NOT NECESSARY HERE - EVERYTHING WORKS FINE WITHOUT IT
//// [https://stackoverflow.com/questions/56493502/how-to-add-bootstrap-js-in-a-gatsby-website] ////
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "@popperjs/core/dist/umd/popper.min.js";


////////////////////////////////////////////////////////////////////////////////


////// BAD / DUMPSTER CODE SECTION
// const React = require("react");
// const { default: useResizableWindow } = require("./src/hooks/useResizableWindow");

//// THIS DID NOT WORK TO RESIZRE WINDOW
// exports.onInitialClientRender = ({ setBodyAttributes, pathname, }) => {
//   setBodyAttributes({
//     style: {
//       minHeight: useResizableWindow.height,
//       minWidth: useResizableWindow.width,
//     },
//   });
// };

//// THIS DID NOT WORK TO RESIZRE WINDOW
// exports.onClientEntry = ({ setBodyAttributes, pathname, }) => {
//   setBodyAttributes({
//     style: {
//       minHeight: useResizableWindow.height,
//       minWidth: useResizableWindow.width,
//     },
//   });
// };
