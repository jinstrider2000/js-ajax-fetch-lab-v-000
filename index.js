function getIssues(body) {
  const owner = body.user.login, repositoryURL = body.repository_url;
  return fetch(`${repositoryURL}/issues`, {
    method: 'GET',
    headers: {Authorization: `token ${getToken()}`}
  });
}

function showIssues(body) {
  $("#issues").innerHTML = "";
  body.forEach((issue) => {
    const title = issue.title;
    const body = issue.body;
    const issueEntry = `
    <ul>
    <li>${title}</li>
    <li>${body}</li>
    </ul>
    `.trim();
    $("#issues").append(issueEntry);
  });
}

function createIssue() {
  const repo = 'jinstrider2000/javascript-fetch-lab';
  const data = {
    title: $("#title")[0].value,
    body: $("#body")[0].value
  };

  fetch(`https://api.github.com/repos/${repo}/issues`,{
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`},
    body: JSON.stringify(data)
  }).then(jsonify).then(getIssues).then(jsonify).then(showIssues);
}

function showResults(body) {
  $("#results").innerHTML = "";
  $("#results").append(`<a href="${body.html_url}">${body.owner.login}'s "${body.name}" Fork</a>`);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`,{
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`}
  }).then(jsonify).then(showResults);
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}

function jsonify(response) {
  return response.json();
}
