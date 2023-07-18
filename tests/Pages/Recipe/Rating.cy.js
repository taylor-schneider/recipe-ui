import React from 'react'
import Rating from './Rating'

describe('<Rating />', () => {
  it('renders', () => {

    const recipe_json = {
      "rating": "5",
      "reviews": [
        {
            "author": "@Jim",
            "comment": "It was dank!",
            "rating": 4.5
        }
      ],
    }
    const rating = Rating(recipe_json)
    cy.mount(rating)

    const compare_config = {
      capture: 'fullPage',
      errorThreshold: 0.0
    }
    cy.get('.Rating').compareSnapshot('foobar',  compare_config)
  })
})