import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

/**
 * The component responsible to build the table with its data.
 */
class RecordTable extends Component {
    render () {
        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((prop, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{prop.name}</TableCell>
                                    <TableCell>{prop.dob}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

RecordTable.propTypes = {
    /**
     * Expect the array of values to be iterated on the table.
     * @format Array of objects [{
     *   name: 'Lorem',
     *   dob: '02/09/1891'
     * }]
     */
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired
    })).isRequired
};

export default RecordTable;
