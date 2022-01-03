
const scrollIntoView = require("scroll-into-view");

class InteractionUtil {
    ScrollIntoView(element: HTMLElement) {
        scrollIntoView(element, {
            time: 500,
            align: {
                top: 0.5,
                left: 0,
                topOffset: 0,
                leftOffset: 0
            }
        });
    }
}

export default new InteractionUtil();