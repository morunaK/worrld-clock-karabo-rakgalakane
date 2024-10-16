(function $csb$eval(
  require,
  module,
  exports,
  process,
  global,
  __dirname,
  __filename,
  $csbImport
) {
  "use strict";

  function displayJoke(response) {
    console.log(response.data.answer);
    new Typewriter("#joke", {
      strings: response.data.answer,
      autoStart: true,
      cursor: null,
      delay: 20,
    });
  }
  function generateJoke(event) {
    event.preventDefault();
    var apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    var context =
      "Your are a funny AI Assistant that tells short and sweet jokes. The joke must be provided in HTML format. Example: <p>this is a joke</p>";
    var prompt = "Generate a short and unique joke a French people. ";
    var apiUrl = "https://api.shecodes.io/ai/v1/generate?prompt="
      .concat(prompt, "&context=")
      .concat(context, "&key=")
      .concat(apiKey);
    var jokeElement = document.querySelector("#joke");
    jokeElement.innerHTML = "Generating a joke for you.. please wait";
    console.log("called the AI api");
    axios.get(apiUrl).then(displayJoke);
  }
  var generatorButton = document.querySelector("#generate-joke-button");
  generatorButton.addEventListener("click", generateJoke);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkaXNwbGF5Sm9rZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJhbnN3ZXIiLCJUeXBld3JpdGVyIiwic3RyaW5ncyIsImF1dG9TdGFydCIsImN1cnNvciIsImRlbGF5IiwiZ2VuZXJhdGVKb2tlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwaUtleSIsImNvbnRleHQiLCJwcm9tcHQiLCJhcGlVcmwiLCJjb25jYXQiLCJqb2tlRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImdlbmVyYXRvckJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlcyI6WyIvc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRpc3BsYXlKb2tlKHJlc3BvbnNlKSB7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuYW5zd2VyKTtcblxuICBuZXcgVHlwZXdyaXRlcihcIiNqb2tlXCIsIHtcbiAgICBzdHJpbmdzOiByZXNwb25zZS5kYXRhLmFuc3dlcixcbiAgICBhdXRvU3RhcnQ6IHRydWUsXG4gICAgY3Vyc29yOiBudWxsLFxuICAgIGRlbGF5OiAyMFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVKb2tlKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBhcGlLZXkgPSBcIjIwNDZjNTM1YWZlYjA5MmZvODJmMWQzMDZkOGEyYjJ0XCI7XG4gIGxldCBjb250ZXh0ID1cbiAgICBcIllvdXIgYXJlIGEgZnVubnkgQUkgQXNzaXN0YW50IHRoYXQgdGVsbHMgc2hvcnQgYW5kIHN3ZWV0IGpva2VzLiBUaGUgam9rZSBtdXN0IGJlIHByb3ZpZGVkIGluIEhUTUwgZm9ybWF0LiBFeGFtcGxlOiA8cD50aGlzIGlzIGEgam9rZTwvcD5cIjtcbiAgbGV0IHByb21wdCA9IFwiR2VuZXJhdGUgYSBzaG9ydCBhbmQgdW5pcXVlIGpva2UgYSBGcmVuY2ggcGVvcGxlLiBcIjtcbiAgbGV0IGFwaVVybCA9IGBodHRwczovL2FwaS5zaGVjb2Rlcy5pby9haS92MS9nZW5lcmF0ZT9wcm9tcHQ9JHtwcm9tcHR9JmNvbnRleHQ9JHtjb250ZXh0fSZrZXk9JHthcGlLZXl9YDtcblxuICBsZXQgam9rZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pva2VcIik7XG5cbiAgam9rZUVsZW1lbnQuaW5uZXJIVE1MID0gXCJHZW5lcmF0aW5nIGEgam9rZSBmb3IgeW91Li4gcGxlYXNlIHdhaXRcIjtcblxuICBjb25zb2xlLmxvZyhcImNhbGxlZCB0aGUgQUkgYXBpXCIpO1xuICBheGlvcy5nZXQoYXBpVXJsKS50aGVuKGRpc3BsYXlKb2tlKTtcbn1cblxubGV0IGdlbmVyYXRvckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuZXJhdGUtam9rZS1idXR0b25cIik7XG5nZW5lcmF0b3JCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdlbmVyYXRlSm9rZSk7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsV0FBV0EsQ0FBQ0MsUUFBUSxFQUFFO0VBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJLENBQUNDLE1BQU0sQ0FBQztFQUVqQyxJQUFJQyxVQUFVLENBQUMsT0FBTyxFQUFFO0lBQ3RCQyxPQUFPLEVBQUVOLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxNQUFNO0lBQzdCRyxTQUFTLEVBQUUsSUFBSTtJQUNmQyxNQUFNLEVBQUUsSUFBSTtJQUNaQyxLQUFLLEVBQUU7RUFDVCxDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNDLFlBQVlBLENBQUNDLEtBQUssRUFBRTtFQUMzQkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN0QixJQUFJQyxNQUFNLEdBQUcsa0NBQWtDO0VBQy9DLElBQUlDLE9BQU8sR0FDVCwwSUFBMEk7RUFDNUksSUFBSUMsTUFBTSxHQUFHLG9EQUFvRDtFQUNqRSxJQUFJQyxNQUFNLG9EQUFBQyxNQUFBLENBQW9ERixNQUFNLGVBQUFFLE1BQUEsQ0FBWUgsT0FBTyxXQUFBRyxNQUFBLENBQVFKLE1BQU0sQ0FBRTtFQUV2RyxJQUFJSyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUVqREYsV0FBVyxDQUFDRyxTQUFTLEdBQUcseUNBQXlDO0VBRWpFcEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7RUFDaENvQixLQUFLLENBQUNDLEdBQUcsQ0FBQ1AsTUFBTSxDQUFDLENBQUNRLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQztBQUNyQztBQUVBLElBQUkwQixlQUFlLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQ3JFSyxlQUFlLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRWhCLFlBQVksQ0FBQyJ9
  //# sourceURL=https://ypdl66.csb.app/src/index.js
});
