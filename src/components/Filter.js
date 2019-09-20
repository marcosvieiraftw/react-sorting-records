import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

/**
 * The component responsible to managing the filters tools.
 */
class Filter extends Component {
    constructor() {
        super();
        this.state = {
            currentlyChecked: 'name'
        }
    }

    /**
     * Responsible to manage the state of checkbox and call the ordenation function according to user choice.
     */
    onChange(field) {
        this.setState({currentlyChecked: field});
        if (field === 'age') {
            return this.props.dateOrderChanged()
        }

        return this.props.nameOrderChanged()
    }

    render () {
        return (
            <div className="checkboxes">
                <Checkbox
                    value="name"
                    checked={this.state.currentlyChecked === 'name'}
                    onChange={(e) => {this.onChange('name')} } />
                <label>Name</label>
                <Checkbox
                    value="age"
                    checked={this.state.currentlyChecked === 'age'}
                    onChange={(e) => {this.onChange('age')} } />
                <label>Age</label>
            </div>
        );
    }
}

Filter.propTypes = {
    /**
     * Gets called when the user clicks on the Name checkbox.
     */
    nameOrderChanged: PropTypes.func.isRequired,
    /**
     * Gets called when the user clicks on the Age checkbox.
     */
    dateOrderChanged: PropTypes.func.isRequired
};

export default Filter;