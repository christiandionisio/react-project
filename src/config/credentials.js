import Cookies from 'js-cookie'
import { TOKEN_NAME } from '../utils/contansts'


export const getToken = () => Cookies.get(TOKEN_NAME)