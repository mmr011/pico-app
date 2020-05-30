const finder = async (route) => {
  let response;
  if(route === undefined) {
    response = await fetch(`http://localhost:3001/`);
    } else {
      response = await fetch(`http://localhost:3001/${route}`);
    };
  const body = await response.json();
  console.log(body.farms);
  return body;
};
export default finder;
