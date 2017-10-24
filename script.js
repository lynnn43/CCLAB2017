//Some Global Variables to Hold Info for Later

// //Constructors for API URL Request. We'll use these later
// var baseURL = "https://ghibliapi.herokuapp.com";
// var films = "/films";
// var id1 = "/58611129-2dbc-4a81-a72f-77ddfc1b1b49";
// var fullURL = baseURL + films + id1;

//Pull in our HTML elements so we can talk to them using JS
var title = document.getElementById("title");
var description = document.getElementById("description");

// runs whole function as soon as page opens. We wrap all our code in this function.
(function() {
  //Set Event listener on Button. When clicked, run the makeRequest function defined below
  document.getElementById("ajaxButton-station").addEventListener("click", makeSpaceLocRequest);
  document.getElementById("ajaxButton-people").addEventListener("click", makePeopleRequest);
  //variable to hold httpRequest info
  var httpRequest;
  //makeRequest function runs when button is clicked
  function makeSpaceLocRequest() {
    httpRequest = new XMLHttpRequest();
    //If something is wrong with request, pop-up an alert that says so
    if (!httpRequest) {
      alert("It did not work :(");
      return false;
    }
    httpRequest.onreadystatechange = fillSpaceStationInfo;
    httpRequest.open(
      "GET", "http://api.open-notify.org/iss-now.json"
    );
    httpRequest.send();
  }
  function makePeopleRequest(){
    httpRequest = new XMLHttpRequest();
    //If something is wrong with request, pop-up an alert that says so
    if (!httpRequest) {
      alert("It did not work :(");
      return false;
    }
    httpRequest.onreadystatechange = fillPeopleInfo;
    httpRequest.open(
      "GET", "http://api.open-notify.org/astros.json"
    );
    httpRequest.send();
  }

  //Function that Runs When API Call is finished
  function fillSpaceStationInfo() {
    //variable to hold the response from API GET request
    var responseContent;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
          responseContent = httpRequest.responseText;
          var parsed = JSON.parse(responseContent);
          console.log(httpRequest.responseText);
          var spaceLocDiv = document.getElementById("spaceStationLoc");
          spaceLocDiv.innerHTML = "The spacecreaft is at " + parsed.iss_position.latitude + ", " + parsed.iss_position.longitude;       
      } else {
        alert("There was a problem with the request.");
      }
    }
  }

  //Function that Runs When API Call is finished
  function fillPeopleInfo() {
    //variable to hold the response from API GET request
    var responseContent;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
          responseContent = httpRequest.responseText;
          var parsed = JSON.parse(responseContent);
          console.log(parsed);
          var people = parsed.people;
          var spacePeopleDiv = document.getElementById("spaceInfo");
          spacePeopleDiv.innerHTML = "There are " + parsed.number + " people on the craft: <br />";
          for (let i  = 0;i != people.length; ++i){
            spacePeopleDiv.innerHTML += people[i].name;
            spacePeopleDiv.innerHTML += "<br />";
          }
          // spaceLocDiv.innerHTML = "The spacecreaft is at " + parsed.iss_position.latitude + ", " + parsed.iss_position.longitude;       
      } else {
        alert("There was a problem with the request.");
      }
    }
  }
  //Make sure you ad the () after the end of the function.
})();