function getIssues() {
}

function showIssues(json) {
  json
}

function createIssue() {
  const repo = 'jinstrider2000/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`,{
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`}
  }).;
}

function showResults(json) {
  
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`,{
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`}
  });
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "4ad5401121db968f9fd2ae5535f1af49617e9ed6"
}
