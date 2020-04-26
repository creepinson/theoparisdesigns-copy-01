import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {Link} from '../utils';

/* eslint-disable */

export default class Elements extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <header id="header">
                    <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                </header>
                <section id="main" className="wrapper alt">
                    <div className="inner">
                        <h2 id="content">Sample Content</h2>
                        <p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing.</p>
                        <div className="row">
                            <div className="col-6 col-12-small">
                                <h3>Sem turpis amet semper</h3>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            </div>
                            <div className="col-6 col-12-small">
                                <h3>Magna odio tempus commodo</h3>
                                <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan ac praesent.</p>
                            </div>
                            <div className="col-4 col-12-medium">
                                <h3>Interdum sapien gravida</h3>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            </div>
                            <div className="col-4 col-12-medium">
                                <h3>Faucibus consequat lorem</h3>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            </div>
                            <div className="col-4 col-12-medium">
                                <h3>Accumsan montes viverra</h3>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            </div>
                        </div>
                        <hr className="major" />
                        <h2 id="elements">Elements</h2>
                        <div className="row gtr-200">
                            <div className="col-6 col-12-medium">
                                <h3>Text</h3>
                                <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                                    This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                                    This is <u>underlined</u> and this is code: <code>for (;;) &#123; ... &#125;</code>.
                                    Finally, this is a <Link to="#">link</Link>.</p>
                                <hr />
                                <h2>Heading Level 2</h2>
                                <h3>Heading Level 3</h3>
                                <h4>Heading Level 4</h4>
                                <h5>Heading Level 5</h5>
                                <h6>Heading Level 6</h6>
                                <hr />
                                <header>
                                    <h2>Heading with a Subtitle</h2>
                                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <header>
                                    <h3>Heading with a Subtitle</h3>
                                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <header>
                                    <h4>Heading with a Subtitle</h4>
                                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <h3>Lists</h3>
                                <div className="row">
                                    <div className="col-6 col-12-small">
                                        <h4>Unordered</h4>
                                        <ul>
                                            <li>Dolor pulvinar etiam magna etiam.</li>
                                            <li>Sagittis adipiscing lorem eleifend.</li>
                                            <li>Felis enim feugiat dolore viverra.</li>
                                        </ul>
                                        <h4>Alternate</h4>
                                        <ul className="alt">
                                            <li>Dolor pulvinar etiam magna etiam.</li>
                                            <li>Sagittis adipiscing lorem eleifend.</li>
                                            <li>Felis enim feugiat dolore viverra.</li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <h4>Ordered</h4>
                                        <ol>
                                            <li>Dolor pulvinar etiam magna etiam.</li>
                                            <li>Etiam vel felis at lorem sed viverra.</li>
                                            <li>Felis enim feugiat dolore viverra.</li>
                                            <li>Dolor pulvinar etiam magna etiam.</li>
                                            <li>Etiam vel felis at lorem sed viverra.</li>
                                            <li>Felis enim feugiat dolore viverra.</li>
                                        </ol>
                                        <h4>Icons</h4>
                                        <ul className="icons">
                                            <li><Link to="#" className="icon fa-twitter"><span className="label">Twitter</span></Link></li>
                                            <li><Link to="#" className="icon fa-facebook"><span className="label">Facebook</span></Link></li>
                                            <li><Link to="#" className="icon fa-instagram"><span className="label">Instagram</span></Link></li>
                                            <li><Link to="#" className="icon fa-github"><span className="label">Github</span></Link></li>
                                            <li><Link to="#" className="icon fa-dribbble"><span className="label">Dribbble</span></Link></li>
                                            <li><Link to="#" className="icon fa-tumblr"><span className="label">Tumblr</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <h4>Definition</h4>
                                <dl>
                                    <dt>Item 1</dt>
                                    <dd>
                                        <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                                    </dd>
                                    <dt>Item 2</dt>
                                    <dd>
                                        <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                                    </dd>
                                    <dt>Item 3</dt>
                                    <dd>
                                        <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                                    </dd>
                                </dl>
                                <h4>Actions</h4>
                                <ul className="actions">
                                    <li><Link to="#" className="button primary">Default</Link></li>
                                    <li><Link to="#" className="button">Default</Link></li>
                                </ul>
                                <ul className="actions small">
                                    <li><Link to="#" className="button primary small">Small</Link></li>
                                    <li><Link to="#" className="button small">Small</Link></li>
                                </ul>
                                <div className="row">
                                    <div className="col-6 col-12-small">
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary">Default</Link></li>
                                            <li><Link to="#" className="button">Default</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary small">Small</Link></li>
                                            <li><Link to="#" className="button small">Small</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary fit">Default</Link></li>
                                            <li><Link to="#" className="button fit">Default</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary small fit">Small</Link></li>
                                            <li><Link to="#" className="button small fit">Small</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <h3>Blockquote</h3>
                                <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>
                                <h3>Table</h3>
                                <h4>Default</h4>
                                <div className="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item 1</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 2</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 3</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 4</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 5</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2" />
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <h4>Alternate</h4>
                                <div className="table-wrapper">
                                    <table className="alt">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item 1</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 2</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 3</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 4</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 5</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2" />
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="col-6 col-12-medium">
                                <h3>Buttons</h3>
                                <ul className="actions">
                                    <li><Link to="#" className="button primary">Primary</Link></li>
                                    <li><Link to="#" className="button">Default</Link></li>
                                </ul>
                                <ul className="actions">
                                    <li><Link to="#" className="button primary large">Large</Link></li>
                                    <li><Link to="#" className="button">Default</Link></li>
                                </ul>
                                <ul className="actions fit">
                                    <li><Link to="#" className="button primary fit">Fit</Link></li>
                                    <li><Link to="#" className="button fit">Fit</Link></li>
                                </ul>
                                <ul className="actions fit small">
                                    <li><Link to="#" className="button primary fit small">Fit + Small</Link></li>
                                    <li><Link to="#" className="button fit small">Fit + Small</Link></li>
                                </ul>
                                <ul className="actions">
                                    <li><Link to="#" className="button primary icon fa-search">Icon</Link></li>
                                    <li><Link to="#" className="button icon fa-download">Icon</Link></li>
                                </ul>
                                <ul className="actions">
                                    <li><span className="button primary disabled">Primary</span></li>
                                    <li><span className="button disabled">Default</span></li>
                                </ul>
                                <h3>Form</h3>
                                <form method="post" action="#">
                                    <div className="row gtr-uniform">
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="name" id="name" value="" placeholder="Name" />
                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="email" name="email" id="email" value="" placeholder="Email" />
                                        </div>
                                        <div className="col-12">
                                            <select name="category" id="category">
                                                <option value="">- Category -</option>
                                                <option value="1">Manufacturing</option>
                                                <option value="1">Shipping</option>
                                                <option value="1">Administration</option>
                                                <option value="1">Human Resources</option>
                                            </select>
                                        </div>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="priority-low" name="priority" checked/>
                                            <label htmlFor="priority-low">Low</label>
                                        </div>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="priority-normal" name="priority"/>
                                            <label htmlFor="priority-normal">Normal</label>
                                        </div>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="priority-high" name="priority"/>
                                            <label htmlFor="priority-high">High</label>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <input type="checkbox" id="copy" name="copy"/>
                                            <label htmlFor="copy">Email me a copy</label>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <input type="checkbox" id="human" name="human" checked/>
                                            <label htmlFor="human">I am a human</label>
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" id="message" placeholder="Enter your message" rows="6" />
                                        </div>
                                        <div className="col-12">
                                            <ul className="actions">
                                                <li><input type="submit" value="Send Message" className="primary" /></li>
                                                <li><input type="reset" value="Reset" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                                <h3>Image</h3>
                                <h4>Fit</h4>
                                <span className="image fit"><img src="images/pic01.jpg" alt="" /></span>
                                <div className="box alt">
                                    <div className="row gtr-50 gtr-uniform">
                                        <div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
                                    </div>
                                </div>
                                <h4>Left &amp; Right</h4>
                                <p><span className="image left"><img src="images/pic02.jpg" alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis volutpat lorem ipsum dolor sit amet dolor consequat.</p>
                                <p><span className="image right"><img src="images/pic01.jpg" alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis volutpat lorem ipsum dolor sit amet dolor consequat.</p>
                                <h3>Box</h3>
                                <div className="box">
                                    <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum dolor sit amet nullam.</p>
                                </div>
                                <h3>Preformatted</h3>
                                <pre><code>{`i = 0;\n\nwhile (!deck.isInOrder()) {\n    print 'Iteration ' + i;\n    deck.shuffle();\n    i++;\n}\n\nprint 'It took ' + i + ' iterations to sort the deck.';\n`}</code></pre>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}
