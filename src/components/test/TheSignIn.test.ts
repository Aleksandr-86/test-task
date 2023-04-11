import { render } from '@testing-library/vue'
import TheSignIn from '@/components/TheSignIn.vue'

describe('Компонент TheSignIn', () => {
  it('структура соответствует снимку', () => {
    const wrapper = render(TheSignIn, {})

    expect(wrapper).toMatchSnapshot()
  })
})
