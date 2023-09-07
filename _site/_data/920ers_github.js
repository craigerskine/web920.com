const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function() {
  const arr = [];
  try {
    let githubHandles = await EleventyFetch('https://api.github.com/repos/craigerskine/web920.com/subscribers', {
      duration: "1d",
      type: "json",
    });
    for (const githubHandle of githubHandles) {
      const profile = await fetchGitHubUser(githubHandle.login)
      arr.push(profile);
    }
    return arr;
  } catch(e) {
    console.log( "Failed getting GitHub users" );
    arr = [];
    return arr;
  }
}

async function fetchGitHubUser(githubHandle) {
  console.log(`Fetching GitHub data... ${githubHandle}`);
  let github = await EleventyFetch(`https://api.github.com/users/${githubHandle}`, {
    duration: "1d",
    type: "json",
  })
  return github;
};