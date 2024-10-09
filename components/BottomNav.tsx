import { View } from "react-native";
import {HomeIcon } from "react-native-heroicons/solid";
import {MagnifyingGlassIcon,ShoppingCartIcon ,HeartIcon,UserIcon} from "react-native-heroicons/outline";
export default function BottomNav(){
    return(
        <View className="flex-row items-center justify-between px-8 space-x-4 mt-4">
            <HomeIcon color="gray" fill="black" />
            <MagnifyingGlassIcon color="gray"  />
            <ShoppingCartIcon color="gray"  />
            <HeartIcon color="gray" />
            <UserIcon color="gray" />
        </View>
    )
}