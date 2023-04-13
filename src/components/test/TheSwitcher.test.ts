import { render } from '@testing-library/vue'
import TheSwitcher from '@/components/TheSwitcher.vue'

describe('Компонент TheSwitcher', () => {
  it('структура соответствует снимку', () => {
    const wrapper = render(TheSwitcher, {})

    expect(wrapper).toMatchSnapshot()
  })
})
