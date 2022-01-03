
declare const renderMathInElement: any;

const KATEX_FONT_SIZE = 25;

class KatexUtil {

    private resizeDynamicElements() {
        const dynamicElements: HTMLElement[] = document.getElementsByClassName("dynamic") as any;
        if (!dynamicElements) {
            return;
        }

        for (let i = 0; i < dynamicElements.length; i += 1) {
            const containerWidth = dynamicElements[i].offsetWidth;

            const mathElements: HTMLElement[] = dynamicElements[i].getElementsByClassName("katex") as any;
            if (!mathElements) { continue; }
            for (let h = 0; h < mathElements.length; h += 1) {
                const katex = mathElements[h];
                const expressionWidth = katex.offsetWidth;

                if (expressionWidth < 2 || containerWidth < 2) {
                    /* It hasn't rendered yet, so try agin later */
                    setTimeout(this.resizeDynamicElements, 50);
                    return;
                }

                if (expressionWidth > containerWidth && containerWidth > 0) {
                    katex.style.fontSize = Math.floor(KATEX_FONT_SIZE * containerWidth / expressionWidth) + "px";
                }
            }
        }
    }

    RequestRender() {
        if (!!(window as any)["renderMathInElement"]) {
            renderMathInElement(document.body,
                {
                    delimiters: [
                        { left: "$$", right: "$$", display: true },
                        { left: "$", right: "$", display: false }
                    ]
                });
        }

        this.resizeDynamicElements();
    }
}

export default new KatexUtil();