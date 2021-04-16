import {createForm} from './new'
export default function edit(e){ //Editar el formulario y unirlo con el fomulario de creación!
  fetch(e.target.href,{
    method: 'GET', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "X-CSRF-Token": document.querySelector("[name='csrf-token']").content
    }
  }).then(data => data.json()) 
    .then(post => {
      const form = createForm({
        method: 'PUT',
        action: `/post/${post.id}`,
        id: 'post_edit'
      }, post)
      document.querySelector('#post-content').innerHTML = form
  })
}