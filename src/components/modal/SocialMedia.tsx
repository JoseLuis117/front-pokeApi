import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, Link } from "@nextui-org/react";
import FacebookGrayIcon from "./FacebookIcon";
import TwitterIcon from "./TwitterIcon";
import InstagramIcon from "./InstagramIcon";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const SocialMedia = ({ isOpen, onOpenChange, userId }: { isOpen: any, onOpenChange: any, userId: string }) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<any>();
    const onSubmit = async (data: any) => {
        console.log(data)
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            background: 'rgb(31 41 55)',
            color: '#fff',
        });
        toast.fire({
            icon: 'success',
            title: 'Redes sociales guardadas correctamente',
            padding: '10px 20px',
        });
    }
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
            className="bg-gray-800 text-white"
            classNames={{
                closeButton: 'hover:bg-red-500 text-white',
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Agrega tus redes sociales</ModalHeader>
                        <ModalBody>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input {...register('facebook')} name="facebook" label="Facebook" type="text" labelPlacement='outside' description='Ejemplo: https://www.facebook.com/joseluis.sanchezmendoza.712/'
                                    classNames={{
                                        inputWrapper: 'bg-gray-700 text-white data-[hover=true]:bg-gray-600 group-data-[focus=true]:bg-gray-600',
                                        label: 'font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent group-data-[filled-within=true]:text-none',
                                        description: 'font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent',
                                        input: 'group-data-[has-value=true]:text-white',
                                    }}
                                    endContent={<FacebookGrayIcon />}
                                />
                                <Input {...register('twitter')} name="twitter" label="Twitter" type="text" labelPlacement='outside' description='Ejemplo: https://twitter.com/Luis24122797'
                                    classNames={{
                                        inputWrapper: 'bg-gray-700 text-white data-[hover=true]:bg-gray-600 group-data-[focus=true]:bg-gray-600',
                                        label: 'font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent group-data-[filled-within=true]:text-none',
                                        description: 'font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent',
                                        input: 'group-data-[has-value=true]:text-white',
                                    }}
                                    endContent={<TwitterIcon />}
                                />
                                <Input {...register('instagram')} name="instagram" label="Instagram" type="text" labelPlacement='outside' description='Ejemplo: https://www.instagram.com/jose_luis_sanchez_117/'
                                    classNames={{
                                        inputWrapper: 'bg-gray-700 text-white data-[hover=true]:bg-gray-600 group-data-[focus=true]:bg-gray-600',
                                        label: 'font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent group-data-[filled-within=true]:text-none',
                                        description: 'font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent',
                                        input: 'group-data-[has-value=true]:text-white',
                                    }}
                                    endContent={<InstagramIcon />}
                                />
                                <div className="flex gap-4 justify-end">
                                    <Button onPress={onClose} color="danger" variant='shadow' className='my-4 text-white'>Cerrar</Button>
                                    <Button onPress={onClose} type="submit" color="primary" variant='shadow' className='my-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white'>Guardar</Button>
                                </div>
                            </form>
                        </ModalBody>
                        {/* <ModalFooter>
                            <Button color="danger" variant="ghost" onPress={onClose}>
                                Cerrar
                            </Button>
                            <Button color="success" onPress={onClose} variant="shadow" className="text-white">
                                Guardar Redes
                            </Button>
                        </ModalFooter> */}
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
export default SocialMedia;