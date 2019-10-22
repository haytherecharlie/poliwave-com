import { shallow } from 'enzyme'
import EntriesList from '../EntriesList'

 describe('EntriesList', () => {
   const wrapper = shallow(<EntriesList/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
