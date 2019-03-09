import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const defaultOnSubmit = () => console.warn('No onSubmit is passed.');

class EventCodeForm extends Component {

    handleSubmit = (e) => {
        const {onSubmit = defaultOnSubmit} = this.props;
        e.preventDefault();
        const eventCode = e.target['eventCode'].value;
        let eventId = '';
        try {
            eventId = parseInt(atob(eventCode));
            if (isNaN(eventId)) {
                alert('Wrong code.');
                return;
            }
        }
        catch {
            alert('Wrong code.');
            return;
        }

        onSubmit({eventId});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container spacing={16} alignItems="flex-end">
                    <Grid item xs={12} sm={9}>
                        <TextField fullWidth type="text" name="eventCode" placeholder="Enter your code" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button fullWidth variant="outlined" type="submit">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default EventCodeForm;