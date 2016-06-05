import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cells: {
    marginTop: V.weuiCellssMarginTop,
    backgroundColor: V.weuiCellBg,
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: V.weuiCellBorderColor
  }
})
const Cells = (props) => {
  const { children, style, ...others } = props
  return (
    <View style={[styles.cells, style]} {...others}>
      {children}
    </View>
  )
}
Cells.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  others: PropTypes.object
}

export default Cells
