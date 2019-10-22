import { shallow } from 'enzyme'
import Header from '../Header'

 describe('Header', () => {
   const wrapper = shallow(<Header/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
