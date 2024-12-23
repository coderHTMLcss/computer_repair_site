"use client"

import { useFormContext } from "react-hook-form"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

type DataObj = {
    id: string,
    description: string,
}

type Props<S> = {
    fieldTitle: string,
    nameInScemas: keyof S & string,
    data: DataObj[],
    className?: string,
}

export function SelectWithLabel<S>({
    fieldTitle, nameInScemas, data, className
}: Props<S>) {
    const form = useFormContext()

    return (
        <FormField
            control={form.control}
            name={nameInScemas}
            render={({ field }) => (
                <FormItem>
                    <FormLabel
                        className="text-base"
                        htmlFor={nameInScemas}
                    >
                        {fieldTitle}
                    </FormLabel>

                    <Select
                        {...field}
                        onValueChange={field.onChange}
                    >
                        <FormControl>
                            <SelectTrigger
                                id={nameInScemas}
                                className={`w-full max-w-xs ${className}`}
                            >
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                            {data.map(item => (
                                <SelectItem
                                    key={`${nameInScemas}_${item.id}`}
                                    value={item.id}
                                >
                                    {item.description}
                                </SelectItem>
                            ))}
                        </SelectContent>

                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}