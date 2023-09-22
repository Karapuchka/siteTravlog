import { useState, createContext } from "react";

export const ModalContext = createContext('null');

export const ModalContextProvider = ({children})=>{

    const [modalOpen, setModalOpen] = useState(false);

    return <ModalContext.Provider value={[modalOpen, setModalOpen]}>{children}</ModalContext.Provider>
}