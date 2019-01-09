import React from 'react';
import { indexBreeds } from '../requests';
import ListItem from './ListItem';

export default class List extends React.Component {
    constructor(){
        super();
        this.state = {
            breeds: [],
        }
    }

    async componentDidMount() {
        const response = await indexBreeds();
        const { message } = response.data;
        const breeds = Object.keys(message).reduce(( array, breed ) => {
            const newBreeds = message[breed].length === 0 ? [ breed ] : message[breed].map(sub => `${sub} ${breed}`);
            return [...array, ...newBreeds];
        }, []);
        this.setState({breeds})
    }

    render(){
        const { breeds } = this.state;
        return breeds
            .sort()
            .map((breed, index) => <ListItem key={`breed-${index}`} breed={breed} />)
    }
}