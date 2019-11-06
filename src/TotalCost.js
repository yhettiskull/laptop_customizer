import React, { Component } from 'react';

class TotalCost extends Component {
    render() {
        const total = Object.keys(this.props.state.selected).reduce(
            (acc, curr) => acc + this.props.state.selected[curr].cost,
            0
        );

        return (
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {this.props.currencyFormat.format(total)}
            </div>
            </div>
        )
    };
};

export default TotalCost;