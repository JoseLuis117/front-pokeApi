"use client"
import { Card, NextUIProvider, Skeleton } from "@nextui-org/react";

export default function Loading() {
    const miArray = new Array(20).fill(' ');
    return (
        <NextUIProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {miArray.map((_,index) => (
                    <Card key={index} className="space-y-5 p-4 bg-gray-800 h-[415px] max-w-[270px] w-full" radius="lg">
                        <div className="flex justify-center w-full">
                            <Skeleton className="w-3/5 rounded-lg h-4 mt-1 bg-gray-700">
                                <div className="h-3 w-3/5 rounded-lg "></div>
                            </Skeleton>
                        </div>
                        <Skeleton className="rounded-lg bg-gray-700">
                            <div className="h-60 rounded-lg bg-default-300"></div>
                        </Skeleton>
                        <div className="flex justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-3 gap-4 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small">
                            <Skeleton className="w-1/4 h-6 rounded-lg bg-gray-700">
                                <div className="h-3 w-1/4 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="w-1/4 rounded-lg h-6 bg-gray-700">
                                <div className="h-3 w-1/4 rounded-lg bg-default-200"></div>
                            </Skeleton>
                        </div>
                    </Card>
                ))}
            </div>

        </NextUIProvider>
    );
}
