"use client"

import { useFormContext } from "react-hook-form"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { Checkbox } from '@/components/ui/checkbox'

type Props<S> = {
    fieldTitle: string,
    nameInSchemas: keyof S & string,
    message: string,
}

export function CheckboxWithLabel<S>({
    fieldTitle, nameInSchemas, message
}: Props<S>) {
    const form = useFormContext()

    return (
        <FormField
            control={form.control}
            name={nameInSchemas}
            render={({ field }) => (
                <FormItem className="w-full flex items-center gap-2">
                    <FormLabel
                        className="text-base w-1/3 mt-2"
                        htmlFor={nameInSchemas}
                    >
                        {fieldTitle}
                    </FormLabel>

                    <div className="flex items-center gap-2">
                        <FormControl>
                            <Checkbox
                                id={nameInSchemas}
                                {...field}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        </FormControl>
                        {message}
                    </div>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}