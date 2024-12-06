import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
    Image,
    Platform,
    SafeAreaView,
    Text,
    TextInput,
    View,
} from "react-native";
import {
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5">
            {/*Header*/}
            <View className="px-2">
                <View
                    className={`${
                        Platform.OS === "android" && "pt-10"
                    } flex-row pb-3 items-center mx-2 gap-x-2 `}
                >
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru",
                        }}
                        className="size-7 bg-gray-300 rounded-full"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">
                            Delivery Ahora!
                        </Text>
                        <Text className="font-bold text-xl">
                            Ubicacion Actual
                            <ChevronDownIcon size={20} color="#00CC88" />
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CC88" />
                </View>
                {/*Search */}
                <View className="flex-row items-center gap-x-2 pb-2 mx-4 ">
                    <View className="flex-row items-center  gap-x-2 flex-1 bg-gray-200 p-3 ">
                        <MagnifyingGlassIcon size={20} color="gray" />
                        <TextInput
                            className="w-full"
                            placeholder="Restaurantes y Comida"
                            keyboardType="default"
                        />
                    </View>
                    <AdjustmentsHorizontalIcon color="#00CC88" />
                </View>
            </View>
        </SafeAreaView>
    );
}
