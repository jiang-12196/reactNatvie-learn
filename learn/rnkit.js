import {
  QMBadge,  // 徽标
  QMButton, // 按钮
  QMCheckBox, // 复选框
  QMRadio,
  QMList, // 列表
  QMSwitch,
  QMInputItem, // 文本输入
  QMSwipeAction, // 左滑操作
  QMTabs,  // 标签页
  QMTab, // 小标签
  QMToast,
} from 'rnkit';

import { TouchableHighlight } from 'react-native'

import {
  Badge
}from 'antd-mobile';

<QMBadge
  size={large || small}
  text={string || number} // 文字和数字, 大于overflowCount时，${overflowCount}+
  overflowCount={max number} // 最大值
  corner // 置于角落
  dot // 红点
/>

<QMButton
  type={'primary' || 'ghost' || ''} // 类型 primary 是内部有背景色，ghost 是内部镂空
  size={"small"}
  className={'btn'}
  activeStyle={{}} // 点击反馈的样式
  style={{}}
  onPress={function}
  onPressIn
  onPressOut //  同上
  onShowUnderlay  // 当底层的颜色被显示的时候调用。
  onHideUnderlay // 当底层的颜色被隐藏的时候调用。
/>

const CheckBoxItem = QMCheckBox.checkBoxItem;
const list = [].map((item) => {
  return (
    <CheckBoxItem
      key={item}
      onChange={function}
      defaultChecked={true or false} // 默认选中
      checked={true or false } //  选中状态
     >
     name
    </CheckBoxItem>
  )
});

const RadioItem = QMRadio.RadioItem;
// 与复选框使用方式基本一致
// 单选框和复选框两者的都是出现一个列表的Item， 每一个Item都有自己的回调方法



const QMItem = QMList.Item;
const Row = QMList.Row;
<QMItem
  thumb={string || component} // 
  extra={string} // 右边的内容
  arrow={'horizontal', 'up', 'down', 'empty'}
  onClick={function}
  wrap={} //换行
  activeStyle={} // 自定义活跃的样式
/>


<Row
  onPress={function}
  style={{css}}
/>

<QMSwitch />  // 常规的switch


<QMInputItem // 可与QMList公用，就是每一个input
  type={'bankCard' 'phone' 'password' 'number'}
  value={}
  defaultValue={} // 最初内容
  autoFocus={true}
  onChange={function}
/>

<QMSwipeAction // 包含Item
  left={[]}
  right={[]} // list 右边滑动进行
  autoClose // 
>
<View>
</View>
</QMSwipeAction>

const TabPane = QMTabs.TabPane;

<QMTabs
  onChange={function} // 切换面板回调
  activeKey={key} // 活跃面板的key
  defaultActiveKey // 默认第一个面板
  onTabClick // 点击回调
  swipeable // 滑动切换
  animated  // 动画

>
  <TabPane tab="拜访计划" key="plan">
    <PlanList />
  </TabPane>
  <TabPane tab="拜访记录" key="record">
    <RecordList />
  </TabPane>
</QMTabs>

// QMTabs --> TabPane tab="name" key="keyname"

<QMTab // 小标签，可以用来筛选的
  selected 
  onChange={function}
/>

QMToast.success(content, duration, onClose, mask)  // 提示
QMToast.fail(content, duration, onClose, mask)
QMToast.info(content, duration, onClose, mask)
QMToast.loading(content, duration, onClose, mask)
QMToast.offline(content, duration, onClose, mask)
// conent 内容 duration 时间间隔 onClose 关闭后回调 mask 透明蒙层

<QMDropDown>
  <QMDropDownItem />
</QMDropDown>

<QMPicker
>
<List.Item />
</QMPicker>

<QMIcon name="jiahao"/>

<QMForm.QMTextField />
<QMText />

