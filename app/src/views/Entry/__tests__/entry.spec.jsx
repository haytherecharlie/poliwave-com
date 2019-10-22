import { shallow } from 'enzyme'
import Entry from '../Entry'

 describe('Entry', () => {
   const wrapper = shallow(<Entry/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
