//Funciones para preguntar por permisos, pedirlo si no lo tiene y que devuelven un booleano
import * as Permissions from 'expo-permissions'

//Lectura y escritura de memoria
async function hasReadWritePermission() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  return (status === 'granted')
}

//Acceso a la camara
async function hasCameraPermission() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA)
  return (status === 'granted')
}

//Acceso al microfono
async function hasMicrophonePermission() {
  const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
  return (status === 'granted')
}

export const hasReadWritePermissionFunction = hasReadWritePermission
export const hasCameraPermissionFunction = hasCameraPermission
export const hasMicrophonePermissionFunction = hasMicrophonePermission

export default { hasReadWritePermission, hasCameraPermission, hasMicrophonePermission }
