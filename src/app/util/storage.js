export default () => ({
  language: window.localStorage.getItem("language") || "",
  location: window.localStorage.getItem("location") || ""
});
