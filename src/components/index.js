import { Fragment } from "react";
import Header from "./Header";
import InnerContainer from "./InnerContainer";

const MainComponent=()=>{
    return(
        <Fragment>
            <nav className="py-4 2xl:px-6">
                <Header/>
            </nav>

            <main className="py-12 2xl:px-6">
                <InnerContainer/>
            </main>
        </Fragment>
    )
}
export default MainComponent;