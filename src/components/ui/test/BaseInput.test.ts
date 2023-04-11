import { render } from '@testing-library/vue'
import BaseInput from '@/components/ui/BaseInput.vue'

describe('Компонент BaseInput', () => {
  it('структура соответствует снимку', () => {
    const wrapper = render(BaseInput, {
      props: {
        label: 'Поле',
        type: 'text',
        id: 'field',
        autocomplete: 'password',
        iconSrc: 'icons/key',
        showPassword: true
      }
    })

    expect(wrapper).toMatchSnapshot()
  })
})
