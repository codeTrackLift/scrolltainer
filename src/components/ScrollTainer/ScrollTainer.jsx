import { useEffect } from "react";
import './ScrollTainer.css';
import cameroRed from '../../images/cameroRed.jpg'
import cameroYellow from '../../images/cameroYellow.jpg'
import cobraGray from '../../images/cobraGray.jpg'
import lamboOrange from '../../images/lamboOrange.jpg'
import lamboWhite from '../../images/lamboWhite.jpg'
import m4Black from '../../images/m4Black.jpg'
import mercSLR from '../../images/mercSLR.jpg'
import mustangWhite from '../../images/mustangWhite.jpg'
import r8Fall from '../../images/r8Fall.jpg'
import r8Track from '../../images/r8Track.jpg'
import r8Red from '../../images/r8Red.jpg'

const imageArray = [
  cameroRed,
  cameroYellow,
  cobraGray,
  lamboOrange,
  lamboWhite,
  m4Black,
  mercSLR,
  mustangWhite,
  r8Fall,
  r8Red,
  r8Track,
]

const renderImages = ({height}) => {
  const images = imageArray.map((image, i) => {
    return <img src={image} alt='ScrollTainer demo' height={height} key={i} />
  })
  return (
    <>
      {images}
    </>
  )
}

const isElementInViewport = (e) => {
  const rect = e.getBoundingClientRect();
  return rect.right > 0;
}

export default function ScrollTainer({height}) {
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
  }, [])

  return (
    <div id='scrollTainer'>
      {renderImages({height})}
    </div>
  );
};
