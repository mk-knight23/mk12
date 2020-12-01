import React from "react";
import Clock from "./Clock";
import MemeGenerator from "./MemeGenerator";
import Register from "./Register";
import ContactForm from "./ContactForm";
import Header from "./Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>MK KAzi</h2>

      <Clock />
      <MemeGenerator />
      <Register />
      <Header />
      <ContactForm />
    </div>
  );
}
