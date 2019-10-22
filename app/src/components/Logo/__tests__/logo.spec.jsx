import { shallow } from 'enzyme'
import Logo from '../Logo'

 describe('Logo', () => {
   const wrapper = shallow(<Logo/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
