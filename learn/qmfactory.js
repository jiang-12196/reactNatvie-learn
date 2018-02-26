import { List } from 'immutable';  //
import {
  FactoryContainer,
  FactoryKit,
  FactoryPullRefreshListView, // 下拉刷新列表, 比较重要，暂时理解为，是一个可以刷新的列表，有一个renderRow, 渲染每一列，
  FactoryPullToRefresh, //下拉刷新的公共组件， 暂时没有用到，不太理解
  FactoryFetch, // 请求数据方法，包含参数组装，返回错误处理
  FactoryScene, // 场景页面，是FactoryContainer中路由场景, 可以设置场景的头部，左右中
  FactoryHeader, // 自定义头部，集成左边返回和右边自定义按钮

  FactoryViewContainer, // 封装viewContainer，用于键盘切换 ， 不太懂啥意思

  FactoryImage, // 图片
  FactoryLoading, 
} from 'qmfactory';



<FactoryContainer 
  routes={{Home: { screen: HomeComponent }}}   // 路由入口 各个场景页面
  initialRoute='Home'  // 初始路由
  backOutPages={Immutable.list //List([])}  // 顶级页面，需要返回到壳子的场景页面，就是说这些页面直接返回到壳子
/>

const [
  width,
  height,
  noop,
  simpleDataSource,
  isAndroid,
  isIos,
  toFixed2，
  toRound2,
  getWebp,
  alert,
] = [
  FactoryKit.Width,
  FactoryKit.Height,
  FactoryKit.noop, // 空方法 （）=> {}
  FactoryKit.simpleDataSource, // 简单数据源，用于初始化 DataList ==> 好像没有怎么用过
  FactoryKit.isAndroid,
  FactoryKit.isIOS,
  FactoryKit.toFixed2, // 截取两位小数
  FactoryKit.toRound2, // 四舍五入两位小数
  FactoryKit.getWebp, // 转换图片到webp格式，更小的图片格式
  FactoryKit.alert,  // alert 弹窗
];


// 根据url拿数据，然后convertData进行数据转化，拿到datalist, 然后进行渲染row，this._renderRow（item）
<FactoryPullRefreshListView
  url={`${QMConst.HOST}/api/wares/new/search/`}  // 下拉刷新时，
  renderRow={this._renderRow } // function
  postBody={postbody}
  postMethod={true} // 默认为get请求，也就是为true的时候， postbody才有意义
  pageSize={10}  // 分页数量
  pageNumStr // 分页参数，估计是每一个分页的key
  convertData={result => {return {res: {dataList: result.res? result.res.data}, err: err}}} //转换接口参数，在渲染前进行数据转换, 返回格式固定  return {res: {dataList: res.}}
  onDataReceive={result => {if(!result.res.length){return [{isEmpty: true}]}} // 扭转数据，当没有数据是返回一个list，其中只有一个{ isEmpty： true}
  duration={100}  // 动画消失时间，一般不用
  style={{ backgroundColor: '#fff' }} // 样式修改
  backToTop={true} // 悬浮到顶的按钮
  renderFlowBtn={} //function 自定义悬浮按钮
  onRefresh={} // function  刷新回调
  onRefreshEnd={} // function 刷新后回调 
  onScroll={} // function 滚动后回调
  onScrollEnd={} // 同上
  isWaitAnimation={false} // 是否等待动画完成
  dataSource={}  // 手动传入数据，应该是不需要请求的数据
/>


const fetchFunction = （day, salemanId）=> {
  FactoryFetch(`${QMConst.FIELD_HOST}/app/field/plan/statistics`, {
    method: 'POST',
    body: JSON.stringify({
      date: day,
      salemanId
    })
  });
}

await fetchFunction(1,2) || fetchFunction(1,2).then()


<FactoryScene
  header={"scene name"} // 场景名字
  renderHeader={this._renderHeader} // function return <FactoryHeader /> 与header不能同时存在
  hasBack={true} // 是否有回退按钮
  onBackHandler={funciton} // 回退回调
  backOut // 退出应用
  style={{}} // css
  bodyStyle={} // 基本没有用过
  backgroundImage // 背景图片
  onMount={function} // 网络恢复时的回调
  loading={true or false}
  overflowLoading // 悬浮loading
  pullToRefresh={true or false} // 下拉刷新，没有使用，基本使用FactoryPullRefreshListView
  onPullToRefresh={function} // 回调  下载刷新的回调
  isChangingView={ture or false} // 是否加一个遮罩，禁止转换页面的时候操作
  onModeChange={} // ios下拉刷新，模式切换
/>

<FactoryHeader
  leftTitle={'toubu'}  //  头部名字
  onLeftMenuPress={funciton} // 点击左边返回回调
  add={true}
  search={true}
  customize={component}  // 加号按钮，搜索按钮，自定义按钮
  onAddPress={funciton}
  onSearchPress={function}
  onCustomizePress={function}
  style={{css}}
/> 

<FactoryViewContainer  // 类似于 container， 包含各个东西的
  onDismissKeyboard={function} //切换键盘回调
/>

<FactoryImage
  source={'http://*.png'} //  图片地址 必须要传的
  errorSrc={} // 加载错误后可以的地址
  style={{css}} 
  alt={'加载提示'}
  width={100}
  height={100}
  onError={function} // 加载错误回调
  onLoad={function} // 加载后回调
  style={}
/>




