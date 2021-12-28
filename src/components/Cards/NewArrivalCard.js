import Styles from './NewArrivalCard.module.css'

const NewArrivalCard = (props) => {
    return ( <>
        <div className="col-md-4">
            <div className={`${Styles.card_mine}`}>
                <img src={ props.cardDetails.car_image } />
                <div className={`${Styles.overlay}`}>
                    <h4>{props.cardDetails.pricePerDay} LE per day</h4>
                    <div className="d-flex">
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            | {props.cardDetails.rent_times} Rents
                        </span>
                        <br />
                        <button>More Details <i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </> );
}

export default NewArrivalCard;