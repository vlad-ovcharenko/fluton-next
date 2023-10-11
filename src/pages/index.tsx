import React, {useState} from 'react'
import {ValuesList} from '@/components/ValuesList'
import {SliderImages} from '@/components/SliderImages'
import {StarsRating} from '@/components/StarsRating'
import {DynamicPrice} from '@/components/DynamicPrice'

const Home: React.FC = () => {
  const images = [
    '/images/product/1.png',
    '/images/product/2.png',
    '/images/product/3.png',
    '/images/product/4.png',
  ]

  const sizesMan = [7, 8, 9, 10, 11, 12, 13, 14, 15]
  const sizesWoman = [5, 6, 7, 8, 9, 10, 11, 12]

  const [isGenderMen, setIsGenderMen] = useState(true)
  const [currentSize, setCurrentSize] = useState(10)
  const [isWidthStandard, setIsWidthStandard] = useState(true)
  const [prevWomanSize, setPrevWomanSize] = useState(7)
  const [prevManSize, setPrevManSize] = useState(10)

  const currentSizeGender = isGenderMen ? sizesMan : sizesWoman

  const toggleGender = () => {
    if (isGenderMen) {
      setPrevManSize(currentSize)
    } else {
      setPrevWomanSize(currentSize)
    }

    setIsGenderMen(!isGenderMen)
    setCurrentSize(isGenderMen ? prevWomanSize : prevManSize)
  }

  return (
    <main className="product gb-page-container">
      <div className="product__images">
        {images.map((img) => (
          <img src={img} alt="product" key={img} />
        ))}
      </div>
      <SliderImages images={images} />
      <div className="product__content">
        <h1 className="product__title">The Classic Insole</h1>
        <div className="product__reviews">
          <StarsRating value={5} />
          <a href="#">150 Reviews</a>
        </div>
        <DynamicPrice oldPrice={60} newPrice={48} />
        <p className="product__description">
          All day comfort and support unique to your body. Great for:
        </p>
        <ValuesList included={['Foot pain', 'Knee pain']} excluded={['Back pain', 'Alignment']} />
        <p className="product__label">Width:</p>
        <div className="product__bool-buttons">
          <button
            className={`product__btn gb-hover ${isWidthStandard ? 'product__btn--active' : ''}`}
            onClick={() => setIsWidthStandard(true)}
          >
            Standard
          </button>
          <button
            className={`product__btn gb-hover ${!isWidthStandard ? 'product__btn--active' : ''}`}
            onClick={() => setIsWidthStandard(false)}
          >
            Narrow
          </button>
        </div>
        <p className="product__label">Gender:</p>
        <div className="product__bool-buttons">
          <button
            className={`product__btn gb-hover ${isGenderMen ? 'product__btn--active' : ''}`}
            onClick={() => toggleGender()}
          >
            Man
          </button>
          <button
            className={`product__btn gb-hover ${!isGenderMen ? 'product__btn--active' : ''}`}
            onClick={() => toggleGender()}
          >
            Woman
          </button>
        </div>
        <p className="product__label product__label--help">
          <span>Size:</span>
          <a href="#">help me choose</a>
        </p>
        <div className="product__sizes">
          {currentSizeGender.map((size) => (
            <button
              className={`product__btn gb-hover ${
                size === currentSize ? 'product__btn--active' : ''
              }`}
              onClick={() => setCurrentSize(size)}
              key={size}
            >
              {size}
            </button>
          ))}
        </div>
        <button className="product__add gb-hover">
          <span>Add to Cart</span> $48
        </button>
        <div className="product__comfort">
          <img src="/images/values/book.png" alt="" />
          90-day comfort guarantee
        </div>
      </div>
    </main>
  )
}
export default Home
