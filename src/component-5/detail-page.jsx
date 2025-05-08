import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardsData } from './cards-Data';

const DetailPage = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const numericId = Number(id);
        const product = CardsData.find((prod) => prod.id === numericId);
        setProductData(product);
    }, [id]);

    return (
        <div className='row'>
            <div className='col-6'>
                <h1>{productData?.paragraph ?? 'sami'}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
                    nesciunt accusantium eveniet quisquam porro maiores iusto quibusdam ratione
                    animi unde alias! Deserunt tempore ipsam, recusandae commodi id, maiores, amet
                    distinctio ut iusto cum labore eos. Facilis ea voluptate laudantium, aliquid iure
                    accusamus fugiat inventore. Accusantium obcaecati sunt soluta error ea. Eligendi
                    debitis reiciendis aspernatur quasi est eius laboriosam sunt soluta! Saepe doloribus
                    voluptate explicabo, iusto velit corporis beatae autem pariatur praesentium
                    necessitatibus aut nisi sapiente culpa laboriosam similique commodi deserunt aspernatur
                    eum sunt earum eos labore fugit? Odio illum at hic aperiam iure? Qui, nesciunt.
                    Modi eligendi distinctio possimus animi.
                </p>
            </div>
            <div className='col-6'>
                <img src={productData?.image} alt="Product" className='w-100 h-100' />
            </div>
        </div>
    );
};

export { DetailPage };
