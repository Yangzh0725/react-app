import React from 'react';
import './Slider.css';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

import f1 from '../../assets/img/1386656829.jpg';
import f2 from '../../assets/img/1386656849.jpg';
import f3 from '../../assets/img/1386656882.jpg';

import p1 from '../../assets/img/1386656939.png';
import p2 from '../../assets/img/1386657471.png';
import p3 from '../../assets/img/1386658208.png';
import p4 from '../../assets/img/1386659900.png';
import p5 from '../../assets/img/1386661099.png';
import p6 from '../../assets/img/1386662609.png';
import p7 from '../../assets/img/1386663361.png';
import p8 from '../../assets/img/1386663611.png';
import p9 from '../../assets/img/1386664735.png';
import {Link}from 'react-router-dom'

const Slider = (props) =>(
   
<div className="content">

    <div className="slider-header">

        <div >
             <ul >
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ 
                        continuous: true,
                        auto:1000,
                        
                        
                    }}
                
                >
                    <div className="FF">
                        <img src={f1} />
                    </div>
                    <div className="FF">
                        <img src={f2} />
                    </div>
                    <div className="FF">
                        <img src={f3} />
                    </div>
                                  
                </ReactSwipe>
               
                {/* <div className="swiper-pagination">
             
                </div> */}

            </ul>
        </div>
        <div className="swiper-pagination"></div>

    </div>
    <ul className="nav">
      <li>
            <Link  to='/nav'>
                <div className="ChannelIcon"><img src={p1}  /></div>
                <div className="ChannelName">关于我们</div>
            </Link>
        </li>
        <li>
            <Link  to='/column'>   
                <div className="ChannelIcon"><img src={p2}  /></div>
                <div className="ChannelName">资讯中心</div>
            </Link>
        </li>
        <li>
            <Link  to='/detail'>
                <div className="ChannelIcon"><img src={p3}  /></div>
                <div className="ChannelName">有机类</div>
            </Link>
        </li>
        <li>
            <a  href="hjl.html">
                <div className="ChannelIcon"><img src={p4}  /></div>
                <div className="ChannelName">红酒类</div>
            </a>
        </li>
        <li>
            <a  href="cl.html">
                <div className="ChannelIcon"><img src={p5}  /></div>
                <div className="ChannelName">茶类</div>
            </a>
        </li>
        <li>
            <a  href="lll.html">
                <div className="ChannelIcon"><img src={p6}  /></div>
                <div className="ChannelName">理疗类</div>
            </a>
        </li>
        <li>
            <a  href="hlwp.html">
                <div className="ChannelIcon"><img src={p7}  /></div>
                <div className="ChannelName">会员中心</div>
            </a>
        </li>
        <li>
            <Link  to='/follow'>
                <div className="ChannelIcon"><img src={p8}  /></div>
                <div className="ChannelName">联系我们</div>
            </Link>
        </li>
        <li>
            <a  href="znss.html">
                <div className="ChannelIcon"><img src={p9}  /></div>
                <div className="ChannelName">站内搜索</div>
            </a>
        </li>        
    </ul>
    <div className="l-content"></div>
</div>
);
export default Slider