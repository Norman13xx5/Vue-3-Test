import { coreApi } from '@/api/coreApi'
import type { DataChangePassword, Respose } from './interfaces/authServices'

export async function changePassword(payload: DataChangePassword): Promise<Respose> {
  try {
    const response = await coreApi().post('resetpassword', payload)
    return {
      message: response.data.message,
      status: response.data.status
    }
  } catch (error: unknown) {
    return {
      message: 'Error al iniciar sesión, verifique sus credenciales',
      status: 500
    }
  }
}
