import React from 'react';


export default class HeaderSortEmail extends React.Component{
    render(){
        return(
            <th className="sort-btn"
                colSpan = "2"
                onClick={this.props.sortByEmail}>
                {this.props.header}
                <i className = {this.props.direction ? "fas fa-sort-up" : "fas fa-sort-down"}></i>
            </th>
        );
    }
}
