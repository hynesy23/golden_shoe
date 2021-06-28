import React from 'react';
import {RiCloseFill} from 'react-icons/ri';

import {handleSuccessModal} from '../utils/index'

export const SuccessModal = () => {
    return (
        <>
        <div id="success-modal" data-open="false">
            <div className="success-modal-inner">
                <div>ITEM SUCCESSFULLY ADDED</div>
                <div className="icon" onClick={handleSuccessModal}><RiCloseFill /></div>
            </div>
        </div>
        </>
    )
}
