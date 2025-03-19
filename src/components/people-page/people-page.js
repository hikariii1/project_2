import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import Row from "../Row";
import ErrorBoundary from "../error-boundary";
import './people-page.css';
import SwapiService from "../../services/swapi-service";
import ItemDetails, { Record } from '../item-details/item-details';


export default class PeoplePage extends Component {
    swapiService = new SwapiService()

    state = {
        selectedItem: null,
    }



    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    };

    render() {
        const {
            getPerson,
            getAllPeople,
            getStarship,
            getPlanet,
            getPersonImage,
            getStarshipImage,
            getPlanetImage } = this.swapiService

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected} getData={getAllPeople}>
                {i => `${i.name} (${i.birthYear})`}
            </ItemList>
        )

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getData={getPlanet}
                getImageUrl={getPlanetImage}>

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        )
        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundary>)
    }
}