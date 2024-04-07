import React, { useCallback } from 'react';
import { Button, Input, Spinner, baseStyles, useDisclosure } from "@nextui-org/react";
import TextGradient from '../textGradient';
import { Select, SelectItem } from '@nextui-org/react';
import './style.css';
import SocialMedia from '../modal/SocialMedia';
import Dropzone from 'react-dropzone'
import { Regiones, UpdateUserData, User } from '@/lib/types';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { S3Client, S3ClientConfig, PutObjectCommand } from '@aws-sdk/client-s3';

const EditProfile = ({ userData, regiones, token }: { userData: User, regiones: Regiones[], token:string|undefined }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const onSubmit = async (data: UpdateUserData) => {
        setUpdate(true)
        console.log("Dataa")
        data.id = userData.id;
        data.token = token;
        data.regionId = parseInt(data.regionId);
        const credenciales: S3ClientConfig = {
            credentials: {
                accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID ? process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID : '',
                secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY ? process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY : ''
            },
        }
        const client = new S3Client({
            region: 'us-east-1',
            credentials: credenciales.credentials
        });
        if (profilePicture) {
            const extension = profilePicture.type.split('/')[1].split('+')[0];
            const key = `usuarios/profilePictures/${data.id}.${extension}`;
            const commandPutProfilePic = new PutObjectCommand({
                Bucket: "bucket-poke-api",
                Key: key,
                Body: profilePicture,
                ACL:'public-read',

            })
            const outputProfilePic = await client.send(commandPutProfilePic);
            console.log("Profile PIC")
            console.log(outputProfilePic)
            data.profilePicture = key;
        }

        if (banerPicture) {
            const extension = banerPicture.type.split('/')[1].split('+')[0];
            const key = `usuarios/banerPictures/${data.id}.${extension}`;
            
            const commandPutBanerPic = new PutObjectCommand({
                Bucket: "bucket-poke-api",
                Key: key,
                Body: banerPicture,
                ACL:'public-read',
            })
            const outputBanerPic = await client.send(commandPutBanerPic);
            console.log("Baner PIC")
            console.log(outputBanerPic)
            data.bannerPicture = key;
        }



        const req = await fetch(`http://localhost:3000/api/updateUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const res = await req.json();
        console.log(res);
        setUpdate(false)
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
            title: 'Cambios guardados correctamente',
            padding: '10px 20px',
        });
    }
    const [profilePicture, setProfilePicture] = React.useState<File | undefined>(undefined)
    const [banerPicture, setBanerPicture] = React.useState<File | undefined>(undefined)
    const [imageError, setImageError] = React.useState<string | undefined>(undefined)
    const [update, setUpdate] = React.useState(false)
    const onDropProfile = useCallback((acceptedFiles: any[]) => {
        const validate2 = acceptedFiles[0].type === 'image/svg+xml' ? true : false;
        const validate = acceptedFiles[0].type.split('/')[0] === 'image' ? true : false;
        if (acceptedFiles[0].size < 5000000 && validate && !validate2) {
            console.log(acceptedFiles[0])
            setProfilePicture(acceptedFiles[0])
        }else{
            setImageError('El archivo debe ser una imagen')
        }
    }, [])
    const onBannerProfile = useCallback((acceptedFiles: any[]) => {
        const validate2 = acceptedFiles[0].type === 'image/svg+xml' ? true : false;
        const validate = acceptedFiles[0].type.split('/')[0] === 'image' ? true : false;
        if (acceptedFiles[0].size < 5000000 && validate && !validate2) {
            setBanerPicture(acceptedFiles[0])
        }else{
            setImageError('El archivo debe ser una imagen')
        }
    }, [])
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<any>();
    return (
        <div className='mt-4'>
            <TextGradient text="Editar Perfil" typeText="h1" position="center" fontSize="2xl" />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input {...register('name')} name='name' key="outside" label="Nuevo Nombre" type="text" labelPlacement='outside' description='Ejemplo: Pikachu47'
                    classNames={{
                        inputWrapper: 'bg-gray-700 text-white data-[hover=true]:bg-gray-600 group-data-[focus=true]:bg-gray-600',
                        label: 'font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent group-data-[filled-within=true]:text-none',
                        description: 'font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent',
                        input: 'group-data-[has-value=true]:text-white',
                    }}

                />
                <Select
                    {...register('favouritePokemon')}
                    name='favouritePokemon'
                    items={userData.pokemons}
                    label="Pokemon favorito"
                    placeholder='Selecciona uno de tus pokemones'
                    classNames={{
                        trigger: 'bg-gray-700 data-[hover=true]:bg-gray-600',
                        label: 'text-white font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent group-data-[filled=true]:text-none',
                        value: 'text-white group-data-[has-value=true]:text-white',
                        popoverContent: 'bg-gray-700 text-white',
                    }}
                >
                    {(pokemons) => <SelectItem key={pokemons.id} classNames={{
                        title: 'text-white',
                        selectedIcon: 'text-white',
                    }}
                        className='data-[selectable=true]:focus:bg-gray-600 '
                    >{pokemons.nombre}</SelectItem>}
                </Select>
                <Select
                    {...register('regionId')}
                    name='regionId'
                    items={regiones}
                    label="Región"
                    placeholder='Selecciona tu región'
                    classNames={{
                        trigger: 'bg-gray-700 data-[hover=true]:bg-gray-600',
                        label: 'text-white font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent group-data-[filled=true]:text-none',
                        value: 'text-white group-data-[has-value=true]:text-white',
                        popoverContent: 'bg-gray-700 text-white',
                    }}
                >
                    {(regiones) => <SelectItem key={regiones.id} classNames={{
                        title: 'text-white',
                        selectedIcon: 'text-white',
                    }}
                        className='data-[selectable=true]:focus:bg-gray-600 '
                    >{regiones.nombre}</SelectItem>}
                </Select>
                <div className='w-full'>
                    <Button onPress={onOpen} color="primary" variant='shadow' className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white'>Agregar redes sociales</Button>
                </div>
                <SocialMedia isOpen={isOpen} onOpenChange={onOpenChange} userId={userData.id} />

                <div className='file-upload-form'>
                    <label className="file-upload-label">
                        <Dropzone onDrop={onDropProfile}>
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} className="file-upload-design">
                                    {profilePicture ?
                                        <img src={profilePicture && URL.createObjectURL(profilePicture)} alt="Profile Picture" />
                                        :
                                        <>
                                            <input {...getInputProps()} name='profilePicture' type="file" onClick={(event) => event.preventDefault()}/>
                                            <svg viewBox="0 0 640 512" height="1em">
                                                <path
                                                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                                                ></path>
                                            </svg>
                                            <p className='text-white text-center'>Foto de perfil</p>
                                            <span className='text-center browse-button bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white hover:from-cyan-500 hover:to-fuchsia-500'>Busca tu imagen</span>
                                        </>
                                    }
                                </div>
                            )}
                        </Dropzone>
                    </label>
                    <label className="file-upload-label">
                        <Dropzone onDrop={onBannerProfile}>
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} className="file-upload-design">
                                    {banerPicture ?
                                        <img src={banerPicture && URL.createObjectURL(banerPicture)} alt="Profile Picture" />
                                        :
                                        <>
                                            <input {...getInputProps()} name='banerPicture' type="file" onClick={(event) => event.preventDefault()}/>
                                            <svg viewBox="0 0 640 512" height="1em">
                                                <path
                                                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                                                ></path>
                                            </svg>
                                            <p className='text-white text-center'>Foto de portada</p>
                                            <span className='text-center browse-button bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white hover:from-cyan-500 hover:to-fuchsia-500'>Busca tu imagen</span>
                                        </>}
                                </div>
                            )}
                        </Dropzone>
                    </label>
                </div>
                {imageError && <div className='w-full'><p className='text-red-500 text-center'>{imageError}</p></div>}
                <Button disabled={update?true:false} type="submit" color="primary" variant='shadow' fullWidth className='my-4 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white'>
                    {update? <Spinner size='sm' classNames={{
                        label: 'text-white text-sm'
                    }} label="Actualizando" color="default" labelColor="foreground"/> : 'Guardar Cambios'}
                </Button>
            </form>
        </div>
    );
}
export default EditProfile;