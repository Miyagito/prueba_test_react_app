/**
 * Evalúa si un objeto dado está vacío (sin propiedades propias).
 *
 * Un objeto está considerado vacío si no tiene propiedades propias. Esto significa
 * que, para un objeto que se pase a esta función, se comprobará si la lista de
 * claves obtenida a partir de dicho objeto tiene una longitud de cero.
 *
 * @param {object} obj - El objeto a evaluar.
 * @returns {boolean} Verdadero (`true`) si el objeto está vacío, falso (`false`) si contiene al menos una propiedad.
 */
export function isObjectEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}
/**
 * Verifica si todas las preguntas han sido respondidas por el usuario.
 *
 * Dado un conjunto de preguntas y las respuestas del usuario, esta función
 * determina si el usuario ha proporcionado una respuesta para cada pregunta.
 * Se considera que una pregunta ha sido respondida si existe una clave correspondiente
 * a su ID en el objeto de respuestas del usuario.
 *
 * @param {Array<{ id: number }>} preguntas - Un array que contiene las preguntas, cada una representada por un objeto con al menos una propiedad `id`.
 * @param {Record<number, string>} respuestasUsuario - Un objeto que mapea los IDs de las preguntas (como claves) a las respuestas del usuario (como valores).
 * @returns {boolean} Verdadero (`true`) si todas las preguntas han sido respondidas, falso (`false`) si al menos una pregunta no tiene respuesta.
 */
export const areAllQuestionsAnswered = (
  preguntas: Array<{ id: number }>,
  respuestasUsuario: Record<number, string>
): boolean => {
  return preguntas.every((pregunta) =>
    respuestasUsuario.hasOwnProperty(pregunta.id)
  );
};
