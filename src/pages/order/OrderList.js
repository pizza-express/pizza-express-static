import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List, Card, Form } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { FormattedMessage } from 'umi/locale';
import styles from './OrderList.less';

@connect(({ order, loading }) => ({
  order,
  loading: loading.models.dishes,
}))
@Form.create()
class DishesList extends PureComponent {
  state = {};

  formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'order/fetch',
      payload: {
        pagesize: 5,
        pagenumber: 0,
      },
    });
  }

  render() {
    const {
      order: { list },
      loading,
    } = this.props;
    console.log(list);

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 5,
      total: 50,
    };

    const ListContent = ({ data }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentItem}>
          <span>
            <FormattedMessage id="order.costPrice" defaultMessage="成本价" />
          </span>
          <p>{data.costPrice}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>
            <FormattedMessage id="order.salePrice" defaultMessage="零售价" />
          </span>
          <p>{data.salePrice}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>
            <FormattedMessage id="order.status" defaultMessage="状态" />
          </span>
          <p>{data.status}</p>
        </div>
      </div>
    );
    const ListID = ({ data }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentID}>
          <span>
            <FormattedMessage id="order.id" defaultMessage="ID" />
          </span>
          <p>{data.uuid}</p>
        </div>
      </div> //
    );
    return (
      <PageHeaderWrapper>
        <div className={styles.standardList}>
          <Card
            className={styles.listCard}
            bordered={false}
            title="订单列表"
            style={{ marginTop: 24 }}
            bodyStyle={{ padding: '0 32px 40px 32px' }}
          >
            <List
              size="large"
              rowKey="id"
              loading={loading}
              pagination={paginationProps}
              dataSource={list}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<ListID data={item} />}
                    title={item.detail}
                    description={item.address}
                  />
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default DishesList;
