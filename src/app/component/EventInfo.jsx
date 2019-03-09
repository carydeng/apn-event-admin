import React from 'react';
import Button from '@material-ui/core/Button';

const EventInfo = ({eventUsers = [], onSave}) => {
    if (eventUsers.length === 0) return null;
    return (
        <Button variant="contained" color="primary" onClick={onSave}>{`Download CSV (${eventUsers.length} Check-ins)`}</Button>
    )
};

export default EventInfo;