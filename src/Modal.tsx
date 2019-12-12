import React from 'react';
import { PortalConsumer, ThemeConsumer } from './Context';
import NotifyPortal from './NotifyPortal';

interface ModalProps {
    toggleModal: () => void;
}
const Modal: React.FC<ModalProps> = ({ toggleModal }) => (
    <>
        <PortalConsumer>
            {(isPortal) => (
                <div className="modal">
                    <div className="content">
                        <button onClick={toggleModal}>Close</button>
                        <div dangerouslySetInnerHTML={{ __html: isPortal ? 'Happy Modal with <strong>PORTAL</strong>' : 'This is what happens without <strong>PORTAL</strong>' }} />
                    </div>
                    <ThemeConsumer>
                        {(theme) => (
                            isPortal ?
                                <NotifyPortal>
                                    <img src="./200.gif" />
                                </NotifyPortal> : !isPortal && theme === 'light' ? <NotifyPortal>
                                    <img src="./oops.gif" />
                                </NotifyPortal> : !isPortal && theme === 'dark' ? <NotifyPortal>
                                    <img src="./giphy.gif" />
                                </NotifyPortal> : null
                        )}
                    </ThemeConsumer>
                </div>
            )}
        </PortalConsumer>
    </>
)

export default Modal