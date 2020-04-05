import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AppButton = ({label, isLoading}) => {
    if (isLoading) {
        return (
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        );
    }

    return (
        <Button variant="primary" type="submit" block>{label}</Button>
    );
}

AppButton.propTypes = {
    label: PropTypes.string.isRequired,
    isLoading: PropTypes.bool
 };

export default AppButton;