import {lol} from './basket.js'
import 'core-js/features/promise'

lol('sdsd');

(new Promise(function (resolve, reject) {
    setTimeout(resolve, 500)
})).then(() => {
    console.log('promise')
})
