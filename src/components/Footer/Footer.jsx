import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <hr style={{margin:'2rem 0 -1rem 0',}} />
    <footer>
      <p>Copyright © {currentYear}
          <span> ScrollTainer</span>
      </p>
    </footer>
    </>
  )
}