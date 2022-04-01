import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
/* jest.mock finge la llamada a un archivo y controla la informacion que eso va
  a responder */
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
  const category = 'One Punch'
  test('Debe mostrarse correctamente', () => {
    /* mockReturnValue: cuando se llame la funcion useFetchGifs dentro del
      componente <GifGrid /> va a retornar el valor que le pasemos como parametro a mockReturnValue  */
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
    /* Un mock sirve para fingir. Por ejemplo, que el componente tiene informacion
      que trae de una API.
    */
    const gifs = [{
      id: 'ABC',
      title: 'Cualquier cosa',
      url: 'https://localhost/cualqueir/cosa.jpg',
    }];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
});