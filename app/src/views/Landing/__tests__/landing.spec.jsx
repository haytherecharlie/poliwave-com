import { shallow } from 'enzyme'
import Landing from '../Landing'

 describe('Landing', () => {
   const wrapper = shallow(<Landing/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
