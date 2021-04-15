export default function index() {
  fetch('http://localhost:3000/posts/index.json')
      .then(response => response.json())
      .then(data => console.log(data))
}