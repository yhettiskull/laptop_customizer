import React, { Component } from 'react';
import FeatureOptions from './FeatureOptions';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class FeatureList extends Component {
    render() {
        const options = this.props.features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div>
                    <FeatureOptions 
                    feature={this.props.feature}
                    item={item}
                    itemHash={itemHash}
                    selected={this.props.selected}
                    format={this.props.currencyFormat}
                    update={this.props.updateFeature} />
                </div>
            );
        });
        
        return (
            <div>
                {options}
            </div>
        )
    }
}

export default FeatureList;