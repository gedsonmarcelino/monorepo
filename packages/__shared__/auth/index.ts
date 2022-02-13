import axios from '@monorepo/axios-config'

import { AuthResponse } from './types'

export const login = async (username: string, password: string): Promise<string> => {
  try {
    const result = await axios.post<AuthResponse>('/auth/token', { username, password })
    return result.data.token
  } catch (error) {
    throw new Error("error-authentication");
  }
}