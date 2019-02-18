import React from 'react';
import './List.css';

import d1 from "../../assets/images/guide.png"

const List = (props) =>(
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
		<div className="copyright">某某有机食品微网站&nbsp;版权所有</div>
	</div>
);
export default List