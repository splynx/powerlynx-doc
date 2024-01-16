import DefaultTheme from "vitepress/theme";
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import "./custom.css";

export default {
    ...DefaultTheme,
    setup() {
        const route = useRoute();
        const initZoom = () => {
            new mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)', margin: 40 });
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    },
};