export default function destroy(e){
  const url = e.target.href
    console.log(url)
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        "X-CSRF-Token": document.querySelector("[name='csrf-token']").content
      }
    }).then(data => data.json())
      .then(post => console.log(post))
      // .then(post => document.querySelector('#post-content').innerHTML = post)
}