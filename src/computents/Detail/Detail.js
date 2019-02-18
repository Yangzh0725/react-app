import React,{Component} from 'react';
import './Detail.css';
import e1 from '../../assets/img/1386658250.jpg'
import e2 from '../../assets/img/1386658321.jpg'
import e3 from '../../assets/img/1386658370.jpg'
import e4 from '../../assets/img/1386658422.png'
import e5 from '../../assets/img/1386658499.jpg'
import e6 from '../../assets/img/1386658555.jpg'
import e7 from '../../assets/img/1386658786.jpg'
import e8 from '../../assets/img/1386658844.jpg'
import e9 from '../../assets/img/1386658947.jpg'
import e10 from '../../assets/img/1386659021.jpg'


class Detail extends Component{
    render(){
        return(
            <div  className="content">
                <div className="picture">
                               
                    <ul className="wxlist">
                        <a href="info/154.html" >
                            <li className='CCC' >
                                <div className="InfoTitle">金秀黄心娃娃菜</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={e1}  /></div>                                                                  
                                <div className="InfoSContent">特色:&nbsp;微型大白菜,外形尺寸仅相当于大白菜的四分之一&nbsp;保健功效:...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/155.html" >
                            <li className='CCC' >
                                <div className="InfoTitle">有机奶油南瓜</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={e2}  /></div>                                                                 
                                <div className="InfoSContent">特色：成熟果表皮黄里透红，果肉鲜艳橘红色、糖分高、口感好，瓜皮韧度强&nbsp; 保健...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/156.html" >
                              <li className='CCC' >
                                <div className="InfoTitle">有机彩椒</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={e3}  /></div>                                                    
                                <div className="InfoSContent">特色:&nbsp;与普通大椒相比，味道不辣或极微辣含有较高的糖和维生素C。 ...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/157.html" >
                            <li className='CCC' >
                                <div className="InfoTitle">有机荟雪花猪</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={e4}  /></div>                                                                  
                                <div className="InfoSContent">&nbsp; 一，137有机荟雪花猪是什么...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/158.html" >
                            <li className='CCC' >
                                <div className="InfoTitle">香信菇的介绍</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={e5}  /></div>                                                                  
                                <div className="InfoSContent">香信，又名香覃。香信是香菇中最为奇特的一种，菌盖薄且均匀，大且平整，色泽近似淡黄色，柔嫩的口感...</div>                              <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/159.html" >
                            <li className='CCC' >
                                <div className="InfoTitle">五常大米</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={e6}  /></div>                                                                  
                                <div className="InfoSContent">在国家质量监督检验检疫行政管理部门批准保护的范围内，使用五优稻、松粳系列及通过审定的其...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/160.html" >
                            <li className='CCC' >
                                <div className="InfoTitle">750ml压榨一级玻璃瓶装</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={e7}  /></div>                                                                  
                                <div className="InfoSContent">&middot;木本坚果类植物食用油，源自深山油茶林，树龄最高达百年；...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/161.html" >
                            <li className='CCC' >
                                <div className="InfoTitle">菜园展示图</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={e8}  /></div>                                                                  
                                <div className="InfoSContent">图片一&nbsp;...</div>                              
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>
                        <a href="info/162.html" >
                              <li className='CCC' >
                                  <div className="InfoTitle">鱼</div>
                                  <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={e9}  /></div>                                                                 
                                  <div className="InfoSContent">图片一 &nbsp;...</div>                              
                                  <div className="ShowInfo">点击阅读全文>></div>
                              </li>
                        </a>
                        <a href="info/163.html" >
                            <li className='CCC' >
                                <div className="InfoTitle">有机猪</div>
                                <div className="InfoTime" >2013-11-27</div>
                                <div className="InfoPicture"><img src={e10}  /></div>                                                                 
                                <div className="InfoSContent"> 图片一&nbsp;...</div>                             
                                <div className="ShowInfo">点击阅读全文>></div>
                            </li>
                        </a>            
                    </ul>
                    <div className="page"><span className='pageinfo'>共<label id='total'>15</label>条 1/2 页</span>  <span  className='pagefirst' >首页</span>  <span className='pageup' >上一页</span>    <span className='current'>1</span> <a className='pagenum' href='yjl.html?&p=2'>&nbsp;2&nbsp;</a>   <a className='pagedown' href='yjl.html?&p=2'>下一页</a> <a  className='pageend'  href='yjl.html?&p=2' >尾页</a></div>
                    <div className="clear"></div>
                    <ul className="wxlist">
                        <li>
                            {/* <form name="frmInfoSearch" method="post" action="index.php/channel/search/l/cn">
                            <div><input  name="Keywords" value="" className='CCC' ="height:30px" type="text"  placeholder="请输入关键词"  /></div>
                            <div><input name="btnSearch" className="ui-btn-submit"  type="submit" value="站内搜索"  /></div>
                            <input type="hidden" name="__hash__" value="ab7a73ead16f394e79466d5e219e092d_bb8b4feed5873eea9a55f095805d0fee" /></form> */}
                        </li>
                    </ul>            
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}
export default Detail;