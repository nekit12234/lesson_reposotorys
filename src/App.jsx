
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const users = [
 {
  age: 15,
  name: 'Jhon',
  prof: 'programmer'
 }, {
  age: 19,
  name: 'Luigi',
  prof: 'hoster'
 }, {
  age: 115,
  name: 'Zeb',
  prof: 'bisnesman'
 }, {
  age: 39,
  name: 'Wloith',
  prof: 'krokodil'
 }, {
  age: 54,
  name: 'hirasima',
  prof: 'bomba'
 }, {
  age: 15,
  name: 'irina',
  prof: 'irinas'
 }, {
  age: 17,
  name: 'iluha',
  prof: 'menesy'
 }

  

 
]
 
 return(
<ul>
  {users.map((user)=>{
    return(
      <li>
  <span>{user.name}, {user.age}, {user.prof}</span>

  </li>
    )

  })}
  
</ul>
 )
 








}

export default App
