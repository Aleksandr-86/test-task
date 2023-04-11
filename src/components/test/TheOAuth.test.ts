import { render } from '@testing-library/vue'
import TheOAuth from '@/components/TheOAuth.vue'

describe('Компонент TheOAuth', () => {
  it('структура соответствует снимку', () => {
    const wrapper = render(TheOAuth, {})

    expect(wrapper).toMatchSnapshot()
  })
})
