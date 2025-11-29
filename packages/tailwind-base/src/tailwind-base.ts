// Asumiendo que 'basePluginConfig' es el nuevo nombre para la función que
// devuelve la configuración (lo que antes era 'variables').
import type { Config } from 'tailwindcss'
// ¡Nota! Ya NO se necesita 'tailwindcss/resolveConfig'

/**
 * Define la configuración por defecto.
 * Ahora usamos 'basePluginConfig()' directamente en 'plugins'.
 */
export const defaultConfig: Partial<Config> = {
  content: [],
  theme: {
    extend: {}
  }
  // Reemplaza 'variables()' con 'basePluginConfig()' o el nombre
  // que le hayas dado a la función en tu paquete.
}

/**
 * En v4, generalmente se EVITA la resolución síncrona (resolveConfig).
 * Si realmente necesitas acceder a la configuración resuelta (por ejemplo, para
 * usar los valores del tema en otro código JavaScript), la recomendación es
 * utilizar un enfoque que no dependa de 'resolveConfig'.
 * * Si solo la usabas para exportar la configuración, simplemente exporta 'defaultConfig'.
 */
export const computedDefaultConfig = defaultConfig
