"use client"

import { useFormContext } from "react-hook-form"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { Textarea } from "@/components/ui/textarea"
import { TextareaHTMLAttributes } from "react"

type Props<S> = {
    fieldTitle: string,
    nameInSchemas: keyof S & string,
    className?: string,
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextAreaWithLabel<S>({
    fieldTitle, nameInSchemas, className, ...props
}: Props<S>) {
    const form = useFormContext()

    return (
        <FormField
            control={form.control}
            name={nameInSchemas}
            render={({ field }) => (
                <FormItem>
                    <FormLabel
                        className="text-base mb-2"
                        htmlFor={nameInSchemas}
                    >
                        {fieldTitle}
                    </FormLabel>

                    <FormControl>
                        <Textarea
                            id={nameInSchemas}
                            className={className}
                            {...props}
                            {...field}
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}