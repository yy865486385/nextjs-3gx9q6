import { ReactElement } from "react"
import Router from "next/router"
import HomeLayout from "../components/HomeLayout"

export default function CardHome(){

    return(
        <div>card home page</div>
    )

}

CardHome.getLayout = function getLayout(page: ReactElement) {
    return (
      <HomeLayout>
        {page}
      </HomeLayout>
    )
}