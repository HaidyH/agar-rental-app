import React from "react";
import Logo from "../../components/Logo/Logo";
import ListingContainer from "../main-listing-container/MainListing";
import Styles from "./MainLayout.module.css";
import {
    Switch,
    Route
} from "react-router-dom";
function MainLayout() {
    return (
        <>
            <main className={`${Styles.main_container} d-flex justify-content-between`}>
                <Logo />
                <form action="#" className={`${Styles.search}`}>
                    <input type="text" className={`${Styles.search__input}`} placeholder="Search Hotels" />
                    <button className={`${Styles.search__button}`}>
                        <span className={`${Styles.search__icon}`}>
                            <i class="fas fa-search"></i>
                        </span>
                    </button>
                </form>
                <div className={`${Styles.right_box}`}>

                </div>
            </main>
            <Switch>
                <Route path="/top_rated">
                    <ListingContainer title={'top rated'} type={'top_rated'} />
                </Route>
                <Route path="/new_arrival">
                    <ListingContainer title={'new arrival'} type={'new_arrival'} />
                </Route>
                <Route path="/most_popular">
                    <ListingContainer title={'Most Popular'} type={'most_popular'} />
                </Route>
                <Route path="/" exact>
                    <ListingContainer title={'All Cars'} type={'all'} />
                </Route>
            </Switch>

        </>
    )    
}

export default MainLayout;

