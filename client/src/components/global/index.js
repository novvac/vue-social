import Button from './Button.vue';
import Card from './Card.vue';
import Col from './Col.vue';
import Container from './Container.vue';
import Input from './Input.vue';
import Row from './Row.vue';
import Text from './Text.vue';

export function initGlobalComponents(app) {
    app.component("v-btn", Button);
    app.component("v-card", Card);
    app.component("v-col", Col);
    app.component("v-container", Container);
    app.component("v-input", Input);
    app.component("v-row", Row);
    app.component("v-text", Text);
}