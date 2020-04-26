import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix, classNames} from '../utils';

export default class Cta extends React.Component {
    render() {
        return (
            <section id="cta" className={'wrapper ' + _.get(this.props, 'pageContext.frontmatter.cta.background_style') + ' special'}>
                <div className="inner">
                    <header className="major">
                        <h2>{_.get(this.props, 'pageContext.frontmatter.cta.title')}</h2>
                        {markdownify(_.get(this.props, 'pageContext.frontmatter.cta.text'))}
                    </header>
                    {_.get(this.props, 'pageContext.frontmatter.cta.actions') && 
                        <ul className="actions special">
                            {_.map(_.get(this.props, 'pageContext.frontmatter.cta.actions'), (action, action_idx) => (
                                <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        );
    }
}
