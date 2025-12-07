import { createTheme } from '@vanilla-extract/css'
import { vars } from './contract.css'
import type { ThemeBase } from './types'

export const christmasLightValues: ThemeBase = {
  color: {
    // Marca: Rojo y Verde vibrantes de Navidad
    brandPrimary: '#E31B23', // Rojo Navidad vivo
    brandPrimarySoft: '#FAE5E6', // Rojo muy pálido para fondos suaves
    brandPrimaryDark: '#B0151A', // Rojo oscuro para hover/active

    brandSecondary: '#008000', // Verde Pino estándar
    brandSecondarySoft: '#D9F2D9', // Verde muy pálido
    brandSecondaryDark: '#006600', // Verde pino oscuro

    // Interfaz (Mayormente blanco/grises claros)
    interfaceBackground: '#FFFFFF', // Fondo blanco puro
    interfaceBackgroundAlt: '#F7F7F7', // Gris muy claro para tarjetas
    interfaceForeground: '#272822', // Texto principal (Casi negro Monokai)
    interfaceForegroundAlt: '#75715e', // Texto sutil/comentarios Monokai

    // Acento principal (El Dorado/Amarillo Monokai)
    accentMain: '#E6DB74', // Amarillo dorado vibrante
    accentMainSoft: '#FFFDEB', // Amarillo muy pálido
    accentMainDark: '#D4C94E', // Dorado más oscuro

    // Estados
    statusSuccess: '#38c172',
    statusError: '#E31B23', // Usa el rojo de marca para errores
    statusWarning: '#FD971F', // Naranja Monokai para advertencias
    statusInfo: '#66D9EF' // Cian Monokai para información
  }
}

export const christmasDarkValues: ThemeBase = {
  color: {
    // Marca: Ajusta los colores para que resalten sobre fondo oscuro
    brandPrimary: '#FF4136', // Rojo vivo
    brandPrimarySoft: '#501515', // Fondo suave oscuro
    brandPrimaryDark: '#E31B23', // Rojo estándar

    brandSecondary: '#2ECC40', // Verde brillante
    brandSecondarySoft: '#104010', // Fondo suave oscuro
    brandSecondaryDark: '#008000', // Verde estándar

    // Interfaz (Fondo oscuro Monokai)
    interfaceBackground: '#272822', // Fondo principal Monokai
    interfaceBackgroundAlt: '#3e3d32', // Fondo alternativo/tarjetas
    interfaceForeground: '#f8f8f2', // Texto principal (Blanco apagado Monokai)
    interfaceForegroundAlt: '#75715e', // Texto sutil/comentarios Monokai

    // Acento principal (El Dorado/Amarillo Monokai)
    accentMain: '#E6DB74', // Amarillo dorado vibrante
    accentMainSoft: '#5a552d', // Amarillo oscuro suave
    accentMainDark: '#F0E68C', // Dorado claro

    // Estados (Colores Monokai puros)
    statusSuccess: '#A6E22E', // Verde Monokai
    statusError: '#F92672', // Rosa Monokai para errores
    statusWarning: '#FD971F', // Naranja Monokai para advertencias
    statusInfo: '#66D9EF' // Cian Monokai para información
  }
}

export const githubLightValues: ThemeBase = {
  color: {
    // Marca: El icónico azul de GitHub
    brandPrimary: '#0969da', // GitHub Blue (botones, enlaces)
    brandPrimarySoft: '#eff6ff', // Azul muy claro (fondos sutiles)
    brandPrimaryDark: '#0544ab', // Azul oscuro (hover/active)

    brandSecondary: '#57606a', // Gris medio para elementos secundarios
    brandSecondarySoft: '#f6f8fa', // Gris claro de fondo alternativo
    brandSecondaryDark: '#424853', // Gris oscuro

    // Interfaz (Mayormente blanco y grises claros)
    interfaceBackground: '#ffffff', // Fondo blanco puro
    interfaceBackgroundAlt: '#f6f8fa', // Gris muy claro para tarjetas/código
    interfaceForeground: '#24292f', // Texto principal (Casi negro)
    interfaceForegroundAlt: '#57606a', // Texto sutil/secundario

    // Acento principal (El azul principal, para consistencia)
    accentMain: '#0969da',
    accentMainSoft: '#eff6ff',
    accentMainDark: '#0544ab',

    // Estados
    statusSuccess: '#1a7f37', // Verde para éxito/merged
    statusError: '#cf222e', // Rojo para errores/closed
    statusWarning: '#9a6700', // Naranja para advertencias
    statusInfo: '#0969da' // Azul para información
  }
}

export const githubDarkValues: ThemeBase = {
  color: {
    // Marca: El azul se aclara un poco para contraste en oscuro
    brandPrimary: '#58a6ff', // Azul de GitHub en dark mode
    brandPrimarySoft: '#1f6fdf', // Tono medio/fondo suave
    brandPrimaryDark: '#388bfd', // Azul estándar para hover

    brandSecondary: '#8b949e', // Gris medio en dark mode
    brandSecondarySoft: '#21262d', // Tono de fondo suave
    brandSecondaryDark: '#484f58', // Gris más oscuro

    // Interfaz (Fondos oscuros)
    interfaceBackground: '#0d1117', // Fondo principal (casi negro)
    interfaceBackgroundAlt: '#161b22', // Fondo alternativo/tarjetas
    interfaceForeground: '#c9d1d9', // Texto principal claro
    interfaceForegroundAlt: '#8b949e', // Texto sutil/secundario

    // Acento principal
    accentMain: '#58a6ff',
    accentMainSoft: '#1f6fdf',
    accentMainDark: '#388bfd',

    // Estados
    statusSuccess: '#3fb950', // Verde éxito
    statusError: '#f85149', // Rojo error
    statusWarning: '#d29922', // Naranja advertencia
    statusInfo: '#58a6ff' // Azul información
  }
}

// --- TEMA CLARO (Light Theme) ---
export const christmasLightTheme = createTheme(vars, christmasLightValues)

// --- TEMA OSCURO (Dark Theme - Estilo Monokai puro) ---
export const christmasDarkTheme = createTheme(vars, christmasDarkValues)

// --- TEMA CLARO (GitHub Light Theme) ---
export const githubLightTheme = createTheme(vars, githubLightValues)

// --- TEMA OSCURO (GitHub Dark Theme) ---
export const githubDarkTheme = createTheme(vars, githubDarkValues)
