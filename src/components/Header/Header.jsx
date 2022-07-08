import React from 'react'
import './Header.css'
import m2Vert from '../../images/m2BlueVert.jpg'

export default function Header() {
  return (
    <header>
      <div id='top'>
        <h2>ScrollTainer</h2>
      </div>
      <div>
        <h1>Renders Images in a Horizontal Scrolling Container</h1>
      </div>
      <section>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum fugit laudantium, ipsum minima recusandae quisquam nihil nisi maiores ullam porro magni quam facilis cumque cum architecto voluptatum quas placeat molestias explicabo saepe tenetur! Ipsum laborum architecto, voluptate quis porro quod. Doloribus atque consequatur neque maxime magnam nobis, suscipit debitis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni id quisquam alias? Eos doloribus quis dolorum! Nemo, corporis? Quo praesentium soluta corrupti. Ab, nesciunt. Esse rem architecto eum ab.
          </p>
        </div>
        <img 
          src={m2Vert}
          height={200}
          alt='ScrollTainer Demo'
          style={{marginLeft:'1rem'}}
        />
      </section>
    </header>
  )
}
