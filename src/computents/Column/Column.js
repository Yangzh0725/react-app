import React,{Component} from 'react'
import './Column.css';
import c1 from '../../assets/img/1386657551.jpg'
import c2 from '../../assets/img/1386657669.jpg'
import c3 from '../../assets/img/1386657771.jpg'
import c4 from '../../assets/img/1386657851.jpg'
import c5 from '../../assets/img/1386657951.png'
import c6 from '../../assets/img/1386658033.png'
class Column extends Component{
    render(){
        return(
            <div  className="content">
                <div className="picture"> 
                    <ul className="wxlist">
                        <a href="info/183.html" >
                            <li className="CCC" >
                                <div className="InfoTitle">哪些人急需吃有机蔬菜</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={c1}  /></div>                                                                  
                                <div className="InfoSContent">&nbsp;一、孕产妇  二、宝宝、生长发育中的婴幼儿童，青少年偏食...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/184.html" >
                            <li className="CCC">
                                <div className="InfoTitle">什么是有机农业</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={c2}  /></div>                                                                  
                                <div className="InfoSContent">&nbsp;&nbsp;1）有机农业的概念&nbsp;&nbsp...</div>                           
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/185.html" >
                            <li className="CCC">
                                <div className="InfoTitle">重金属污染</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={c3}  /></div>                                                                 
                                <div className="InfoSContent">污染土壤的重金属主要包括汞（Hg）、镉(Cd)、铅(Pb)、铬(Cr)和类金属砷(As)等生物毒性显...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/186.html" >
                            <li className="CCC">
                                <div className="InfoTitle">夏天吃什么最解暑</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={c4}  /></div>                      
                                <div className="InfoSContent">&nbsp;&nbsp;夏天吃什么最解暑是人们最关心的问题，由于夏季环境温度过高，空...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/234.html" >
                            <li className="CCC">
                                <div className="InfoTitle">有机产品的鉴别</div>
                                <div className="InfoTime" >2013-12-10</div>
                                <div className="InfoPicture"><img src={c5}  /></div>                                                                
                                <div className="InfoSContent">对于有机配料含量等于或者高于95%的加工产品，可以在产品或者产品包装及标签上标注&ldquo;...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/235.html" >
                            <li className="CCC">
                                <div className="InfoTitle">有机农业与环境</div>
                                <div className="InfoTime" >2013-12-10</div>
                                <div className="InfoPicture"><img src={c6}  /></div>                                                                  
                                <div className="InfoSContent">&nbsp;有机农业是传统农业与现代科技的结晶，生产中绝对禁止使用化学物质，因此，有机农业生产...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>            
                    </ul>
                    <div className="page"></div>
                </div>
            </div>
        )
    }
}
export default Column;