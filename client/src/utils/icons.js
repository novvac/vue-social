import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faMagnifyingGlass,
    faPhone,
    faSquarePlus,
    faComment,
    faHeart,
    faShareNodes,
    faBookmark,
    faUserPlus
} from '@fortawesome/pro-light-svg-icons';

import {
    faEllipsisH
} from '@fortawesome/pro-regular-svg-icons';

library.add([
    faMagnifyingGlass,
    faPhone,
    faSquarePlus,
    faEllipsisH,
    faComment,
    faHeart,
    faShareNodes,
    faBookmark,
    faUserPlus
])

export function initIcons(app) {
    app.component('v-icon', FontAwesomeIcon);
}