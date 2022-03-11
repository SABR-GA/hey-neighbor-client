
let apiUrl

// check if development 
if (window.location.hostname === 'localhost') {
  apiUrl = 'http://localhost:4000/' 
} else {
  apiUrl = 'https://vast-refuge-76491.herokuapp.com/'
}

// export api url
export default apiUrl