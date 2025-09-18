import * as z from 'zod'
import { ru } from 'zod/locales'

function createZod() {
  return z.config(ru())
}

export default createZod
