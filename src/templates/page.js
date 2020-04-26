import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify, Link, safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                {_.get(this.props, 'pageContext.frontmatter.display_header') && 
                    <header id="header">
                        <h1>{_.get(this.props, 'pageContext.site.siteMetadata.title')}</h1>
                    </header>
                }
                <section id="main" className="wrapper alt">
                    <div className="inner">
                        <header className="major special">
                            <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                            {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                        </header>
                        {_.get(this.props, 'pageContext.frontmatter.content_img') && 
                            <Link to="#" className="image fit"><img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img'))} alt="" /></Link>
                        }
                        {htmlToReact(_.get(this.props, 'pageContext.html'))}
                    </div>
                </section>
            </Layout>
        );
    }
}
