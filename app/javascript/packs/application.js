// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import index from '../src/index'
import show from '../src/show'
import destroy from '../src/destroy'
import _new from '../src/new'
import create from '../src/create'
import edit from '../src/edit'

index()

document.addEventListener('click', function(e) {
    e.preventDefault()
    
    if (e.target.matches('.post_show')) {
        show(e)
    }
    if (e.target.matches('.post_destroy')) {
        destroy(e)
    }
    if (e.target.matches('.post_new')) {
        _new()
    }
    if (e.target.matches('.post_edit')) {
        edit(e)
    }
})

document.addEventListener('submit', function(e) {
    e.preventDefault()

    if (e.target.matches('#post_create')) {
        create(e)
    }
})



