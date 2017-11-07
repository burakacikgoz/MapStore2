/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */


const React = require('react');
const SideGrid = require('../../../../misc/cardgrids/SideGrid');
const Message = require('../../../../I18N/Message');
const sampleData = require('../../../enhancers/sampleChartData');
const SimpleChart = sampleData(require('../../../../charts/SimpleChart'));
const {Row} = require('react-bootstrap');
const sampleProps = {
    legend: false,
    tooltip: false,
    cartesian: false,
    width: 100,
    height: 100,
    popup: false
};
const StepHeader = require('../../../../misc/wizard/StepHeader');

const ITEMS = [{
    title: 'Bar chart',
    icon: 'icon',
    desc: 'desc',
    caption: 'caption',
    type: "bar",
    preview: <SimpleChart {...sampleProps} type="bar"/>
}, {
    title: 'Pie chart',
    icon: 'icon',
    desc: 'desc',
    caption: 'caption',
    type: "pie",
    preview: <SimpleChart {...sampleProps} type="pie"/>
}, {
    title: 'Line chart',
    icon: 'icon',
    desc: 'desc',
    caption: 'caption',
    type: "line",
    preview: <SimpleChart {...sampleProps} type="line"/>
}, {
    title: 'Gauge',
    icon: 'icon',
    desc: 'desc',
    caption: 'caption',
    type: "gauge",
    preview: <SimpleChart {...sampleProps} type="gauge"/>
}


];
module.exports = ({onSelect = () => {}, onNextPage = () => {}} = {}, types = []) => (<Row>
    <StepHeader key="title" title={<Message msgId="widgets.selectChartType.title" />} />
    <SideGrid key="content" onItemClick={i => {onSelect(i.type); onNextPage(); }} items={types && ITEMS} />
</Row>
    );