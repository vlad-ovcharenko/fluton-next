import {useState, useEffect, FC} from 'react'
interface Props {
  value: number
  disabled?: boolean
}

export const StarsRating: FC<Props> = ({value, disabled}) => {
  const maxRating = 5
  const [valueDynamic, setValue] = useState(value)
  const [tempValue, setTempValue] = useState<number | null>(null)

  useEffect(() => {
    setValue(value)
  }, [value])

  const getSelectedStatus = (rating: number) => {
    if (tempValue !== null) {
      return tempValue >= rating
    }
    return valueDynamic >= rating
  }

  const setRating = (rating: number) => {
    if (!disabled) {
      setValue(rating)
    }
  }

  const starOver = (rating: number) => {
    if (!disabled) {
      setTempValue(rating)
    }
  }

  const starOut = () => {
    if (!disabled) {
      setTempValue(null)
    }
  }

  return (
    <div className="stars">
      {Array.from({length: maxRating}, (_, index) => index + 1).map((rating) => (
        <label
          key={rating}
          className={`stars__star ${getSelectedStatus(rating) ? 'stars__star--selected' : ''} ${
            disabled ? 'stars__star--disabled' : ''
          }`}
          onClick={() => setRating(rating)}
          onMouseOver={() => starOver(rating)}
          onMouseOut={starOut}
        >
          <input className="stars__checkbox" type="radio" value={rating} disabled={disabled} />★
        </label>
      ))}
    </div>
  )
}
