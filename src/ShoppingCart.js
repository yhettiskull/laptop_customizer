import React, { Component } from 'react';
import TotalCost from './TotalCost';

class ShoppingCart extends Component {
    render() {
        const summary = Object.keys(this.props.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.state.selected[feature];
            console.log(selectedOption)
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {this.props.currencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });

        return (
            <div>
                {summary}
                <TotalCost 
                currencyFormat={this.props.currencyFormat}
                state={this.props.state} />
            </div>
        );
    }
};

export default ShoppingCart;