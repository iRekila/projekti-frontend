import '../App.css';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = 'http://localhost/verkkopalveluprojekti-backend/products/getcategories.php'



export default function Cards() {
    
const [categories, setCategories] = useState([]);

useEffect(getData, [])

function getData() {
    axios.get(URL)
    .then((response) => {
      setCategories(response.data);
    }).catch(error => {
      alert(error);
    });
};
  return (
        <>
        <h3>Categories</h3>
<div class="card-group">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">{ categories.map(category => (
      <li>{category.trnimi}</li>
    ))}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div>
</div>
</>
    )
}