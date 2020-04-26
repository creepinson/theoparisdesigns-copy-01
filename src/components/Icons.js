import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class Icons extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="special">
                <header className="major">
                    <h2>{_.get(this.props, 'section.title')}</h2>
                    {markdownify(_.get(this.props, 'section.subtitle'))}
                </header>
                <ul className="icons large series">
                    {_.map(_.get(this.props, 'section.icons'), (item, item_idx) => (
                        <li key={item_idx} className={'icon ' + _.get(item, 'icon')}/>
                    ))}
                </ul>
            </section>
        );
    }
}
