/**
 * @copyright Betanovo Ltd. 2017-present
 * @author caixiaoyun
 */
'use strict'

import './css/style.css'
import print from './print'

console.log('[this is app]')

const bank = document.getElementsByClassName('bank')
bank[0].onclick = print

console.log('[jiangjiang]')