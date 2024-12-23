"use client"

import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputHTMLAttributes } from 'react';

type Props<S> = {
    fieldTitle: string;
    nameInScemas: keyof S & string;
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputWithLabel = <S,>({ fieldTitle, nameInScemas, className, ...props }: Props<S>) => {
    const form = useFormContext();
    console.log(form);

    return (
        <FormField
            control={form.control}
            name={nameInScemas}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className='text-base' htmlFor={nameInScemas}>
                        {fieldTitle}
                    </FormLabel>
                    <FormControl>
                        <Input
                            id={nameInScemas}
                            className={`w-full max-w-xs disabled:
                         text-blue-500 dark:disabled:text-green-500 
                         disabled:opacity-75 ${className}`}
                            {...props}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default InputWithLabel;
