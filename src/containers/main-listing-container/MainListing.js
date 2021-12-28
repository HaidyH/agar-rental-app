import React from "react";
import NewArrivalCard from "../../components/Cards/NewArrivalCard";
import NormalCard from "../../components/Cards/NormalCard";
import TopRatedCard from "../../components/Cards/TopRatedCard";
import { AllCars, MostPopular, NewArrival, TopRated } from "../../Data/Database";
import Styles from './MainListing.module.css'


export default function ListingContainer(props) {
    let cards;
    switch(props.type) {
        case 'all': 
            cards = AllCars.map(car => <NormalCard key={car.id} cardDetails={car}/>);
            break;
        case 'top_rated': 
            cards = TopRated.map(car => <TopRatedCard key={car.id} cardDetails={car} />);
            break;
        case 'new_arrival':
            cards = NewArrival.map(car => <NewArrivalCard key={car.id} cardDetails={car} />);
            break;
        case 'most_popular':
            cards = MostPopular.map(car => <NewArrivalCard key={car.id} cardDetails={car} />);
            break;
    }
    


    return <div className={`${Styles.listing_container}`}>
        
        <div className="text-center">
            <h1 className="mb-3">{props.title}</h1>
            <p>
                it's time to drive
            </p>
        </div>

        <div className="row mt-5">
            {cards}
        </div>
    </div>
}