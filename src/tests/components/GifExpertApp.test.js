import { shallow } from 'enzyme';
import { GifExpertApp } from '../../components/GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
  test('Debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar una lista de categorías', () => {
    const categories = ['One Punch Man', 'Demon Slayer'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});