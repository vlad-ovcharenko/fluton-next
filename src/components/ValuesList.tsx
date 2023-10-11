import {FC} from 'react'

interface Props {
  included: string[]
  excluded?: string[]
}

export const ValuesList: FC<Props> = ({included, excluded}) => {
  return (
    <div className="values">
      <ul className="values__included">
        {included.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      {excluded && excluded.length > 0 && (
        <ul className="values__not-included">
          {excluded.map((str, index) => (
            <li key={index}>{str}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
