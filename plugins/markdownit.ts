import md from "markdown-it";
import "github-markdown-css";

export default defineNuxtPlugin(() => {
    const renderer = md({
        html: true,
    });
    return {
        provide: {
            mdRenderer: renderer,
        },
    };
});