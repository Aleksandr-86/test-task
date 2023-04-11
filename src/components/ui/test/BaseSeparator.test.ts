import { render } from '@testing-library/vue'
import BaseSeparator from '@/components/ui/BaseSeparator.vue'

describe('Компонент BaseSeparator', () => {
  it('структура соответствует снимку', () => {
    const wrapper = render(BaseSeparator, {})

    expect(wrapper).toMatchSnapshot()
  })
})
