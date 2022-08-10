import IconCart from "./icon/IconCart"
import IconMenu from "./icon/IconMenu"
import IconSearch from "./icon/IconSeach"
import IconUser from "./icon/IconUser"
import LogoMagistral from "./icon/LogoMagistral"

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
            Menu: <IconMenu />,
            Search: <IconSearch />,
            User: <IconUser />,
            ShopBag: <IconCart />
        }
    }

  return {img, icon}
}

export default AssetsHandler