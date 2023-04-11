import { render } from '@testing-library/vue'
import BaseButton from '@/components/ui/BaseButton.vue'

describe('Компонент BaseButton', () => {
  it('структура соответствует снимку', () => {
    const wrapper = render(BaseButton, {
      props: {
        modelValue: true,
        value: true,
        label: 'mockLabel'
      }
    })

    expect(wrapper).toMatchSnapshot()
  })
})
