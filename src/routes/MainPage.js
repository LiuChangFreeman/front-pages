import React,{ PureComponent } from 'react';
import {
  Toast,WingBlank,WhiteSpace,
  TextareaItem,Card,Button,Flex,List,Popover,
  Icon,Modal,PullToRefresh,NoticeBar
} from 'antd-mobile';
import {connect} from 'dva'
const Item = List.Item;

@connect(({ util}) => ({
  util,
}))
class MainPage extends PureComponent {

  constructor(props) {
    super(props);
    this.listTimer();
  }

  componentDidMount() {
    this.refresh();
  }

  listTimer = () => {
    const that = this;
    setInterval(() => {
      const { dispatch } = that.props;
      dispatch({
        type: 'util/getList',
        payload: {},
      });
    }, 60000);
  };

  refresh = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'util/getList',
      payload: {},
    });
  };

  render() {
    const {util} = this.props;
    const {list,time_list}=util;
    return (
      <div style={{
        height:"50vh",width:"100vw",
        display:"table-cell",verticalAlign:"middle",
        textAlign: "center"
      }}>
        <PullToRefresh
          distanceToRefresh={75}
          onRefresh={() => {
            this.refresh();
          }}
        >
          wuhan2020
          {
            time_list&&
            <NoticeBar mode="link">
              {`数据更新于${time_list}`}
            </NoticeBar>
          }
          {
            time_list&&
            <WingBlank size="lg">
              <List className="my-list">
                {
                  list.map((item, index) => {
                    return (
                      <Item
                        extra={
                          <span style={{fontSize:14}}>
                          {item.modified}
                          </span>
                        }
                        align="top"
                        multipleLine
                      >
                      </Item>
                    )
                  })
                }
              </List>
            </WingBlank>
          }
        </PullToRefresh>
      </div>
    );
  }
}
export default connect()(MainPage);
