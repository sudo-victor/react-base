import { AxiosHttpClient } from '../../../infra/http/axios-http-client/axios-http-client'
import { settings } from '../../../shared/configs/settings'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const makeAxiosHttpClient = () => new AxiosHttpClient(settings.API_URL)
