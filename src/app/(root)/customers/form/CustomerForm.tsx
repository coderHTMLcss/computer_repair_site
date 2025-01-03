"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"

import InputWithLabel from "@/components/inputs/InputsWithLabel"
import { SelectWithLabel } from "@/components/inputs/SelectWithLabel"
import { TextAreaWithLabel } from "@/components/inputs/TextAreaLabel"

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

import { RegionsArray } from "@/constants/RegionsArray"

import { insertCustomerSchema, type insertCustomerSchemaType, type selectCustomerSchemaType } from "@/zod-schemas/customer"
import { useEffect, useState } from "react"
import { CheckboxWithLabel } from "@/components/inputs/CheckBoxWithLabel"



type Props = {
    customer?: selectCustomerSchemaType,
}

export default function CustomerForm({ customer }: Props) {
    const [isClient, setIsClient] = useState(false);
    const { getPermission, isLoading } = useKindeBrowserClient()
    const isManager = !isLoading && getPermission('manager')?.isGranted
    console.log(isManager);

    const defaultValues: insertCustomerSchemaType = {
        id: customer?.id ?? 0,
        firstName: customer?.firstName ?? '',
        lastName: customer?.lastName ?? '',
        address1: customer?.address1 ?? '',
        address2: customer?.address2 ?? '',
        city: customer?.city ?? '',
        state: customer?.state ?? '',
        zip: customer?.zip ?? '',
        phone: customer?.phone ?? '',
        email: customer?.email ?? '',
        notes: customer?.notes ?? '',
        active: customer?.active ?? true,
    }
    const form = useForm<insertCustomerSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(insertCustomerSchema),
        defaultValues,
    })

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    async function submitForm(data: insertCustomerSchemaType) {
        console.log(data)
    }


    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <div>
                <h2 className="text-2xl font-bold">
                    {customer?.id ? "Edit" : "New"} Customer {customer?.id ? `#${customer.id}` : "Form"}
                </h2>
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitForm)}
                    className="flex flex-col md:flex-row gap-4 md:gap-8"
                >
                    <div className="flex flex-col gap-4 w-full max-w-xs">

                        <InputWithLabel<insertCustomerSchemaType>
                            fieldTitle="First Name"
                            nameInScemas="firstName"
                        />

                        <InputWithLabel<insertCustomerSchemaType>
                            fieldTitle="Last Name"
                            nameInScemas="lastName"
                        />

                        <InputWithLabel<insertCustomerSchemaType>
                            fieldTitle="Address 1"
                            nameInScemas="address1"
                        />

                        <InputWithLabel<insertCustomerSchemaType>
                            fieldTitle="Address 2"
                            nameInScemas="address2"
                        />

                        <InputWithLabel<insertCustomerSchemaType>
                            fieldTitle="City"
                            nameInScemas="city"
                        />

                        <SelectWithLabel<insertCustomerSchemaType>
                            fieldTitle="State"
                            nameInScemas="state"
                            data={RegionsArray}
                        />

                    </div>

                    <div className="flex flex-col gap-4 w-full max-w-xs">

                        <InputWithLabel<insertCustomerSchemaType>
                            fieldTitle="Zip Code"
                            nameInScemas="zip"
                        />

                        <InputWithLabel<insertCustomerSchemaType>
                            fieldTitle="Email"
                            nameInScemas="email"
                        />

                        <InputWithLabel<insertCustomerSchemaType>
                            fieldTitle="Phone"
                            nameInScemas="phone"
                        />

                        <TextAreaWithLabel<insertCustomerSchemaType>
                            fieldTitle="Notes"
                            nameInSchemas="notes"
                            className="h-40 resize-none"
                        />

                        {isLoading ? <p>Loading...</p> : isManager && customer?.id ? (
                            <CheckboxWithLabel<insertCustomerSchemaType>
                                fieldTitle="Active"
                                nameInSchemas="active"
                                message="Yes"
                            />) : null}

                        <div className="flex gap-2">
                            <Button
                                type="submit"
                                className="w-3/4"
                                variant="default"
                                title="Save"
                            >
                                Save
                            </Button>

                            <Button
                                type="button"
                                variant="destructive"
                                title="Reset"
                                onClick={() => form.reset(defaultValues)}
                            >
                                Reset
                            </Button>
                        </div>

                    </div>

                </form>
            </Form>
        </div >
    )
}

