export const add = (
  key: string,
  value: any,
): Promise<any> => new Promise<void>((resolve, reject) => {
  try {
    localStorage.setItem(key, value)
    resolve()
  } catch (e) {
    reject(e)
  }
})

export const get = (key: string): string | null => localStorage.getItem(key)

export const remove = (key: string): void => localStorage.removeItem(key)

export const clear = (): void => localStorage.clear()
