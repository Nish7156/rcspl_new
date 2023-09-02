import React from 'react'

function Footer() {
  return (
    <>
      <footer>
			<div className="top-footer">
				<div className="container">
					<div className="row isotope">
						<div className="col-md-3 col-sm-6 col-xs-12 isotope-item">
							<div className="widget widget_contact">
	                            <h4 className="widget-title">Contact Info</h4>
	                            <div className="widget-body">
	                            	<ul className="contact-info clean-list">
	                            		<li>
	                            			<span className="title">Address:</span>
		                            		<p>121 King Street, Melbourne</p>
		                            		<p>Victoria 3000 Australia</p>
	                            		</li>
	                            		<li>
	                            			<span className="title">Phone:</span>
		                            		<p>+1 (800) 456 37 96 - Office</p>
	                            		</li>
	                            		<li>
	                            			<span className="title">Email:</span>
		                            		<p><a href="mailto:email@gt3themes.com">email@gt3themes.com</a></p>
	                            		</li>
	                            		<li>
	                            			<span className="title">Follow Us:</span>
		                            		<ul className="socials clean-list">
		                            			<li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
		                            			<li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
		                            			<li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
		                            			<li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
		                            			<li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
		                            			<li><a href="#"><i className="fa fa-behance-square"></i></a></li>
		                            			<li><a href="#"><i className="fa fa-instagram"></i></a></li>
		                            		</ul>
	                            		</li>
	                            	</ul>
	                            </div>
	                        </div>
						</div>

						<div className="col-md-3 col-sm-6 col-xs-12 isotope-item">
							<div className="widget widget_instagram">
	                            <h4 className="widget-title">Follow Instagram</h4>
	                            <div className="widget-body">
	                            	<ul className="instagram-feed clean-list" data-instagram="6" data-instagram-username="paul_garrat"></ul>
	                            </div>
	                        </div>
						</div>

						<div className="col-md-3 col-sm-6 col-xs-12 isotope-item">
							<div className="widget widget_recent_posts">
	                            <h4 className="widget-title">Recent Posts</h4>
	                            <div className="widget-body">
	                            	<ul className="recent-posts clean-list">
	                            		<li>
	                            			<h4><a href="#">Standard gallery post</a></h4>
	                            			<ul className="post-meta">
												<li>June 09, 2018</li>
												<li>by <a href="#">Mixuha</a></li>
												<li><a href="#">3 Comments</a></li>
	                            			</ul>
	                            		</li>
	                            		<li>
	                            			<h4><a href="#">Post with couple photos inside</a></h4>
	                            			<ul className="post-meta">
												<li>June 09, 2018</li>
												<li>by <a href="#">Mixuha</a></li>
												<li><a href="#">3 Comments</a></li>
	                            			</ul>
	                            		</li>
	                            		<li>
	                            			<h4><a href="#">Smart quote post</a></h4>
	                            			<ul className="post-meta">
												<li>June 09, 2018</li>
												<li>by <a href="#">Mixuha</a></li>
												<li><a href="#">3 Comments</a></li>
	                            			</ul>
	                            		</li>
	                            	</ul>
	                            </div>
	                        </div>
						</div>

						<div className="col-md-3 col-sm-6 col-xs-12 isotope-item">
							<div className="widget widget_subscribe">
	                            <h4 className="widget-title">Newsletter signup</h4>
	                            <div className="widget-body">
	                            	<p>Enter your email address to subscribe and receive notifications of new posts by email. Sed ut perspiciatis unde omnis iste natus.</p>
	                            	<form className="subscribe-form" action="javascript:void(0)">
										<input className="input-line" type="text" placeholder="Your Email"/>
										<input className="submit-btn" type="submit" value="subscribe"/>
	                            	</form>
	                            </div>
	                        </div>
						</div>
					</div>
				</div>
			</div>

			<div className="bottom-footer">
				<div className="container">
					<p className="alignleft align-left copyright">
						Copyright © 2020 Bricks. All Rights Reserved.
					</p>

					<p className="alignright align-right copyright">
						Premium Construction HTML Template by <a href="http://gt3themes.com">GT3themes.com</a>
					</p>
				</div>
			</div>
		</footer>  
    </>
  )
}

export default Footer