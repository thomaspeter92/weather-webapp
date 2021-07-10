import React from 'react'
import styles from "../styles/modal.module.scss"

function Modal({close}) {
    return (
        <div className={styles.modal_container} onClick={close}>
            <div className={styles.modal_content}>
                <h3>No results</h3>
                <p>The city you entered does not exist, please try again.</p>
                <p>Click to close</p>
            </div>
        </div>
    )
}

export default Modal
