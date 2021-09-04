import React, { ReactNode, useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";

import ModalService from "../../../common/services/ModalService";

const ModalProvider = () => {
    const [currentModal, setCurrentModal] = useState<ReactNode>(null);
    const location = useLocation();

    const handleOpenModal = () => setCurrentModal(ModalService.getModal());
    const handleCloseModal = () => setCurrentModal(null);

    useEffect(() => {
        window.addEventListener("openmodal", handleOpenModal);
        window.addEventListener("closemodal", handleCloseModal);

        return () => {
            window.removeEventListener("openmodal", handleOpenModal);
            window.removeEventListener("closemodal", handleCloseModal);
        };
    }, []);

    useEffect(() => {
        if (currentModal) {
            ModalService.modalDone();
        }
    }, [location.pathname]);

    return <>{currentModal}</>;
};

export default ModalProvider;
