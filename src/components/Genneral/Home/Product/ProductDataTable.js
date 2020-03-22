import React, { Component } from "react";
import { View } from "react-native";
import { DataTable } from 'react-native-paper';

class ProductDataTable extends Component {
  render() {
    return (
      <View>
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell>Thương hiệu</DataTable.Cell>
            <DataTable.Cell>Some By Mi</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Danh mục</DataTable.Cell>
            <DataTable.Cell>Son</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Xuất xứ</DataTable.Cell>
            <DataTable.Cell>Hàn Quốc</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>SKU</DataTable.Cell>
            <DataTable.Cell>3299493999399</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Trọng lượng</DataTable.Cell>
            <DataTable.Cell>123g</DataTable.Cell>
          </DataTable.Row>
      </DataTable>
      </View>
    );
  }
}
export default ProductDataTable;