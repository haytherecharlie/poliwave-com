import { shallow } from 'enzyme'
import Footer from '../Footer'

 describe('Footer', () => {
   const wrapper = shallow(<Footer/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
