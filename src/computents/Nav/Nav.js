import React from 'react';
import './Nav.css';
import aaa from '../../assets/img/1386657111.jpg';

const Nav = (props)=>(
    <div  className="content">
        <div  className="single">   
            <ul className="wxlist">
                <a  href="mdjj.html">
                    <li>
                        <div className="ChannelName">某某有机荟简介</div>
                        <div className="ChannelPicture"><img src={aaa} /></div>                                                          
                        <div className="ChannelSContent">于2011年3月7日成立，本公司致力于有机及生活方式的健康推广，目前经营范围包括法国红酒...</div>                         
                        <div className="ShowInfo">点击查看详情>></div>
                    </li>
                </a>        
            </ul>
            <div className="clear"></div>
        </div>
    </div>
)
export default Nav;