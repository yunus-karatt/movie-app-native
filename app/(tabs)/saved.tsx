import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const saved = () => {
  return (
    <View className="bg-primary items-center justify-center  flex-1 px-10 ">
          <View className="flex justify-center items-center flex-1 flex-col gap-5">
            <Image source={icons.save} className="size-10" tintColor={"#fff"}/>
            <Text className="text-gray-500 text-base" >Save</Text>
          </View>
        </View>
  )
}

export default saved