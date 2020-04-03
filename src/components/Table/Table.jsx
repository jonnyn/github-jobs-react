import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Just a table</th>
                    </tr>
                </thead>
                {this.props.children}
            </table>
        );
    }
}

export default Table;
