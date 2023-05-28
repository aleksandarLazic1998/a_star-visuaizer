import React from 'react'
import ReactModal from 'react-modal'
import { useGlobalState, useSetGlobalState } from '../../hooks/reduxStoreHooks'
import customModalStyles from './customModalStyles'
import ModalComponents from './ModalComponents'
import { setModalComponent } from '../../store/AppSlice/AppSlice'

import './Modal.scss'
import useOnClickOutside from '../../hooks/useOnClickOutside'

function Modal() {
    const dispatch = useSetGlobalState()
    const { modal } = useGlobalState((state) => state.app)
    const isModalOpen = modal !== ''

    const { containerRef } = useOnClickOutside<HTMLDivElement>(() => {
        dispatch(setModalComponent(''))
    })
    return (
        <ReactModal
            data-testId="modal"
            ariaHideApp={false}
            isOpen={isModalOpen}
            shouldCloseOnOverlayClick
            style={customModalStyles}
        >
            <div className="modal" ref={containerRef}>
                <button
                    type="button"
                    onClick={() => dispatch(setModalComponent(''))}
                >
                    X
                </button>

                {ModalComponents[modal]}
            </div>
        </ReactModal>
    )
}
export default Modal
