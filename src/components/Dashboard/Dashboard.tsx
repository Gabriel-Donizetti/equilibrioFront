import style from "./styles.module.scss"

import ResponsiveDrawer from "../Drawer/Drawer"

export function Dashboard() {
    return (
        <div id={style.container}>
            <ResponsiveDrawer />
        </div>
    )
}