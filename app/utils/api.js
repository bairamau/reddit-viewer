export async function fetchPopularPosts() {
  const response = await fetch('https://www.reddit.com/r/popular.json')
  .catch(handleError);
  const object = await response.json();
  console.log(object.data.children);
  return object.data.children;
}

function handleError(error){
  console.log('Error:', error);
}