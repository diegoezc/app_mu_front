import {TextInput} from "react-native";
import tw from "twrnc";

export const CustomInput= ({
    labelName='',
    stylesTW =''
                           })=>{
    return (
        <TextInput style={tw` text-gray-500 border-2 border-gray-300 rounded-3xl h-12 pl-3 w-80 mt-4 bg-white ${stylesTW}`}
                   placeholder={labelName}
        />
    )

}