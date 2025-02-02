import React, { useState } from 'react';

const Modal = () => {
    const [show, setShowModal] = useState(false);

    const ShowModal = () => {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="bg-black rounded-2 text-center text-danger w-25 p-4">
                    <h1>Awais Khan</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque nobis nulla tempora! Iusto ipsam inventore, labore debitis neque tenetur praesentium iure corrupti nostrum blanditiis ea delectus dicta nobis? Autem?
                    </p>
                    <button className="rounded-2" onClick={() => setShowModal(false)}>
                        Close Modal
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div>
            <button className="rounded-2 m-1" onClick={() => setShowModal(true)}>
                Open Modal
            </button>
            {show && <ShowModal />}
        </div>
    );
};

export { Modal };