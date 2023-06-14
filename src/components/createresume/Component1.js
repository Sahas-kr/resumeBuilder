import React from 'react'
import styles from './Body.module.css'

function Component1() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    return (
        <div className={styles.container}>
            <p className={styles.heading}>Resume Builder</p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {
                        colors.map((item) =>
                            <span key={item}
                                style={{ backgroundColor: item }} className={styles.color} />)
                    }
                </div>
                <button className='btn rounded-pill'>Download <i class="fa-solid fa-circle-down fa-bounce"></i></button>
            </div>
        </div>
    )
}

export default Component1