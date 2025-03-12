import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails, { Record } from '../item-details/item-details';
import Row from "../Row";
import ErrorBoundary from "../error-boundary";

import './people-page.css';
import SwapiService from "../../services/swapi-service";


export default class PeoplePage extends Component {
    swapiService = new SwapiService()

    state = {
        selectedItem: null,
    }



    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    };

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}>
                {i => `${i.name} (${i.birthYear})`}
            </ItemList>
        )

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />)

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundary>)
    }
}