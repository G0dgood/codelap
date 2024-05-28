 
export const baseUrl: any = "https://randomuser.me"; 
 

export const buildDynamicURL = (  page:number, results:number,nationality:string,gender:string,base:string ) => {
  let baseURL = `${base}`;
  const queryParams = [];

  // Add 'results' to the query parameters if it's not null or undefined
  if (results !== null && results !== undefined) {
    queryParams.push(`results=${results}`);
  } 
  // Add 'page' to the query parameters if it's not null or undefined
  if (page !== null && page !== undefined) {
    queryParams.push(`page=${page}`);
  }
  // Add 'nationality' to the query parameters if it's not null or undefined
  if (nationality !== null && nationality !== undefined) {
    queryParams.push(`nat=${nationality}`);
  }
  // Add 'gender' to the query parameters if it's not null or undefined
  if (gender !== null && gender !== undefined) {
    queryParams.push(`nat=${gender}`);
  }

  // Combine the base URL and query parameters
  if (queryParams.length > 0) {
    baseURL += "?" + queryParams.join("&");
  }

  return baseURL;
};
