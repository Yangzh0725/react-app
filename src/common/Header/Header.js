import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = (props) =>(
  <div className="top">
    {/* <script>
        window.onload = function (){
            var oWin = document.getElementById("window");
            var oLay = document.getElementById("overlay");	
            var oBtn = document.getElementById("popmenu");
            var oClose = document.getElementById("close");
            oBtn.onclick = function (){oLay.style.display = "block";oWin.style.display = "block"	};
            oLay.onclick = function (){oLay.style.display = "none";oWin.style.display = "none"	}
        };
        </script> */}
    <div className="AAA" >
        <div className="toolbar">
            <div className="fixed-green">
                <a className="ui-title" className="popmenu">频道导航</a>
                <a className="ui-btn-back" href="javascript:history.go(-1)"></a>
                <a className="ui-btn-home" href="index.php"></a>
            </div>
        </div>
        <div className="overlay"></div>
        <div className="window">
            <ul className="windowlist">
            <li>
              <Link to="/nav"><span>关于我们</span></Link>
              {/* <a  href="gywm.html"><span>关于我们</span></a> */}
            </li>
            <li>
              <a  href="zxzx.html"><span>资讯中心</span></a>
            </li>
            <li>
              <a  href="yjl.html"><span>有机类</span></a>
            </li>
            <li>
              <a  href="hjl.html"><span>红酒类</span></a>
              </li>
            <li>
              <a  href="cl.html"><span>茶类</span></a>
            </li>
            <li>
              <a  href="lll.html"><span>理疗类</span></a>
            </li>
            <li>
              <a  href="hlwp.html"><span>会员中心</span></a>
            </li>
            <li>
              <a  href="lxwm.html"><span>联系我们</span></a>
            </li>
            <li>
              <a  href="znss.html"><span>站内搜索</span></a>
            </li>                
            <div className="clear"></div>
            </ul>
        </div>
    </div>
  </div>
);
export default Header;