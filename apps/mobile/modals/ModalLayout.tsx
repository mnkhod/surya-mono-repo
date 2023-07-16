import { View, Text } from 'react-native'
import React from 'react'

export default function ModalLayout({ children }) {
  return (
    <View>
      <View className="">
        <Text>ModalLayout</Text>
      </View>
      <View className='flex-1 z-10'>
        {children}
      </View>
    </View>
  )
}
