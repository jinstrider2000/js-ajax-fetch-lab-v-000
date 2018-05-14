function getIssues() {
}

function showIssues(body) {
  json
}

function createIssue() {
  const repo = 'jinstrider2000/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`,{
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`}
  });
}

function showResults(body) {
  const response = body.json();
  $("#results").innerHTML = "";
  $("#results").append(`<a href="${response.html_url}">${response.owner.login}'s "${response.name}" Fork</a>`);
}

function apiError(body) {
  $("#results").innerHTML = "";
  $("#results").append("<p>Sorry, error contacting the GitHub API</p>");
  console.log(body.text());
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`,{
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`}
  }).then(showResults,apiError);
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}
