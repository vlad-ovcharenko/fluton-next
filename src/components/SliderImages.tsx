import {FC, useEffect, useRef, useState} from 'react'

interface SliderProps {
  images: string[]
}

export const SliderImages: FC<SliderProps> = ({images}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0)

  useEffect(() => {
    console.log(sliderRef.current)
  }, [])

  const toggleSlide = (index: number) => {
    if (sliderRef.current) {
      const container = sliderRef.current.children[0] as HTMLElement
      const slideWidth = container.children[0].clientWidth
      const scroll = !index ? 0 : slideWidth * index + 10 * index // Assuming a 10px gap between slides
      container.scrollTo({
        left: scroll,
        behavior: 'smooth',
      })
    }
    setCurrentSliderIndex(index)
  }

  return (
    <div className="slider" ref={sliderRef}>
      <div className="slider__slides">
        {images.map((slide, index) => (
          <div className="slider__slide" key={slide} id={`slide-${index}`}>
            <img src={slide} alt="product" />
          </div>
        ))}
      </div>
      <div className="slider__nav">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => toggleSlide(index)}
            className={index === currentSliderIndex ? 'active' : ''}
          ></button>
        ))}
      </div>
    </div>
  )
}
