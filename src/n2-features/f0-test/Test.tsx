import SuperInputText from "../../n1-main/m1-ui/u3-common/Super-Input/SuperInputText";
import SuperCheckbox from "../../n1-main/m1-ui/u3-common/Super-CheckBox/SuperCheckBox";
import SuperButton from "../../n1-main/m1-ui/u3-common/Super-Button/SuperButton";
import SuperEditableSpan from "../../n1-main/m1-ui/u3-common/Super-Editable-Span/SuperEditableSpan";
import {useState} from "react";
import SuperSelect from "../../n1-main/m1-ui/u3-common/Super-Select/SuperSelect";

const arr = ['x', 'y', 'z']


export const Test = () => {
    const [value, setValue] = useState<string>('')
    const [selections, onChangeOption] = useState(arr[1])

    return (
        <>
            <SuperInputText/>
            <SuperCheckbox/>
            <SuperButton>
                Click here
            </SuperButton>
            <SuperEditableSpan
                value={value}
                onChangeText={setValue}
                spanProps={{children: value ? undefined : 'enter text...'}}
            />
            <SuperSelect
                options={arr}
                value={selections}
                onChangeOption={onChangeOption}
            />
        </>
    )
}