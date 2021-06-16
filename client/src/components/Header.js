import React from 'react';
import {Avatar} from "@material-ui/core";
import "../assets/dashboard.css"
import {APP_NAME} from "../config/app";
import {Link} from 'react-router-dom';
import "../assets/css/bootstrap.min.css"
import "../assets/css/main.min.css"

const Header = (props) => {

    return (
   
        <>
            <header className="header" id="site-header">
                <div className="page-title">
                    <h6>{APP_NAME}</h6>
                </div>
                <div className="header-content-wrapper">
                    <div className="control-block">
                        <div className="control-icon more has-items">
                            <Link  to="/" class="text-white">HOME</Link>
                        </div>

                        <div className="control-icon more has-items">
                            <Link  to="booking" class="text-white">BOOKING</Link>
                        </div>

                        <div className="control-icon more has-items">
                            <Link  to="invoice" class="text-white">INVOICE</Link>
                        </div>

                        <div className="control-icon more has-items">
                            <Link  to="settings" class="text-white">SETTINGS</Link>
                        </div>

                        <div className="author-page author vcard inline-items more">
                            <div className="author-thumb">
                                <Avatar width="36" height="36" className="avatar" />
                                    <div className="more-dropdown more-with-triangle">
                                        <div className="mCustomScrollbar" data-mcs-theme="dark">
                                            <div className="ui-block-title ui-block-title-small">
                                                <h6 className="title">Your Account</h6>
                                            </div>
                                            <ul className="account-settings">
                                                <li>
                                                    <a href="#" onClick={props.onLogOut}>
                                                        <span>Log Out</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                            <a href="#" className="author-name fn">
                                <div className="author-title">
                                    {props.username}  <i className="fa fa-caret-down"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>


            <header className="header header-responsive" id="site-header-responsive">
                <div className="header-content-wrapper">
                    <ul className="nav nav-tabs mobile-notification-tabs" id="mobile-notification-tabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <Link  to="/" class="text-white">HOME</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link  to="booking" class="text-white">BOOKING</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link  to="invoice" class="text-white">INVOICE</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link  to="settings" class="text-white">SETTINGS</Link>
                        </li>
                    </ul>
                </div>

                <div className="tab-content tab-content-responsive">
                    <div className="tab-pane fade" id="request" role="tabpanel" aria-labelledby="request-tab">
                        <div className="mCustomScrollbar" data-mcs-theme="dark">
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">FRIEND REQUESTS</h6>
                                <a href="#">Find Friends</a>
                                <a href="#">Settings</a>
                            </div>
                            <ul className="notification-list friend-requests">
                                <li>
                                    <div className="author-thumb">
                                        <img loading="lazy" src="img/avatar55-sm.html" alt="author" width="34"
                                             height="34" />
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">Tamara Romanoff</a>
                                        <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                                    </div>
                                    <span className="notification-icon">
<a href="#" className="accept-request">
<span className="icon-add without-text">
<svg className="olymp-happy-face-icon"><use xlinkHref="#olymp-happy-face-icon"></use></svg>
</span>
</a>
<a href="#" className="accept-request request-del">
<span className="icon-minus">
<svg className="olymp-happy-face-icon"><use xlinkHref="#olymp-happy-face-icon"></use></svg>
</span>
</a>
</span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"></use>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="author-thumb">
                                        <img loading="lazy" src="img/avatar56-sm.html" alt="author" width="34"
                                             height="34"/>
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">Tony Stevens</a>
                                        <span className="chat-message-item">4 Friends in Common</span>
                                    </div>
                                    <span className="notification-icon">
<a href="#" className="accept-request">
<span className="icon-add without-text">
<svg className="olymp-happy-face-icon"><use xlinkHref="#olymp-happy-face-icon"></use></svg>
</span>
</a>
<a href="#" className="accept-request request-del">
<span className="icon-minus">
<svg className="olymp-happy-face-icon"><use xlinkHref="#olymp-happy-face-icon"></use></svg>
</span>
</a>
</span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"></use>
                                        </svg>
                                    </div>
                                </li>
                                <li className="accepted">
                                    <div className="author-thumb">
                                        <img loading="lazy" src="img/avatar57-sm.html" alt="author" width="34"
                                             height="34"/>
                                    </div>
                                    <div className="notification-event">
                                        You and
                                        <a href="#" className="h6 notification-friend">Mary Jane Stark</a> just became
                                        friends. Write on
                                        <a href="#" className="notification-link">her wall</a>.
                                    </div>
                                    <span className="notification-icon">
<svg className="olymp-happy-face-icon"><use xlinkHref="#olymp-happy-face-icon"></use></svg>
</span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"></use>
                                        </svg>
                                        <svg className="olymp-little-delete">
                                            <use xlinkHref="#olymp-little-delete"></use>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="author-thumb">
                                        <img loading="lazy" src="img/avatar58-sm.html" alt="author" width="34"
                                             height="34"/>
                                    </div>
                                    <div className="notification-event">
                                        <a href="#" className="h6 notification-friend">Stagg Clothing</a>
                                        <span className="chat-message-item">9 Friends in Common</span>
                                    </div>
                                    <span className="notification-icon">
<a href="#" className="accept-request">
<span className="icon-add without-text">
<svg className="olymp-happy-face-icon"><use xlinkHref="#olymp-happy-face-icon"></use></svg>
</span>
</a>
<a href="#" className="accept-request request-del">
<span className="icon-minus">
<svg className="olymp-happy-face-icon"><use xlinkHref="#olymp-happy-face-icon"></use></svg>
</span>
</a>
</span>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"></use>
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" className="view-all bg-blue">Check all your Events</a>
                        </div>
                    </div>
                  
                
                    <div className="tab-pane fade" id="search" role="tabpanel" aria-labelledby="search-tab">
                        <form className="search-bar w-search notification-list friend-requests">
                            <div className="form-group with-button">
                                <input className="form-control js-user-search"
                                       placeholder="Search here people or pages..." type="text" />
                            </div>
                        </form>
                    </div>
                </div>

            </header>

            <div className="header-spacer"></div>

        </>
)
}


export default Header