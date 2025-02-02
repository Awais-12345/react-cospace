import React from 'react'

const Contentsix = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col">
                        <h2>Subs to News Letter</h2>
                        <p className="sub_p1">
                            Generate Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="sub_flex">

                            <input className="p1" type="text" name="text" value="Email address..." />
                            <button className="p2" type="Subscribe">Subscribe</button><br />
                        </div>
                        <p className="sub_p2">
                            We’ll never share your emaill with anyone else.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Contentsix }
