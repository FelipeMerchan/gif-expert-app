import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {
  const setCategories = jest.fn(); /* Simula que es una funcion */
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks(); /* Limpia todos los mocks o simulaciones (click, change, etc) */
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola, mundo';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'One Punch Man';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));/* Evalue que se haya llamado con cualquier
    tipo de funcion en su parametro */
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});