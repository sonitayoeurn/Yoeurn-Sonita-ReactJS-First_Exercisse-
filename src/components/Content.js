import Main from "./Main";
import React from 'react'
import { Container } from "react-bootstrap";


export default function Content() {
  return (
    <Container style={{display: "flex", justifyContent: "space-evenly", marginTop: "60px"}}>
        <Main/>
        <Main/>
        <Main/>
    </Container>
  )
}
