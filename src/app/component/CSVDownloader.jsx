import React, {Component} from 'react';
import {parse} from 'json2csv';

const _fetch = () => {
    const url = 'http://staging.api.hitalent.us/api/v1/events/4/event-users';
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
    pom.setAttribute('href', 'data:text/plain;charset=urf-8,'+encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
};

class CSVDownloader extends Component {
    state = {
        total: '-'
    };

    handleFetch = () => {
        _fetch()
            .then(json => {
                console.log(json);
                this.setState({total: json.length});
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
                const csv = parse(json, opts);
                _saveAs(csv, 'event-users.csv');
            })
    };

    render() {
        return (
            <div>
                <p>{`Total: ${this.state.total}`}</p>
                <p>↓↓↓Download1↓↓↓</p>
                <button onClick={this.handleFetch}>Download</button>
            </div>

        );
    }
}

export default CSVDownloader;