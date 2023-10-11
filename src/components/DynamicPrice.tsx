import {FC} from 'react'

interface Props {
  newPrice: number
  oldPrice?: number
}

export const DynamicPrice: FC<Props> = ({oldPrice, newPrice}) => {
  const getPercent = () => {
    if (!oldPrice) return 0
    const saving = oldPrice - newPrice
    const savingPercent = (saving / oldPrice) * 100
    return savingPercent.toFixed(2)
  }

  return (
    <div className="price">
      <span className="price__new">{newPrice}$</span>
      {oldPrice && <span className="price__old">{oldPrice}$</span>}
      {oldPrice && <div className="price__off">{getPercent()}% OFF</div>}
    </div>
  )
}
