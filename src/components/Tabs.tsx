import Taro, {Component} from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import './styles/Tabs.scss';

interface Interface {
  tabs: ITab[],
  active: number;
  background?: string;
  onClick?: (tab: ITab, index: number) => void;
}

class Tabs extends Component<Interface, {}> {

  onClick = (tab: ITab, index: number) => {
    const {onClick} = this.props;
    onClick && onClick(tab, index)
  };

  render() {
    const {tabs, active, background} = this.props;
    const Items = tabs.map((item, index) => {
      return <View
        className='tab-item'
        key={index}
        onClick={this.onClick.bind(this, item, index)}
      >
        {active === index && <View className='active-line' />}
        <Text className={`tab-item-name ${active === index && 'active-item text-default'}`}>{item.name}</Text>

      </View>
    });

    return <View className='tabs tabs-fixed' style={{background: background || '#ffffff'}}>
      {Items}
    </View>
  }
}

export default Tabs;
