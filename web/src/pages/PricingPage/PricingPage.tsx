import React, { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import Intro from 'src/components/Intro/Intro'

const plans = [
  {
    name: 'Basic',
    description:
      'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
    monthly: '$19.00',
    yearly: '$190.00',
    featured: false,
  },
  {
    name: 'Pro',
    description:
      'More advanced features available. Recommended for photography veterans and professionals.',
    monthly: '$39.00',
    yearly: '$390.00',
    featured: true,
  },
  {
    name: 'Business',
    description:
      'Additional features available such as more detailed metrics. Recommended for business owners.',
    monthly: '$99.00',
    yearly: '$990.00',
    featured: false,
  },
]

const features = [
  {
    name: 'Unlimited Story Posting',
    basic: true,
    pro: true,
    business: true,
  },
  {
    name: 'Unlimited Photo Upload',
    basic: true,
    pro: true,
    business: true,
  },
  {
    name: 'Embedding Custom Content',
    basic: false,
    pro: true,
    business: true,
  },
  {
    name: 'Customize Metadata',
    basic: false,
    pro: true,
    business: true,
  },
  {
    name: 'Advanced Metrics',
    basic: false,
    pro: false,
    business: true,
  },
  {
    name: 'Photo Downloads',
    basic: false,
    pro: false,
    business: true,
  },
  {
    name: 'Search Engine',
    basic: false,
    pro: false,
    business: true,
  },
  {
    name: 'Custom Analytics',
    basic: false,
    pro: false,
    business: true,
  },
]

function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  )

  const isYearly = billingCycle === 'yearly'

  return (
    <>
      <MetaTags title="Pricing" description="Pricing page" />

      <Intro
        title="Pricing"
        description="Create your stories. Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
      />

      <section className="pricing">
        <div className="pricing-inner">
          <div className="billing-toggle" aria-label="Billing cycle selector">
            <p className={!isYearly ? 'active' : ''}>Monthly</p>

            <button
              type="button"
              className={`toggle-btn ${isYearly ? 'active' : ''}`}
              aria-label="Toggle yearly billing"
              aria-pressed={isYearly}
              onClick={() =>
                setBillingCycle((current) =>
                  current === 'monthly' ? 'yearly' : 'monthly'
                )
              }
            >
              <span className="inner-circle" />
            </button>

            <p className={isYearly ? 'active' : ''}>Yearly</p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`price-card ${
                  plan.featured ? 'black-price-card' : ''
                }`}
              >
                <div className="price-card__content">
                  <h2 className="price-card__name">{plan.name}</h2>

                  <p className="price-card__description">{plan.description}</p>
                </div>

                <div className="price-card__cost">
                  <p className="price-card__price">
                    {isYearly ? plan.yearly : plan.monthly}
                  </p>

                  <p className="price-card__billing">
                    per {isYearly ? 'year' : 'month'}
                  </p>
                </div>

                <div className="card-button-div">
                  <button
                    type="button"
                    className={`card-button ${
                      plan.featured ? 'card-white-button' : ''
                    }`}
                  >
                    Pick Plan
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="compare">
        <div className="compare-outer">
          <h1>Compare</h1>

          <div className="compare-table">
            <div className="table-row">
              <div className="col-desc table-col">The Features</div>
              <div className="table-col">Basic</div>
              <div className="table-col">Pro</div>
              <div className="table-col">Business</div>
            </div>

            {features.map((feature) => (
              <div className="table-row" key={feature.name}>
                <div className="col-desc table-col">{feature.name}</div>
                <div
                  className={`table-col ${feature.basic ? 'checked' : ''}`}
                />
                <div className={`table-col ${feature.pro ? 'checked' : ''}`} />
                <div
                  className={`table-col ${feature.business ? 'checked' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
