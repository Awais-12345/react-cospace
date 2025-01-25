import React from 'react'
import pexels from '../../images/pexels.png'
import Boy1 from '../../images/boy1.png'
import Boy2 from '../../images/boy2.png'
import clock from '../../images/clock.png'
import game from '../../images/game.png'
import snake from '../../images/snack.png'
const Contentone = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row d-flex gap-5">
                    <div className="col position-relative">
                        <img src={pexels} className="img-thumbnail W-100" alt="pexels" />
                        <img src={Boy1} className="img-thumbnail W-25 position-absolute top-50 start-0 translate-middle" alt="boy1" />
                        <img src={Boy2} className="img-thumbnail W-25 position-absolute top-50 end--10 translate-middle" alt="boy2" />
                    </div>
                    <div className="col">
                        <h2>Best creative working environments that suits your business.</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor
                            incididunt ut labore
                        </p>
                        <div className=" d-flex gap-3">
                            <img src={clock} className="img-thumbnail W-25 h-auto" alt="clock" />
                            <div className="together">
                                <h3>Open 24 hours</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</p>
                            </div>
                        </div>
                        <div className="d-flex gap-3">
                            <img src={game} className="img-thumbnail W-25 h-auto" alt="game" />
                            <div className="together">
                                <h3>Free Snack & Drink</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</p>
                            </div>
                        </div>
                         <div className="d-flex gap-3">
                        <img src={snake} className="img-thumbnail W-25 h-auto" alt="snake" />
                        <div className="together">
                            <h3>Enjoy Game Zone</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Contentone }
