import React, {Component} from 'react';
import {parse} from 'json2csv';
import EventCodeForm from './EventCodeForm';
import EventInfo from './EventInfo';

const _get = (url) => {
    const config = {
        method: 'GET',
        headers: {}
    };
    return fetch(url, config)
        .then(response => response.json())
        .catch((err) => {throw err;});
};

const _saveAs = (text, filename) => {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=urf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
};

class CSVDownloader extends Component {
    state = {
        eventUsers: []
    };

    handleGetEvent = ({eventId}) => {
        const url = `https://api.hitalent.us/api/v1/events/${eventId}/event-users`;
        _get(url)
            .then(eventUsers => {
                this.setState(state => ({
                    ...state,
                    eventUsers
                }));
                console.log(eventUsers);
            })
    };

    handleSaveAsCSC = () => {
        const opts = {
            fields: [
                {label: 'First Name', value: 'firstName'},
                {label: 'Last Name', value: 'lastName'},
                {label: 'Full Name', value: 'fullName'},
                {label: 'Organization', value: 'company'},
                {label: 'Phone', value: 'phone'},
                {label: 'Email', value: 'email'},
                {label: 'LinkedIn', value: 'linkedIn'},
            ]
        };
        const csv = parse(this.state.eventUsers, opts);
        _saveAs(csv, 'event-users.csv');
    };

    render() {
        return (
            <div style={{padding: '0 16px'}}>
                <EventCodeForm onSubmit={this.handleGetEvent} />
                <br />
                <EventInfo eventUsers={this.state.eventUsers} onSave={this.handleSaveAsCSC} />
            </div>

        );
    }
}

export default CSVDownloader;