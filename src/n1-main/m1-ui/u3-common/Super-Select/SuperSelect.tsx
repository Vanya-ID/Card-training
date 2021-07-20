import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import ss from './super-select.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}
const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: any[] = [options?.map((opt, index)=>{
        return <option className={ss.option} key={index}>{opt}</option>
    })]; // map options with key
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
        if (onChange) {
            onChange(e)
        }
        // onChange, onChangeOption
    }

    return (
        <select className={ss.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
