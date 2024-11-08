import { useState, useCallback } from 'react';

const useModal = () => {
    const [modals, setModals] = useState({});

    const openModal = useCallback((modalName) => {
        setModals((prevModals) => ({
            ...prevModals,
            [modalName]: true,
        }));
    }, []);

    const closeModal = useCallback((modalName) => {
        setModals((prevModals) => ({
            ...prevModals,
            [modalName]: false,
        }));
    }, []);

    const isModalOpen = useCallback((modalName) => {
        return !!modals[modalName];
    }, [modals]);

    return { openModal, closeModal, isModalOpen };
};

export default useModal;
