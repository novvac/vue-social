import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faMagnifyingGlass,
    faPhone,
    faSquarePlus
} from '@fortawesome/pro-light-svg-icons';

library.add([
    faMagnifyingGlass,
    faPhone,
    faSquarePlus,
])

export function initIcons(app) {
    app.component('v-icon', FontAwesomeIcon);
}