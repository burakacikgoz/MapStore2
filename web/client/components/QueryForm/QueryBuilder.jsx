/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const GroupField = require('./GroupField');
const SpatialFilter = require('./SpatialFilter');

require('./queryform.css');

const QueryBuilder = React.createClass({
    propTypes: {
        attributes: React.PropTypes.array,
        groupLevels: React.PropTypes.number,
        filterFields: React.PropTypes.array,
        groupFields: React.PropTypes.array,
        removeButtonIcon: React.PropTypes.string,
        addButtonIcon: React.PropTypes.string,
        attributePanelExpanded: React.PropTypes.bool,
        spatialPanelExpanded: React.PropTypes.bool,
        attributeFilterActions: React.PropTypes.object,
        spatialFilterActions: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            groupLevels: 1,
            groupFields: [],
            filterFields: [],
            attributes: [],
            removeButtonIcon: "glyphicon glyphicon-minus",
            addButtonIcon: "glyphicon glyphicon-plus",
            attributePanelExpanded: true,
            spatialPanelExpanded: true,
            attributeFilterActions: {
                onAddGroupField: () => {},
                onAddFilterField: () => {},
                onRemoveFilterField: () => {},
                onUpdateFilterField: () => {},
                onUpdateExceptionField: () => {},
                onUpdateLogicCombo: () => {},
                onRemoveGroupField: () => {},
                onChangeCascadingValue: () => {},
                onExpandAttributeFilterPanel: () => {}
            },
            spatialFilterActions: {
                onExpandSpatialFilterPanel: () => {}
            }
        };
    },
    render() {
        return (
            <form id="queryFormPanel">
                <GroupField
                    attributes={this.props.attributes}
                    groupLevels={this.props.groupLevels}
                    filterFields={this.props.filterFields}
                    groupFields={this.props.groupFields}
                    removeButtonIcon={this.props.removeButtonIcon}
                    addButtonIcon={this.props.addButtonIcon}
                    attributePanelExpanded={this.props.attributePanelExpanded}
                    actions={this.props.attributeFilterActions}/>
                <SpatialFilter
                    spatialPanelExpanded={this.props.spatialPanelExpanded}
                    actions={this.props.spatialFilterActions}/>
            </form>
        );
    }
});

module.exports = QueryBuilder;