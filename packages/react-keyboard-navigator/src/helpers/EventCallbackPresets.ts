export const EventCallbackPresets = {
    preventDefault: (evt: KeyboardEvent) => {
        evt.preventDefault()
    },
    stopPropagation: (evt: KeyboardEvent) => {
        evt.stopPropagation()
    },
    stopImmediatePropagation: (evt: KeyboardEvent) => {
        evt.stopImmediatePropagation()
    },
    stopOnActiveInputElement: () => {
        if (document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement) {
            return false
        }
    },
    stopOnActiveInputElementAndPreventDefault: (evt: KeyboardEvent) => {
        if (document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement) {
            return false
        } else {
            evt.preventDefault()
        }
    },
}
