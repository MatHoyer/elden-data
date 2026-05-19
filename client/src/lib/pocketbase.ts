import PocketBase, { type RecordModel } from 'pocketbase'
import type { Language } from '../types/language'

export interface UserRecord extends RecordModel {
  language?: Language
}

export const pb = new PocketBase(import.meta.env.VITE_PB_URL ?? '')
