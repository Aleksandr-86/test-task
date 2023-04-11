import { render } from '@testing-library/vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'

describe('Компонент BaseCheckbox', () => {
  it('структура соответствует снимку', () => {
    const wrapper = render(BaseCheckbox, {
      props: {
        label: 'Кнопка',
        iconSrc: 'icons/key'
      }
    })

    expect(wrapper).toMatchSnapshot()
  })
})
