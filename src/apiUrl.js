
let apiUrl

// check if development 
if (window.location.hostname === 'localhost') {
  apiUrl = 'http://localhost:4000/' 
} else {
  apiUrl = ''
}

// export api url
export default apiUrl