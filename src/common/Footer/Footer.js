import React from 'react';
import './Footer.css';
import d1 from "../../assets/images/guide.png"
import send from '../../assets/images/send.png'
import friend from '../../assets/images/friend.png'
import top from '../../assets/images/top.png'

const Footer = (props)=>(
    <div className="footer">
		{/* <script>
			function openGuide(){ document.getElementById('guide').style.display='block'; }
			function closeGuide(){ document.getElementById('guide').style.display=''; }
		</script> */}
		{/* <div className="guide">
			<img src={d1} />
		</div> */}
		<div className="plug-div">
			<div className="plug-phone">
				<div className="plug-menu themeStyle">
					<span className="close"></span>
				</div>
 
 				<div className="themeStyle plug-btn plug-btn1 close">
 					<a href="index.php"><span className="one"   ></span></a>
 				</div>
				
 				<div className="themeStyle plug-btn plug-btn2 close" >
 					<a href="zxly.html"><span className="two"></span></a>
 				</div>      
				
 				<div className="themeStyle plug-btn plug-btn3 close">
 					<a href="gywm.html"><span className="three" ></span></a>
 				</div>

 				<div className="themeStyle plug-btn plug-btn4 close">
 					<a href="lxwm.html"><span className="four"   ></span></a>
 				</div>
				<div className="plug-btn plug-btn5 close"></div>
			</div>
		</div>  

        <div className="tool">
            <div  className="BB1" >
                <ul>
                    <li className="BB2" >
                        <a  className="btn">
                        {/* <a  className="btn"  onclick="openGuide()"> */}
                        <img src={send} className="BB3"  />发给朋友</a>
                    </li>
                    <li className="BB2" >
                        <a  className="btn">
                        {/* <a  className="btn" onclick="openGuide()"> */}
                        <img src={friend} className="BB3"   />分享到朋友圈</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <ul className="wxlist">
                <a  href="#top">
                	<li><div  className="GoTop"><img src={top} />返回顶部</div></li>
                </a>
            </ul>
        </div>   
        <div className="copyright">某某有机食品微网站&nbsp;版权所有</div>
    </div>
);
export default Footer;