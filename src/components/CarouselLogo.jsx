import l1 from './images/logo1.svg'
import l2 from './images/logo2.svg'
import l3 from './images/logo3.svg'
import l4 from './images/logo4.svg'
import l5 from './images/logo5.svg'
import l6 from './images/logo6.svg'

const CarouselLogo = () => {
  return (
    <div id="logoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner container mt-5">
            <div className="carousel-item active">
                <div className="d-flex justify-content-around">
                    <img src={l1} alt="Logo 1"/>
                    <img src={l2} alt="Logo 2"/>
                    <img src={l3} alt="Logo 3"/>
                    <img src={l5} alt="Logo 5"/>
                    <img src={l6} alt="Logo 6"/>
                </div>
            </div>
            <div className="carousel-item">
                <div className="d-flex justify-content-around">
                    <img src={l4} alt="Logo 4"/>
                    <img src={l5} alt="Logo 5"/>
                    <img src={l6} alt="Logo 6"/>
                    <img src={l2} alt="Logo 2"/>
                    <img src={l3} alt="Logo 3"/>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#logoCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#logoCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

  )
}

export default CarouselLogo;    