import React from 'react';
import Editor from './Editor';


class Main extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            html: `<center>
          <img src="https://www.araioflight.com/wp-content/uploads/2019/11/hello-in-different-languages-world.jpg" />
          <h1>Hello</h1>
          <h2>I am Live Review of the code you type in the Adjecent Boxes.</h2>
        </center>`,
            css: `h1 {
               font-family: sans-serif;
               color: blue;
           }
           h2 {
               color: green;
           }
           img {
               width: 100%;
               height: auto;
               border-radius: 20px;
           }`,
            srcDoc: '',
        };
    }

    handleHtmlChange = (value) =>
    {
        this.setState({
            ...this.state,
            html: value,
            srcDoc: `<html>
      <body>${value}<body>
      <style>${this.state.css}<style>
    <html>`,
        });
    };
    handleCssChange = (value) =>
    {
        this.setState({
            ...this.state,
            css: value,
            srcDoc: `<html>
      <body>${this.state.html}<body>
      <style>${value}<style>
    <html>`,
        });
    };
    componentDidMount()
    {
        this.setState({
            srcDoc: `<html>
      <body>${this.state.html}<body>
      <style>${this.state.css}<style>
    <html>`,
        });
    }

    render()
    {
        const { html, css, srcDoc } = this.state;

        return (
            <>
                <section className="flex my-8 flex-col items-center lg:flex-row lg:justify-between lg:items-stretch">
                    <div className="w-3/6 lg:w-small">
                        <Editor
                            language="xml"
                            displayName="html"
                            value={html}
                            onChange={this.handleHtmlChange}
                        />
                        <Editor
                            language="css"
                            displayName="css"
                            value={css}
                            onChange={this.handleCssChange}
                        />
                    </div>
                    <div className="w-5/12 lg:w-small">
                        <div className="bg-gray-400 text-white py-2 flex justify-between px-4 rounded-t-lg">
                            <div className="flex items-center">
                                <div className="mx-1 w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="mx-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="mx-1 w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <h4 className="font-semibold uppercase">Output</h4>
                        </div>
                        <iframe
                            srcDoc={srcDoc}
                            title="output"
                            sandbox="allow-scripts"
                            frameBorder="0"
                            width="100%"
                            height="90%"
                            className="bg-gray-700 rounded-b-lg text-left px-4 py-2"
                        />
                    </div>
                </section>
            </>
        );
    }
}

export default Main;