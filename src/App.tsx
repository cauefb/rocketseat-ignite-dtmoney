import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionOpen(true);
  }
  function handleCloseTransactionModal() {
    setIsNewTransactionOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
        <h2>cadastrar transacao</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
