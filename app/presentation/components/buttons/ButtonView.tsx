import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
// Importa tus propios componentes para que estén disponibles en el editor
import { vars } from '@buscacode/base-styles'
import { Button } from '@buscacode/buttons'

const githubDarkLiveTheme = {
  plain: {
    // Fondo alternativo para el editor, para que destaque un poco sobre el fondo principal de la página
    backgroundColor: vars.color.interfaceBackgroundAlt,
    // Texto principal claro para el código general
    color: vars.color.interfaceForeground,
    // Fuente monoespaciada, esencial para la edición de código
    fontFamily: 'monospace',
    fontSize: '14px',
    lineHeight: '1.5'
  },
  styles: [
    // Comentarios, signos de puntuación, y texto sutil
    {
      style: { color: vars.color.brandSecondary },
      types: [
        'comment',
        'prolog',
        'doctype',
        'cdata',
        'punctuation',
        'operator'
      ]
    },
    // Etiqueta HTML/JSX, constantes y variables eliminadas (rojo error)
    {
      style: { color: vars.color.statusError },
      types: ['tag', 'deleted', 'variable', 'constant', 'symbol']
    },
    // Strings, propiedades, URLs e insertados (verde éxito)
    {
      style: { color: vars.color.statusSuccess },
      types: ['string', 'property', 'url', 'inserted', 'atrule']
    },
    // Palabras clave, selectores, funciones y tipos (azul primario)
    {
      style: { color: vars.color.brandPrimary },
      types: [
        'keyword',
        'selector',
        'function',
        'class-name',
        'maybe-class-name'
      ]
    },
    // Atributos y advertencias (naranja warning)
    {
      style: { color: vars.color.statusWarning },
      types: ['attr-name', 'attr-value', 'changed']
    },
    // Números y booleanos (morado/fucsia, usando brandPrimarySoft por falta de morado específico)
    {
      style: { color: vars.color.brandPrimarySoft },
      types: ['number', 'boolean']
    },
    // Selectores de tipo (ej. <div>) y de clase
    {
      style: { color: vars.color.accentMain },
      types: ['selector-tag', 'selector-class']
    }
  ]
}
// const githubDarkLiveTheme = {
//   plain: {
//     // Usa tus colores de interfaz para el fondo y texto base del editor
//     color: '#c9d1d9', // interfaceForeground
//     backgroundColor: '#0d1117' // interfaceBackground
//   },
//   styles: [
//     {
//       style: { color: '#8b949e' }, // interfaceForegroundAlt para comentarios, etc.
//       types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation']
//     },
//     {
//       style: { color: '#f85149' }, // statusError (rojo) para literales/etiquetas
//       types: [
//         'tag',
//         'operator',
//         'number',
//         'boolean',
//         'variable',
//         'constant',
//         'symbol',
//         'deleted'
//       ]
//     },
//     {
//       style: { color: '#3fb950' }, // statusSuccess (verde) para strings/valores
//       types: ['string', 'property', 'url', 'inserted']
//     },
//     {
//       style: { color: '#58a6ff' }, // brandPrimary (azul) para palabras clave/tipos
//       types: ['keyword', 'selector', 'attr-name', 'function', 'class-name']
//     },
//     {
//       style: { color: '#d29922' }, // statusWarning (naranja) para atributos
//       types: ['attr-value', 'attr-name']
//     }
//   ]
// }

const ButtonView = () => (
  // El 'scope' es crucial: expone tus componentes al código que se escribe en el editor
  <LiveProvider
    code={`<Button>Hola Mundo</Button>`}
    scope={{ Button }}
    // Puedes necesitar un tema para que el editor se vea bien
    theme={githubDarkLiveTheme}
  >
    <div className="flex min-h-60 w-full items-center justify-center">
      <LivePreview
        style={{
          padding: '20px'
        }}
      />
    </div>

    {/* El editor de texto */}
    <LiveEditor
      style={{
        marginTop: '10px',
        fontFamily: 'monospace',
        fontSize: '14px',
        backgroundColor: 'white'
      }}
    />

    {/* El área donde aparecen los errores de compilación */}
    <LiveError
      style={{
        color: 'red',
        marginTop: '10px',
        padding: '10px',
        backgroundColor: '#fee'
      }}
    />
  </LiveProvider>
)

export default ButtonView
