import React,{Component} from 'react'
import './Follow.css';
import JHzq from '../../assets/img/20131210162130JHzq.jpg'

class Follow extends Component{
    render(){
        return(
            <div  className="content">
                <div  className="single">
                    <ul className="wxlist">
                        <li className="AAAA">
                            <h1>联系我们</h1>
                            <div className="ChannelContent">
                                <div className='W1' >
                                    <ul>
                                        <li>
                                            <div>有机蔬菜、鸡蛋、香菇、姬松茸、金钱菇、红枣、核桃、淮山、黑木耳、蓝月香槟、罗纳河谷红酒、西班牙冷炸橄榄油、云南普洱茶、阿根廷牛肉、光波理疗、U23基因检查。</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='W2' >
                                    <ul>
                                        <li className="AA" >
                                            <img src={JHzq} className="AAAa"  />
                                        </li>
                                    </ul>
                                </div>
                                <div className='W3'>
                                    <ul>
                                        <li>
                                           电话：13588888888
                                        </li>
                                        <li>
                                            邮件：123456@qq.com
                                        </li>
                                        <li>
                                            ＱＱ：123456
                                        </li>
                                        <li>
                                            地址：中关村天佑大厦8-168
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>            
                    <div className="clear"></div>
                </div>
            </div>


            // <div className=".wxlist">
            //     <h1>联系我们</h1>
            //     <ul>
            //         <li>有机蔬菜、鸡蛋、香菇、姬松茸、金钱菇、红枣、核桃、淮山、黑木耳、蓝月香槟、罗纳河谷红酒、西班牙冷炸橄榄油、云南普洱茶、阿根廷牛肉、光波理疗、U23基因检查。</li>
            //     </ul>
            //     <ul>
            //         <img src={JHzq} className="AAAa"  />
            //     </ul>
            //     <ul>
            //         <li>电话：13588888888</li>
            //         <li>邮件：123456@qq.com</li>
            //         <li>ＱＱ：123456</li>
            //         <li>地址中关村天佑大厦8-168</li>
            //     </ul>
            // </div>
        )
    }
}
export default Follow;