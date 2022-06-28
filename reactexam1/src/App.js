import React from "react";
import Container from "./Container";
import Counter from "./Counter";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

function App(){
    const counterProps = {
        a : 1,
        b : 2,
        initialValue : 5
    }

    return (
        <Container>
            <div>
                <MyHeader/>
                <Counter {...counterProps}/>
                <MyFooter/>
            </div>
        </Container>
    )
}

export default App;