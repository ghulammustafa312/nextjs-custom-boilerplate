let isLocal = true;
let backendURL = "";
let isProduction = false;

if (isLocal) {
  backendURL = `http://localhost:3000`;
  
} else if (isProduction) {
  backendURL= `http://localhost:3000`;
}
export const BACKEND_API_URL=backendURL
