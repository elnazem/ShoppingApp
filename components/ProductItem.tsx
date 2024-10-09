import { View, Image, Text, ImageSourcePropType } from "react-native";
type ItemPropType={
    source:ImageSourcePropType|undefined
}
export default function ProductItem(props:ItemPropType) {
    return (
        <View className="flex-1 m-2">
            <Image source={props.source} className="w-full h-56"/>
            <Text className="text-sm font-bold text-gray-800">$37</Text>
            <Text className="text-xs text-gray-500">Nunc amet, vehicula, Morbi turpis dui cursus sed elit. eget  </Text>
        </View>
    )
}