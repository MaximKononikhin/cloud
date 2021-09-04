import { ReactNode } from "react";

let current: ReactNode | null;

export default class ModalService {
    static getModal = () => current;

    static modalDone = () => {
        const event = document.createEvent("Event");
        event.initEvent("closemodal", true, true);
        current = null;
        window.dispatchEvent(event);
    };

    static pushModal = (modal: ReactNode) => {
        const event = document.createEvent("Event");
        event.initEvent("openmodal", true, true);
        current = modal;
        window.dispatchEvent(event);
    };
}
