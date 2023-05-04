import React from 'react';
import ReactToPdf from "react-to-pdf";
import { VscFilePdf } from "react-icons/vsc";
const Blog = () => {
    const ref = React.createRef();
    return (
        <div>
 <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({ toPdf }) => (
          //   <button onClick={toPdf}>Generate pdf</button>

          <button
            onClick={toPdf}
            type="button"
            class="text-gray-900 w-56 h-12 bg-gradient-to-r from-cyan-900 via-cyan-300 to-cyan-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 flex font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-xl mr-2 mb-2"
          >
            Download Pdf
            <VscFilePdf className=" lg:text-xl"></VscFilePdf>
          </button>
        )}
      </ReactToPdf>
 <div ref={ref}>

       
    <div >
      <div className="bg-gradient-to-r from-cyan-900 via-green-200 to-cyan-700 p-4 w-full text-start mt-5 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Tell us the differences between uncontrolled and controlled components?
        </h5>
        <p>
         Uncontrolled components in React are those where the form data is handled by the DOM instead of by React. The form inputs in uncontrolled components are controlled by the user and the DOM. Controlled components, on the other hand, are those where the form data is handled by React. The form inputs in controlled components are controlled by React through state, and any updates to the form data must go through React.
        </p>
      </div>
      <div className="bg-gradient-to-br from-cyan-900 via-green-200 to-cyan-700   p-4 text-start mt-5 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
       How to validate React props using PropTypes?
                        </h5>
                        <p>
        PropTypes is a library that allows you to specify the types of data that your React components expect to receive as props. By defining propTypes for your components, you can ensure that the props passed to your components are of the correct type, which can help catch errors early in the development process. To validate props using PropTypes, you can import the PropTypes library and specify the expected prop types in the propTypes object of your component.
                        <br />
                        </p>   
            </div>             
        <div className="bg-gradient-to-br from-cyan-900 via-green-200 to-cyan-700   p-4 text-start mt-5 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Tell us the difference between nodejs and express js.

                            </h5>
                            <p>

                            
      Node.js is a JavaScript runtime that allows developers to run JavaScript code on the server-side. It provides an environment that allows JavaScript to be used for server-side scripting, which means that developers can use the same language for both the front-end and the back-end of their applications. Express.js is a web framework for Node.js that provides features for building web applications, such as routing, middleware, and template engines. While Node.js is a runtime environment for executing JavaScript code, Express.js is a framework that runs on top of Node.js to provide additional functionality for building web applications.
    </p>
                        </div>
      <div className="bg-gradient-to-tr from-cyan-900 via-green-200 to-cyan-700  p-4 text-start mt-5 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
       What is a custom hook, and why will you create a custom hook?
        </h5>

        <p>
       A custom hook in React is a reusable function that encapsulates logic that can be shared between components. Custom hooks allow developers to extract common logic from components into a separate function, which can help reduce code duplication and improve the reusability of the code. Custom hooks are created by using the useEffect and useState hooks and following a naming convention of starting the function name with the word use
</p>



       
    
    </div>
 

            
        </div>
        </div>
        </div>
       
    );
};

export default Blog;