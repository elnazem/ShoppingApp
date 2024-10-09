import { Text, View } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

export default function TopNav() {
  return (
        <View className="flex-row  items-center px-2 pb-4 border-b border-gray-200  ">
        <ArrowLeftIcon color="gray" />
        <View className="flex-1 items-center">
          <Text className=" text-gray-600 text-sm font-bold uppercase px-8">
            Styles based on your preferences
          </Text>
        </View>
      </View>
     
  );
}
