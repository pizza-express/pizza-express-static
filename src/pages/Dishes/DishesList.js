import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List, Card, Form } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { FormattedMessage } from 'umi/locale';
import styles from './DishesList.less';

@connect(({ dishes, loading }) => ({
  dishes,
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
      type: 'dishes/fetch',
      payload: {
        pagesize: 5,
        pagenumber: 0,
      },
    });
  }

  render() {
    const {
      dishes: { list },
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
            <FormattedMessage id="disehs.name" defaultMessage="Name" />
          </span>
          <p>{data.name}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>
            <FormattedMessage id="dishes.salePrice" defaultMessage="SalePrice" />
          </span>
          <p>{data.salePrice}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>
            <FormattedMessage id="dishes.status" defaultMessage="Status" />
          </span>
          <p>{data.status}</p>
        </div>
      </div>
    );
    const ListID = ({ data }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentID}>
          <span>
            <FormattedMessage id="dishes.id" defaultMessage="ID" />
          </span>
          <p>{data.id}</p>
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
                <List.Item
                  actions={[
                    <a
                      onClick={e => {
                        e.preventDefault();
                        this.showEditModal(item);
                      }}
                    >
                      编辑
                    </a>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<ListID data={item} />}
                    title={item.name}
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
