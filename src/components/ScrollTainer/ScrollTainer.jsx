import { useEffect } from "react";
import './ScrollTainer.css';
import camero from '../../images/cameroYellow.jpg'
import lambo from '../../images/lamboOrange.jpg'
import m4 from '../../images/m4Black.jpg'
import merc from '../../images/mercSLR.jpg'
import mustang from '../../images/mustangWhite.jpg'
import r8 from '../../images/r8Red.jpg'

export default function ScrollTainer() {
  useEffect(() => {
    const scrollTainer = document.getElementById('scrollTainer');
    const scrollTainerWidth = scrollTainer.scrollWidth;
    
    const scroll = () => {
        const first = document.querySelector('#scrollTainer *');
        if (!isElementInViewport(first)) {
            scrollTainer.appendChild(first);
            scrollTainer.scrollTo(scrollTainer.scrollLeft - first.offsetWidth, 0);
        }
        if (scrollTainer.scrollLeft !== scrollTainerWidth) {
            scrollTainer.scrollTo(scrollTainer.scrollLeft + 1, 0);
        } 
    };
    setInterval(scroll, 15);
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.right > 0;
    }
  }, [])

  return (
    <div id='scrollTainer'>
      <img height={200} src={camero} alt='Demo pic for ScrollTainer' />
      <img height={200} src={lambo} alt='Demo pic for ScrollTainer' />
      <img height={200} src={m4} alt='Demo pic for ScrollTainer' />
      <img height={200} src={merc} alt='Demo pic for ScrollTainer' />
      <img height={200} src={mustang} alt='Demo pic for ScrollTainer' />
      <img height={200} src={r8} alt='Demo pic for ScrollTainer' />
      <img height={200} src={camero} alt='Demo pic for ScrollTainer' />
      <img height={200} src={lambo} alt='Demo pic for ScrollTainer' />
      <img height={200} src={m4} alt='Demo pic for ScrollTainer' />
      <img height={200} src={merc} alt='Demo pic for ScrollTainer' />
      <img height={200} src={mustang} alt='Demo pic for ScrollTainer' />
      <img height={200} src={r8} alt='Demo pic for ScrollTainer' />
    </div>
  );
};
