import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © {currentYear}
          <span> ScrollTainer</span>
      </p>
    </footer>
  )
}