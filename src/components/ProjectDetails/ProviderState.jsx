import { useState } from 'react';

export function useProyectoRevisado(initialState) {
  const [proyectoRevisado, setProyectoRevisado] = useState(initialState);

  return [proyectoRevisado, setProyectoRevisado];
}
