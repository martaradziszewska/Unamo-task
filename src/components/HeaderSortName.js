import React from 'react';


export default class HeaderSortName extends React.Component{
    render(){
        return(
            <th className="sort-btn"
                onClick={this.props.sortByName}>
                {this.props.header}
                <i className = {this.props.direction ? "fas fa-sort-up" : "fas fa-sort-down"}></i>
            </th>
        );
    }
}
