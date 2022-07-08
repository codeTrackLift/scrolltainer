import React from 'react'
import lamboVert from '../../images/lamboGoldVert.jpg'

export default function Body() {
  return (
    <main>
      <div>
        <h3>ScrollTainer is Mobile Responsive</h3>
      </div>
      <section>
        <img
          src={lamboVert}
          height={200}
          alt='ScrollTainer Demo'
          style={{marginRight:'1rem'}}
        />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum fugit laudantium, ipsum minima recusandae quisquam nihil nisi maiores ullam porro magni quam facilis cumque cum architecto voluptatum quas placeat molestias explicabo saepe tenetur! Ipsum laborum architecto, voluptate quis porro quod. Doloribus atque consequatur neque maxime magnam nobis, suscipit debitis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni id quisquam alias? Eos doloribus quis dolorum! Nemo, corporis? Quo praesentium soluta corrupti. Ab, nesciunt. Esse rem architecto eum ab.
          </p>
        </div>
      </section>
    </main>
  )
}
