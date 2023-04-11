import { render } from '@testing-library/vue'
import MySwitcher from '@/components/MySwitcher.vue'

describe('Компонент MySwitcher', () => {
  it('структура соответствует снимку', () => {
    const wrapper = render(MySwitcher, {})

    expect(wrapper).toMatchSnapshot()
  })
})
