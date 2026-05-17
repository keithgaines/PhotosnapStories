import React from 'react'

interface PricecardProps {
  title: string
  description: string
  monthlyPrice: string
  yearlyPrice: string
  isYearly?: boolean
  isFeatured?: boolean
}

const Pricecard: React.FC<PricecardProps> = ({
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  isYearly = false,
  isFeatured = false,
}) => {
  const displayPrice = isYearly ? yearlyPrice : monthlyPrice
  const billingLabel = isYearly ? 'per year' : 'per month'

  return (
    <article className={`price-card ${isFeatured ? 'black-price-card' : ''}`}>
      <div className="flow">
        <h2>{title}</h2>

        <p className="price-card__description">{description}</p>
      </div>

      <div className="flow">
        <p className="price-card__price">{displayPrice}</p>

        <p className="price-card__billing">{billingLabel}</p>
      </div>

      <div className="card-button-div">
        <button className="card-button">Pick Plan</button>
      </div>
    </article>
  )
}

export default Pricecard
