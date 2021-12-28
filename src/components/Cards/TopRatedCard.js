import Styles from './TopRatedCard.module.css';

const TopRatedCard = (props) => {
    return ( <div className='col-md-4 px-5'>
        <div className={`${Styles.product}`}>
            <div className={`${Styles.img_box}`}>
                <img src={`${props.cardDetails.car_image}`} />
            </div>

            <div className={`${Styles.content_box}`}>
                <h3>
                    {props.cardDetails.brand}
                </h3>
                <h1 className={`${Styles.price}`}>
                    $ {props.cardDetails.pricePerDay}
                </h1>
                <div className={`${Styles.action_box} text-center`}>
                    <button className={`${Styles.buy + ' ' + Styles.main_btn} mt-1`}>View More</button>
                </div>
            </div>
            
        </div>
        {/* .product
                    .img-box
                        img(src=product.imageUrl, alt="Product")
                    .content-box
                        h3 #{product.title}
                        h2.price $#{product.price}
                            //- small 99
                        .action-box.column
                            form(action="/add-to-cart", method="post") 
                                button(class="buy mt-1 main-btn") Add to cart
                                input(type="hidden", name="productID", value=product.id)
                            a(href=`/products/${product.id}`, class="buy mt-1") Details
                    span.brand-name #{product.brand} */}
    </div> );
}

export default TopRatedCard;