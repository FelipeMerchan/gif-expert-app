import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
  test('Debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Demon Slayer'));
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test('Debe retornar un arreglo de imágenes y el loading en false', async () => {
    /* waitForNextUpdate indica cuando sucede un cambio en el estado del custom hook.
    En este caso cuando se han obtenido los elementos del fetch y se actualizaron
    los datos del estado con estos elementos */
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Demon Slayer'));
    await waitForNextUpdate();
    /* En este punto ya se actualizó el estado con los datos
    de la API, por lo cual data contiene 10 elementos y loading es false */
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});