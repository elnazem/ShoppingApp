import { FlatList, ImageSourcePropType, SafeAreaView, Text, View } from "react-native";
import TopNav from "@/components/TopNav";
import ProductItem from "@/components/ProductItem";
import BottomNav from "@/components/BottomNav";
export default function RootLayout() {
  type itemType={
    key:string,
    src:ImageSourcePropType|undefined
  }
  const items :itemType[]=[
    {"key":"1", "src":require("../assets/images/1.avif")},
    {"key":"2", "src":require("../assets/images/2.avif")},
    {"key":"3", "src":require("../assets/images/3.avif")},
    {"key":"4", "src":require("../assets/images/4.avif")}
  ]
  return (
    <SafeAreaView>

      {/* top nav */}
      <TopNav />

      {/* num of items */}
      <View className="flex items-center">
        <Text className="text-xs text-gray-400 py-4">60 items found</Text>
      </View>
      
      {/*items */}

      <View className="flex-row items-center justify-between px-4">
        <FlatList data={items}
              keyExtractor={(item) => item.key}
          renderItem={({item}) => <ProductItem source={item.src}/>}
          numColumns={2}
          />
      </View>

      <BottomNav/>
    </SafeAreaView>
  );
}
