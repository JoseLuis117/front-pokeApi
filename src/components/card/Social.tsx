"use client"
import { Tooltip } from '@nextui-org/react';
import './style.css';
import { socialNetworks } from '@/lib/types';
import { useEffect, useState } from 'react';
export default function Social({ socialNetworks }: { socialNetworks: socialNetworks[] }) {
    const [urls, setUrls] = useState({
        facebook: '',
        instagram: '',
        twitter: ''
    });
    const [userName, setUserName] = useState({
        facebook: '',
        instagram: '',
        twitter: ''
    })
    function getUserNameSocialNetwork(url: string, name: string) {
        const match = url?.match(/(?:instagram\.com|twitter\.com|facebook\.com)\/([^/?]+)/);
        setUserName((prevData) => ({
            ...prevData,
            [name]: match ? match[1] : ''
        }))
    }
    useEffect(() => {
        function getSocialNetworks() {
            socialNetworks?.map((social, index) => {
                setUrls((prevData) => ({
                    ...prevData,
                    [social.name]: social.url
                }))
                getUserNameSocialNetwork(social.url, social.name)
            })
        }
        getSocialNetworks();
    }, [])
    return (
        <div className="card2 w-full flex justify-center mt-6">
            <Tooltip
                placement={"bottom"}
                content={userName.instagram !== '' ? '@ ' + userName.instagram : '@UserName'}
                color="danger"
                closeDelay={0}
            >
                <a className="socialContainer containerOne" href={urls.instagram !== '' ? urls.instagram : '#'} target='_blank'>
                    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
                        <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                        ></path>
                    </svg>
                </a>
            </Tooltip>
            <Tooltip
                placement={"bottom"}
                content={userName.twitter !== '' ? '@ ' + userName.twitter : '@UserName'}
                color="primary"
                closeDelay={0}
            >
                <a className="socialContainer containerTwo" href={urls.twitter !== '' ? urls.twitter : '#'} target='_blank'>
                    <svg viewBox="0 0 16 16" className="socialSvg twitterSvg">
                        <path
                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                        ></path>
                    </svg>
                </a>
            </Tooltip>
            <Tooltip
                placement={"bottom"}
                content={userName.facebook !== '' ? '@ ' + userName.facebook : '@UserName'}
                color="primary"
                closeDelay={0}
            >
                <a className="socialContainer containerThree" href={urls.facebook !== '' ? urls.facebook : '#'} target='_blank'>
                    <svg className="socialSvg linkedin" fill='#fff' xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                </a>
            </Tooltip>
        </div>

    )
}