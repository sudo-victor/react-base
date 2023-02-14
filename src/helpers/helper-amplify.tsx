/* eslint prefer-promise-reject-errors: 0 */
/* eslint no-async-promise-executor: 0 */
import { Auth } from 'aws-amplify'
import * as LocalStorage from './helper-storage'

class HelperAmplify {
  static async signIn(username:any, password:any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        await LocalStorage.clear() // limpar storage para nao ficar lixo
        const res = await Auth.signIn({ username, password })
        await LocalStorage.set('connected', JSON.stringify(true))
        resolve(res)
      } catch (error) {
        // console.error('ERROR', error)
        await this.signOut()
        reject(error)
      }
    })
  }

  static async getCurrentToken(): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.currentSession()
        .then(async (res) => {
          if (res.isValid()) {
            resolve(res.getIdToken().getJwtToken())
          } else {
            reject(false)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  static async isAuth(): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.currentSession()
        .then(async (res) => {
          if (res.isValid()) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  static async signOut(): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.signOut()
        .then(async (res) => {
          await LocalStorage.remove('connected')
          resolve(res)
        })
        .catch(async (error) => {
          await LocalStorage.remove('connected')
          reject(error)
        })
    })
  }

  static async forgotPassword(email:any): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.forgotPassword(email)
        .then(async (res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  static async recoveryPassword(email:any, code:any, password:any): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.forgotPasswordSubmit(email, code, password)
        .then(async (res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default HelperAmplify
