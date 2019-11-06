import React, { Component } from 'react';
import FeatureOptions from './FeatureOptions';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class LaptopMenu extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <div>
                        <FeatureOptions 
                        feature={feature}
                        item={item}
                        itemHash={itemHash}
                        selected={this.props.selected}
                        format={this.props.currencyFormat}
                        update={this.props.updateFeature} />
                    </div>
                );
            });
            
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });

        return (
            <div>
                {features}
            </div>
        )
    }
}

export default LaptopMenu;