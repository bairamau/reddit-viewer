function handleError(error) {
  console.log('Error:', error);
}

async function fetchData(data) {
  const uri = `https://www.reddit.com/${data}`;
  const response = await fetch(uri)
    .catch(handleError);
  const object = await response.json();
  return object.data.children;
}

export async function getCommunityPosts(communityName) {
  return await fetchData(`r/${communityName}.json`);
}

export async function getSearchPosts(search) {
  return await fetchData(`search.json${search}`);
}

export async function getSearchCommunities(search) {
  if (search.length < 6) return [];
  return await fetchData(`search.json${search}&type=sr`);
}
