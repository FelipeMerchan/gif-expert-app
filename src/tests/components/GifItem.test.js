import { shallow } from 'enzyme';
import { GifItem } from '../../components/GifItem';

describe('Pruebas en el <GifItem />', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifItem title={title} url={url}/>);
  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un parrafo con el titulo', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    /* .props() regresa un objeto con las propiedades del elemento */
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test('Debe tener la clase animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);

    /* Otra forma de hacer el test: */
    /* const className = 'animate__fadeIn';
    expect(div.props().className).toContain(className); */
  })
});