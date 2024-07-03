import { render, screen } from '@testing-library/react'

import InterestListSection from '@/app/sections/InterestListSection'

describe('Interest list items', () => {
  it('Interest list item should be rendered', () => {
    render(<InterestListSection />)
    expect(screen.getByText('Diseño gráfico')).toBeInTheDocument()
  })

  it('Interest list item shouldn\'t be rendered', () => {
    render(<InterestListSection />)
    expect(screen.queryByText('Deportes')).not.toBeInTheDocument()
  })
})
