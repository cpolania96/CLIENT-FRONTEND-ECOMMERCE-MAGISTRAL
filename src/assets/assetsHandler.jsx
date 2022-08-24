import IconCart from "./icon/IconCart"
import IconCheck from "./icon/IconCheck"
import IconComillas from "./icon/IconComillas"
import IconDelivery from "./icon/IconDelivery"
import IconEnter from "./icon/IconEnter"
import IconEye from "./icon/IconEye"
import IconMenu from "./icon/IconMenu"
import IconSearch from "./icon/IconSeach"
import IconSecure from "./icon/IconSecure"
import IconUser from "./icon/IconUser"
import IconWallet from "./icon/IconWallet"
import LogoMagistral from "./icon/LogoMagistral"
import IconWhatsapp from "./icon/IconWhatsapp"
import IconArrow from "./icon/IconArrow"

function AssetsHandler() {
    
    const img = {
        indentity: {
            logo: ''
        },
        resources: {
            login: {
                image1: 'https://res.cloudinary.com/devsy44f3/image/upload/v1658308168/Recurso_4_tqnlzh.svg'
            }
        }
    }
    const icon = {
        indentity: {
            logo: <LogoMagistral />
        },
        icons: {
            Arrow: <IconArrow />,
            Check: <IconCheck />,
            Comillas: <IconComillas />,
            Delivery: <IconDelivery />,
            Enter: <IconEnter />,
            Eye: <IconEye />,
            Menu: <IconMenu />,
            Search: <IconSearch />,
            User: <IconUser />,
            Secure: <IconSecure />,
            ShopBag: <IconCart />,
            Wallet: <IconWallet />,
            Whatsapp: <IconWhatsapp />,
        }
    }

  return {img, icon}
}

export default AssetsHandler